
module Dev.Controller {
    
    import AnimationType = Dev.Enum.GameAnimListener;
    import AnimationManager = Core.Managers.AnimationManager;

    export class AnimationController extends Core.Controller.AnimationController{

        public AnimListener = Dev.Enum.GameAnimListener;
        
        /** AnimationController class's init function */
        public constructor() {
            super();
        }

        init(){

        }

        initEvents(){
            this.on(Enum.Listeners.OnAnimationAction,this.onAnimationAction.bind(this));
            AnimationManager.Instance.on(Enum.Listeners.OnGameAnimAction,this.onGameAnimationAction.bind(this));
            AnimationManager.Instance.on(Enum.Listeners.OnGameAnimStateAction,this.onGameAnimStateAction.bind(this));
        }

        private onAnimationAction(action : Dev.Enum.AnimListener,data:any):void {
            switch(action){
                case Dev.Enum.AnimListener.SortScenarioAnimation:
                    this.sortScenarioAnimation(data);
                    break;
                case Dev.Enum.AnimListener.PlayNextAnimation:
                    AnimationManager.Instance.playNextAnimations();
                    break;
            }
        } 

        private onGameAnimationAction(action :Enum.GameAnimListener,data:any):void {
            this.emit(Enum.Listeners.OnGameAnimAction,action,data);
        } 

        private onGameAnimStateAction(action:Enum.AnimationStateType):void {
            this.emit(Enum.Listeners.OnGameAnimStateAction,action);
        }

        /**sort scenario animation for slot game */
        public sortScenarioAnimation(data:Interface.IResponseData) {
            let animations = new Array<AnimationType>();
            for (let i = 0; i < Config.AnimConfig.AnimationSort.length; i++) {
                switch (Config.AnimConfig.AnimationSort[i]) {
                    case AnimationType.MatchSymbolWin:
                        if(data.symbolWins!=null)
                        animations.push(AnimationType.MatchSymbolWin);
                        break;
                    case AnimationType.LoopMatchSymbolWin:
                        if(data.symbolWins!=null)
                        animations.push(AnimationType.LoopMatchSymbolWin);
                        break;
                    case AnimationType.SmallWin:
                        if(data.win != null && data.win.winType == Enum.WinType.SmallWin)
                        animations.push(AnimationType.SmallWin);
                        break;
                    case AnimationType.BigWin:
                        if(data.win!= null && data.win.winType == Enum.WinType.BigWin)
                        animations.push(AnimationType.BigWin);
                        break;
                    case AnimationType.ShowWinAmount:
                        if(data.win != null)
                        animations.push(AnimationType.ShowWinAmount);
                        break;
                }
            }
            AnimationManager.Instance.sortScenarioAnimation(animations);
        }
        
        public deleteAnimations(){
            AnimationManager.Instance.deleteAnimations();
        }

        public animations():Array<Dev.Enum.GameAnimListener>{
            return Config.AnimConfig.AnimationSort;
        }
    }
}