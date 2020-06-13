namespace Dev.Modules {

    export class Symbol extends Core.Modules.Sprite {

        private _container : Core.Modules.Container;
        private _symbolConfig : Core.Interface.ISpriteConfig;
        private _machineInfo : Interface.ISlotConfig;
        private _index : number;
        private _reelMatrix : {r:number,c:number};

        /**
         * Creates an instance of symbol.
         * @param p - parent container
         * @param sI - symbol Index
         * @param rM - reel matrix
         */
        public constructor(mI:Interface.ISlotConfig,sI : number,p:Core.Modules.Container,rM:{r:number,c:number}) {
            let offset = mI.symbol.offset;
            let scale = mI.symbol.scale;
            super(0,(scale.y+offset.y)*(rM.r),mI.slotSymbols[sI],p,scale.x,scale.y);
            this._index = sI;
            this._container = p;
            this._machineInfo = mI;
            this._symbolConfig =  mI.slotSymbols[sI];
            this._reelMatrix = rM;
            this.initProperties();
        }

        private initProperties(){
        }

        public get symbolConfig(){
            return this._symbolConfig;
        }

        public set symbolConfig(config:Core.Interface.ISpriteConfig){
            this._symbolConfig = config;
            let mI = this._machineInfo;
            this.changeSprite(config.frame);
        }

        public set index(index:number){
            this._index = index;
            this.symbolConfig = this._machineInfo.slotSymbols[index];
        }

        public get index(){
            return this._index;
        }

        public get reelMatrix(){
             return this._reelMatrix;
        }
    }
}