namespace Dev.Modules {

    export class WinAnimation extends PIXI.utils.EventEmitter {

        private _container:Core.Modules.Container;
        private _backContainer:Core.Modules.Container;
        private _frontContainer:Core.Modules.Container;
        private _background:Core.Modules.Sprite;
        private _ui:Core.Modules.Sprite;
        private _winHeader:Core.Modules.Text;
        private _uiHeader:Core.Modules.Text;
        private _winTotalAmount:Core.Modules.Text;
        private _winAmount:Core.Modules.Text;
        private _winTimeline:any;
        private _winAmountCount:number = 0;

        public constructor(container:Core.Modules.Container) {
            super();
            this._container = new Core.Modules.Container(0,0,container,"WinContainer");
            this.initProperties();
        }

        private initProperties(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let a = Core.Enum.Anchor;
            this._background = new Core.Modules.Sprite(r.width/2,r.height/2,aI.WinBg,this._container);
            this._backContainer = new Core.Modules.Container(0,0,this._container,"backContainer");
            this._frontContainer = new Core.Modules.Container(0,0,this._container,"frontContainer");
            this._container.alpha = 0;

            this._winHeader = new Core.Modules.Text(r.width/2,r.height/2,aI.SmallWinText,this._frontContainer);
            this._uiHeader = new Core.Modules.Text(r.width/2,r.height/2-100,aI.UIHeaderText,this._frontContainer);
            this._winAmount = new Core.Modules.Text(r.width/2,r.height/2-100,aI.WinAmountText,this._frontContainer);
        }

        public playWinAnimation(animType:Enum.WinType,winAnimInfo:Interface.IWinInfo,amount:number){
            this._winTimeline = new TimelineMax();
            switch(animType){
                case Enum.WinType.SmallWin:
                    this.playBigWinAnimation(winAnimInfo,amount,5);
                    this._winHeader.setTextConfig(Config.AssetConfig.SmallWinText);
                    break;
                case Enum.WinType.BigWin:
                    this.playBigWinAnimation(winAnimInfo,amount,4);
                    this._winHeader.setTextConfig(Config.AssetConfig.BigWinText);
                    break;  
            }
        }

        private playBigWinAnimation(winAnimInfo:Interface.IWinInfo,amount:number,end:number){
            let winAmountTween = TweenMax.fromTo(this._winAmount.scale,.25,{x:1,y:1},{x:1.2,y:1.2,ease:"back.out(0.5)",yoyo:true,repeat:-1})
            let r = Dev.Config.GameConfig.DisplayConfig;
            this._winAmount.text = amount.toString();
            this._winAmount.position.set(r.width/2,r.height/2-100);
            this._winHeader.position.y = -500;
            this._winHeader.alpha = 1;
            this._uiHeader.visible = false;
            this._winAmount.position.set(r.width/2, r.height/2+50);
            this._winTimeline.to(this._container,winAnimInfo.duration,{alpha:1,ease:winAnimInfo.ease});
            this._winTimeline.to(this._winHeader,winAnimInfo.duration,{y:200,ease:winAnimInfo.ease});
            this._winTimeline.to(this._winAmount,winAnimInfo.duration,{alpha:1,ease:winAnimInfo.ease},"-="+winAnimInfo.duration);
            this._winTimeline.to(this._winHeader,winAnimInfo.duration,{y:r.height/2+50,ease:winAnimInfo.ease},"+="+winAnimInfo.showTime);
            this._winTimeline.to(this._winHeader,winAnimInfo.duration,{alpha:0,ease:winAnimInfo.ease},"-="+winAnimInfo.duration);
            this._winTimeline.call(()=>{
                this.emit(Enum.Listeners.OnAnimationAction,Enum.AnimListener.PlayNextAnimation);
                winAmountTween.restart();
                winAmountTween.kill();
            })

            var counter = { var: this._winAmountCount };                
            TweenMax.to(counter, winAnimInfo.duration*5, {
                var: this._winAmountCount + amount, 
                onUpdate: ()=>{
                    this._winAmount.text = Math.ceil(counter.var).toString();
                },
                ease:"power0"
            });
            this._winAmountCount+= amount;
        }

        public showWinAnimation(duration:number,amount:number){
            this._winAmountCount = 0;
            TweenMax.fromTo(this._winAmount.scale,.25,{x:1,y:1},{x:1.2,y:1.2,ease:"back.out(0.5)",yoyo:true,repeat:1})
            let r = Dev.Config.GameConfig.DisplayConfig;
            TweenMax.to(this._container,duration,{alpha:0,delay:duration,onComplete:()=>{
                this.emit(Enum.Listeners.OnAnimationAction,Enum.AnimListener.PlayNextAnimation);
            }});
        }
    }
}