
namespace Dev.Stages { 
    
    import GameController = Controller.GameController;
    import DisplayManager = Core.Managers.DisplayManager;
    import AnimInfo = Config.AnimConfig;

    export class MainStage extends Core.Modules.Stage {

        private _background : Modules.Background;
        private _winAnimation : Modules.WinAnimation;
        private _slotMachineController : Controller.MachineController;
        /** running when main stage */
        public init() {
            this.game = GameController.Instance;
            this._background = new Modules.Background(this);
            this._slotMachineController = new Controller.MachineController(this);
            this._winAnimation = new Modules.WinAnimation(this);
            this.onOrientationChanged(DisplayManager.instance.currentOrientation);
        }

        initEvents(){
            this.initDisplayEvents();
            this.initGameEvents();
            this.initSlotMachineEvents();
            this.initWinAnimationEvents()
            this.initBackgroundEvents();
        }

        private onGameDataAction(action:Dev.Enum.DataListener,data:Interface.IResponseData){
            switch(action){
                case Dev.Enum.DataListener.message:
                    this.game.emit(Enum.AnimListener.SortScenarioAnimation,data);
                    break;
            }
            this._slotMachineController.onDataAction(action,data);
        }

        private onAnimationAction(action : Dev.Enum.AnimListener,data?:any):void {
            switch(action){
                case Dev.Enum.AnimListener.SortScenarioAnimation:
                    this.game.emit(Enum.Listeners.OnAnimationAction,Enum.AnimListener.SortScenarioAnimation,data);
                    break;
                case Dev.Enum.AnimListener.PlayNextAnimation:
                    this.game.emit(Enum.Listeners.OnAnimationAction,Enum.AnimListener.PlayNextAnimation,data);
                    break;
            }
        }

        private onGameAnimationAction(action : Enum.GameAnimListener,data:Interface.IResponseData):void {
            console.log(action)
            let wI;
            let r = Dev.Config.GameConfig.DisplayConfig;
            switch(action){
                case Dev.Enum.GameAnimListener.SmallWin:
                    wI = this._slotMachineController.slotMachine.winInfo.smallWin;
                    this._winAnimation.playWinAnimation(Enum.WinType.SmallWin,wI,data.win.currency.cents);
                    break;
                case Dev.Enum.GameAnimListener.BigWin:
                    wI = this._slotMachineController.slotMachine.winInfo.bigWin;
                    this._winAnimation.playWinAnimation(Enum.WinType.BigWin,wI,data.win.currency.cents);
                    break;
                case Dev.Enum.GameAnimListener.MatchSymbolWin:
                    this._slotMachineController.onGameAnimationAction(action);
                    break;
                case Dev.Enum.GameAnimListener.BonusWinStart:
                    wI = this._slotMachineController.slotMachine.winInfo.bonusWinStart;
                    this._winAnimation.playWinAnimation(Enum.WinType.BonusWin,wI,data.bonus.bonusCount);
                    break;
                case Dev.Enum.GameAnimListener.LoopMatchSymbolWin:
                    this._background.changeBackground(Enum.DataListener.spin)
                    this._slotMachineController.onGameAnimationAction(action);
                    this._slotMachineController.controlBar.setButtonState(Enum.SpinButtonState.Normal,true);
                    break;
                case Dev.Enum.GameAnimListener.ShowWinAmount:
                    this._winAnimation.showWinAnimation(1,200);
                    break;
            }
        } 

        private onGameAnimationStateAction(action : Enum.AnimationStateType):void {
            switch(action){
                case Enum.AnimationStateType.AnimationPlaying:
                    this._slotMachineController.controlBar.setButtonState(Enum.SpinButtonState.Normal,false);
                    break;
                case Enum.AnimationStateType.AnimationStopped:
                    this._slotMachineController.controlBar.setButtonState(Enum.SpinButtonState.Normal,true);
                    break;
            }
        }

        private initSlotMachineEvents(){  
            this._slotMachineController.on(Enum.Listeners.OnGameAnimAction,this.onGameAnimationAction.bind(this));
            this._slotMachineController.on(Enum.Listeners.OnAnimationAction,this.onAnimationAction.bind(this));
            this._slotMachineController.on(Enum.Listeners.OnSpinMachineAction,this.checkSlotAnimState.bind(this));
        }

        private initBackgroundEvents(){

        }

        private initWinAnimationEvents(){
            this._winAnimation.on(Enum.Listeners.OnWinAnimAction,this.checkSlotAnimState.bind(this));
            this._winAnimation.on(Enum.Listeners.OnAnimationAction,this.onAnimationAction.bind(this));
        }

          /**
         * Checks slot anim state according to Info.SlotAnimState
         * @param animationAction 
         */
        public checkSlotAnimState(animationAction:Enum.SlotAnimState,value:any):void{  
            switch(animationAction){
                case Enum.SlotAnimState.FinishedBonusStartSpinWin:
                    this._background.changeBackground(Enum.DataListener.bonus);
                    this._slotMachineController.controlBar.emit(Enum.Listeners.OnSpinBarAction,Enum.SpinAction.StartSpin);
                    break;
            }
        }

        private initGameEvents(){
            let dataListener = Object.keys(Enum.DataListener);
            for(let i = 0; i<dataListener.length; i++){
                let dataName = Enum.DataListener[dataListener[i]];
                this.game.on(dataName,(data:Interface.IResponseData)=>{
                    this.onGameDataAction(dataName,data);
                });
            }    
            this.game.on(Enum.Listeners.OnGameAnimAction,this.onGameAnimationAction.bind(this));  
            this.game.on(Enum.Listeners.OnGameAnimStateAction,this.onGameAnimationStateAction.bind(this));     
        }

        setVisualPortrait(): void {
        }

        setVisualLandscape(): void {
        }

        /** running when destroying stage*/
        public dispose() {
        }
    }
}