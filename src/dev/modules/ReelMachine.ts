
namespace Dev.Modules {
    export class SliderMachine extends Machine{

        private _reelSpinMask:Core.Modules.Graphic;
        private _frame:Core.Modules.Graphic;
        private _playTimeline:any[];
        private _stopTimeline : any;
        private _matchTween:any;
        private _loopTween:any;

        public constructor(container:Core.Modules.Container) {
            super(Config.SlotConfig.SliderMachine,container);
        }

        public init() {
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;

            this.winLineInfo = Config.SlotConfig.SliderMachine.winLine;
            this.winInfo = Config.SlotConfig.SliderMachine.win;

            let frameScale = Config.SlotConfig.SliderMachine.reelMask.frameScale;
            this._frame = new Core.Modules.Graphic(frameScale.pX,frameScale.pY,frameScale.x,frameScale.y,aI.Frame,this.container);
            this.container.addChild(this.reelContainers[0].parent);

            this.initMask();
            this.playFallDownContainer(this._reelSpinMask);
            this.initEvents();
        }

        private initEvents(){
            let l = Enum.Listeners;
        }
        
        private initMask(){
            let aI = Config.AssetConfig;
            let maskScale = Config.SlotConfig.SliderMachine.reelMask.normalScale;
            this._reelSpinMask = new Core.Modules.Graphic(maskScale.pX,maskScale.pY,maskScale.x,maskScale.y,aI.GeneralReelMask,this.reelContainers[0].parent);
            this.reelContainers[0].parent.mask = this._reelSpinMask;
        }

        public playMatchAnimation(wins:Array<Interface.IWData>,index:number,offsetDuration:number):void {
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let container = new Core.Modules.Container(r.width/2+50,r.height/2-200,this.container);

            let platformY = this.slotMachineConfig.count.matchIconEndPositionY;
            if(index == 0){
                this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.MatchSymbolWinStarted);
                let emitter = new PIXI.particles.Emitter(container, aI.Bubbles[0].frame, aI.BubbleVertical);
                emitter.autoUpdate = true; 
                let max = 10*wins.length;
                if(max > 100)
                    max = 100;
                emitter.maxParticles = max;
                emitter.playOnceAndDestroy(()=>{ 
                    container.destroy();
                });
            }
            this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.WinLineStarted,{index:index,loop:false});
            for(let i = 0; i<wins[index].winSymbolMatrix.length; i++){
                let row = wins[index].winSymbolMatrix[i].row;
                let column = wins[index].winSymbolMatrix[i].column;
                let winSymbol = this.matrixSymbols[row][column];
                let from = {x:winSymbol.scale.x,y:winSymbol.scale.y};
                let to = { x: winSymbol.scale.x +  winSymbol.scale.x*.1,y: winSymbol.scale.y + winSymbol.scale.y*.1};
                this._matchTween = TweenLite.fromTo(winSymbol.scale,.25,{x:from.x,y:from.y},{x:to.x,y:to.y,yoyo:true,repeat:1,onComplete:()=>{
                    if(i==wins[index].winSymbolMatrix.length-1){
                        Core.Managers.TickerManager.instance.addTimeout("Match",offsetDuration,()=>{
                            if(index<wins.length-1){         
                                index++;
                                this.playMatchAnimation(wins,index,offsetDuration); 
                            }
                            else{ 
                                this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.MatchSymbolWinFinished);
                            }
                        },false);
                        this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.WinLineFinished);
                    }
                }})
            }
        }
        
        public playLoopMatchAnimation(wins: Interface.IWData[], index: number, offsetDuration: number): void {
            this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.WinLineStarted,{index:index,loop:true});
            for(let i = 0; i<wins[index].winSymbolMatrix.length; i++){
                let row = wins[index].winSymbolMatrix[i].row;
                let column = wins[index].winSymbolMatrix[i].column;
                let winSymbol = this.matrixSymbols[row][column];
                let from = {x:winSymbol.scale.x,y:winSymbol.scale.y};
                let to = { x: winSymbol.scale.x +  winSymbol.scale.x*.1,y: winSymbol.scale.y + winSymbol.scale.y*.1};
                this._loopTween = TweenLite.fromTo(winSymbol.scale,.25,{x:from.x,y:from.y},{x:to.x,y:to.y,yoyo:true,repeat:1,onComplete:()=>{
                    if(i==wins[index].winSymbolMatrix.length-1){
                        Core.Managers.TickerManager.instance.addTimeout("Loop",offsetDuration,()=>{
                            if(index<wins.length-1){
                                index++;
                                this.playLoopMatchAnimation(wins,index,offsetDuration);
                            }
                            else{
                                this.playLoopMatchAnimation(wins,0,offsetDuration);
                            }
                        },false);
                        this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.WinLineFinished);
                    }
                }});
            }
        }

        public playForceStopAnimation(): void {
            let sI = Config.SlotConfig;
            let sM = sI.SliderMachine;
            this.removeListener(Enum.SlotAnimState.ReelSpinCompleted);
            this.stopTimeline();
            this.on(Enum.SlotAnimState.ReelSpinCompleted,(reelIndex:number)=>{
                if(reelIndex == this.reelStoppedIndex){
                    this._playTimeline[reelIndex].restart();
                    this._playTimeline[reelIndex].kill();
                    TweenMax.to(this.reelContainers[reelIndex].children,sM.duration.forceReelStop, {
                        onStart:()=>{
                            this.reelContainers[reelIndex].filters = null;
                            if(reelIndex == this.reelContainers.length-1){
                                this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.ReelSpinCompleted);
                            }
                        },
                        ease: sM.ease.forceReelStop,
                        y: "+="+(sM.count.forceYoyo),
                        yoyo:true,
                        repeat:1,
                        onComplete:()=>{
                            if(reelIndex == this.reelContainers.length-1){
                                this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.SpinStopped);
                                this.removeListener(Enum.SlotAnimState.ReelSpinCompleted);
                            }
                        }
                    }); 
                    this.reelStoppedIndex++;
                }
            });
        }

        public playStopAnimation(): void {
            let sI = Config.SlotConfig;
            let sM = sI.SliderMachine;
            this.stopTimeline();
            let index = this.reelStoppedIndex;
            this.on(Enum.SlotAnimState.ReelSpinCompleted,(reelIndex:number)=>{
                if(reelIndex == index){
                    let reelStopOffsetDuration = sM.duration.reelStopOffset;
                    if(index==0)reelStopOffsetDuration = 0;
                    this._stopTimeline.call(()=>{ 
                        this._playTimeline[reelIndex].restart();
                        this._playTimeline[reelIndex].kill();
                        let stopTween = TweenMax.to(this.reelContainers[reelIndex].children,sM.duration.reelStop, {
                            onStart:()=>{
                                this.reelContainers[reelIndex].filters = null;
                                this.reelStoppedIndex++;
                                this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.ReelSpinCompleted);
                            },
                            ease: sM.ease.reelStop,
                            y: "+="+(sM.count.yoyo),
                            yoyo:true,
                            repeat:1,
                            onComplete:()=>{
                                if(reelIndex == this.reelContainers.length-1){
                                    this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.SpinStopped);
                                    this.removeListener(Enum.SlotAnimState.ReelSpinCompleted);
                                }  
                            }
                        });  
                    },null,"+="+(reelStopOffsetDuration));
                }
                index++;
            });
        }

        private stopTimeline(){
            if(this._stopTimeline)this._stopTimeline.kill();
            this._stopTimeline = new TimelineMax();
        }

        playSpinAnimation(): void {
            this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.SpinStarted);
            let sC = this.slotMachineConfig;
            let speed = sC.duration.spin;
            let moveY = sC.symbol.scale.y*(sC.machine.reelMatrix.row) + sC.symbol.offset.y*(sC.machine.reelMatrix.row-1);
            this._playTimeline = [];

            for(let i = 0; i<this.reelContainers.length; i++){
                let timeline = new TimelineMax({repeat:-1}); 
                let blurFilter = new PIXI.filters.BlurFilter();
                blurFilter.blurX = 1;
                blurFilter.blurY = 12;
                blurFilter.autoFit = true;

                this.reelContainers[i].filters = [blurFilter];
                timeline.to(this.reelContainers[i].children,speed, {
                    ease: sC.ease.spin,
                    y: "+="+(moveY+sC.symbol.scale.y-5), 
                    modifiers: {
                        y: function(y:number) {
                            return y/(moveY) <1 ? y: y%(moveY)-sC.symbol.scale.y;
                        }
                    },
                    onComplete:()=>{
                        this.emit(Enum.SlotAnimState.ReelSpinCompleted,i);
                    }
                });
                this._playTimeline.push(timeline);
            }
        }

        public playQuickSpinAnimation(): void {
        }

        public playSkippedAnimation(): void {
            Core.Managers.TickerManager.instance.removeTicker("Loop");
            Core.Managers.TickerManager.instance.removeTicker("Match");
            if(this._matchTween)this._matchTween.kill();
            if(this._loopTween)this._loopTween.kill();
            
            this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.SpinSkipped);
        }

        dispose():void{

        }
    }
}