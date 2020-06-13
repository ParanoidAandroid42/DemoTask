
namespace Dev.Modules {

    const BubblePaths : any[] = [
        { repeatDelay:8,duration:20,path: [{x: 1207, y: 816}, {x: 1000, y: 534},{x: 1180, y: 124},{x: 1049, y: -100}]},
        { repeatDelay:10,duration:15,path: [{x: 800, y: 816}, {x: 620, y: 534},{x: 890, y: 124},{x: 620, y: -100}]},
        { repeatDelay:12,duration:12,path: [{x: 350, y: 816}, {x: 480, y: 534},{x: 320, y: 124},{x: 438, y: -100}]},
        { repeatDelay:5,duration:3,path: [{x: 1107, y: 816}, {x: 1250, y: 534},{x: 1100, y: 124},{x: 1189, y: -300}]}
    ]

    export class Background extends PIXI.utils.EventEmitter{

        private _container : Core.Modules.Container;
        private _bg: Core.Modules.Sprite;
        private _bubbles: Core.Modules.Sprite[] = [];

        public constructor(container:Core.Modules.Container) {
            super();
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aC = {yP:new PIXI.Point(0,250),yFactor:-1};
            this._container = new Core.Modules.Container(0,0,container,"BackgroundContainer");
            this.initProperties();
        }

        private initProperties(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let a = Core.Enum.Anchor;

            this._bg = new Core.Modules.Sprite(r.width/2,r.height/2+200,aI.NormalSpinBg,this._container);
            
            let bubble = new Core.Modules.Sprite(1136,816,aI.Bubbles[0],this._container,null,null);
            this._bubbles.push(bubble);
            bubble = new Core.Modules.Sprite(844,816,aI.Bubbles[1],this._container,null,null);
            this._bubbles.push(bubble);
            bubble = new Core.Modules.Sprite(994,816,aI.Bubbles[2],this._container,null,null);
            this._bubbles.push(bubble);
            bubble = new Core.Modules.Sprite(1136,816,aI.Bubbles[3],this._container,null,null);
            this._bubbles.push(bubble);
            this.playBackgroundPositionAnimation(r.width/2,r.height/2);

            this.playIdleBubbles();
        }

        public playBackgroundBuzzAnimation(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aC = Dev.Config.AnimConfig.Animation;
            let duration = aC.duration.bgBuzzFallDown;
            let ease = aC.ease.bgBuzzFallDown;
            let count = aC.count.bgBuzzFallDown;
            let y = r.height/2+count;
            TweenMax.to(this._bg,duration,{y:y,ease:ease,yoyo:true,repeat:1});
        }

        public playBackgroundPositionAnimation(toX:number,toY:number){
            let aC = Dev.Config.AnimConfig.Animation;
            let duration = aC.duration.bgChangePosition;
            let ease = aC.ease.bgChangePosition;
            TweenMax.to(this._bg,duration,{x:toX,y:toY,ease:ease});
        }

        public changeBackground(type:Enum.DataListener){
            switch (type) {
                case Enum.DataListener.bonus:
                    this._bg.changeSprite(Config.AssetConfig.BonusFeeSpinBg.frame);
                    break;
                case Enum.DataListener.spin:
                    this._bg.changeSprite(Config.AssetConfig.NormalSpinBg.frame);
                    break;
            }
        }

        private playIdleBubbles(){
            let aC = Config.AnimConfig.Animation;
            for(let i = 0; i<this._bubbles.length; i++){
                gsap.to(this._bubbles[i], {
                    motionPath: {
                        path: BubblePaths[i].path,
                        align: "self"
                    },
                    repeat:-1,
                    duration: BubblePaths[i].duration,
                    delay: 1,
                    repeatDelay:BubblePaths[i].repeatDelay,
                    ease: aC.ease.bgIdleBubble
                });
            }
        }

        public get container(){
            return this._container;
        }
    }
}
