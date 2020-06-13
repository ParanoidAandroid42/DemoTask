module Dev.Controller {

    interface WinTypeCount<T> {
        [K: number]: T;
    }

    export class DataController extends Core.Controller.DataController{

        private _developmentMode:boolean;

        private _data: Interface.IResponseData = {
            balance: {cents:500,coins:500},
            currencySymbol: "Euro",
            earn: { coins: 0, cents: 0 },
            totalEarn: { coins: 0, cents: 0 },
            bet: { betLines: 10, betLevelValues: null, coinValues: null },
            symbolWins: null,
            symbolMatrix: [
                [this.randomSymbolIndex(),this.randomSymbolIndex(),this.randomSymbolIndex()]
            ]
        };
        /** AnimationController class's init function */
        public constructor() {
            super();
            this._developmentMode = false;
        }

        init(){
        }

        dataAction(data:Interface.IResponseData){
            if(data.currentAction != undefined){
                switch(data.currentAction){
                    case Enum.DataListener.fakeSymbol:
                        console.log("developmentMode on")
                        this._developmentMode = true;
                        this._data.symbolMatrix = data.symbolMatrix;
                        console.log("Symbol matrix = " + this._data.symbolMatrix)
                        console.log("Please spin")
                        this.fakePayCalculate();
                        break;
                    case Enum.DataListener.randomSymbol:
                        console.log("developmentMode false")
                        this._developmentMode = false;
                        console.log("Please spin")
                        this.fakePayCalculate();
                        break;
                }
            }
        }

        public fakePayCalculate(){
            if(!this._developmentMode){
                this._data.symbolMatrix = [
                    [this.randomSymbolIndex(),this.randomSymbolIndex(),this.randomSymbolIndex()]
                ]
            }

            let wins = new Array<Interface.IWData>();
            let symbolCounts : Array<Array<number>> = new Array<Array<number>>();
            for(let t = 0; t<Object.keys(Enum.SlotSymbol).length/2; t++){
                let symbolCount: Array<number> = new Array<number>();
                symbolCounts.push(symbolCount);
            }
            for(let i = 0; i<this._data.symbolMatrix.length; i++){
                for(let t = 0; t<Object.keys(Enum.SlotSymbol).length/2; t++)symbolCounts[t].push(0);
                for(let j = 0; j<this._data.symbolMatrix[i].length; j++){
                    let symbolIndex = this._data.symbolMatrix[i][j];
                    symbolCounts[symbolIndex][i]++;
                }
            }
            
            let payoutData = Config.DataConfig.PayoutData;
            for(let i = 0; i<payoutData.length; i++){
                if(this.checkCombination(payoutData,symbolCounts,i)){
                    let winSymbolMatrix = this.setSymbolMatrix(payoutData[i]);
                    let win:Interface.IWData = {
                        winType:Enum.WinType.SymbolWin,
                        lineIndex:payoutData[i].lineIndex,
                        currency:payoutData[i].payout,
                        winSymbolMatrix : winSymbolMatrix
                    }
                    wins.push(win);
                }
            }   

            if(wins.length!=0)
                this._data.symbolWins = wins;
            else
                this._data.symbolWins = null;

             this.checkWinType();
             console.log(this._data);
        }

        private setSymbolMatrix(payoutData:Interface.IPayout):Array<Dev.Interface.IMatrix>{
            let winline = Config.SlotConfig.SliderMachine.winLine;
            let path = winline.winLinesPath[payoutData.lineIndex];
            let combination = payoutData.combination;
            let winSymbolMatrix: Array<Dev.Interface.IMatrix> = new Array<Dev.Interface.IMatrix>();
            for(let i = 0; i<path.length; i++){
                let row = 0;
                let column  = 0;
                for(let j = 0; j<combination.length; j++){
                    row = path[i].row;
                    column = path[i].column;
                    if(this._data.symbolMatrix[row][column] == combination[j].symbol){
                        winSymbolMatrix.push({row:row,column:column});
                    }
                }

                if(winSymbolMatrix.length == 0)
                    winSymbolMatrix.push({row:row,column:column});
            }
            return winSymbolMatrix;
        }

        private checkWinType(){ 
            /** running like dictionary*/
             let winTypes: WinTypeCount<number> = {};
             let maxCount = 0;
             for(let i = 0; i< this._data.symbolMatrix.length; i++){
                 for(let j = 0; j< this._data.symbolMatrix[i].length; j++){
                    let symbolIndex = this._data.symbolMatrix[i][j];
                    if (!winTypes[symbolIndex]) {
                        winTypes[symbolIndex] = 1;
                    }else{
                        let count = winTypes[symbolIndex];
                        count++;
                        if(maxCount<count)
                        maxCount = count;
                        delete winTypes[symbolIndex];
                        winTypes[symbolIndex] = count;
                    }
                 }
            }

            switch(maxCount){
                case 2:
                    let win: Interface.IWData = {
                        winType: Enum.WinType.SmallWin,
                        currency: {coins:100,cents:100}
                    }
                    this._data.win = win;
                    break;
                case 3:
                    win = {
                        winType: Enum.WinType.BigWin,
                        currency: {coins:200,cents:200}
                    }
                    this._data.win = win;
                    break;
                default:
                    this._data.win = null;
                    break;
            }
        }

        private checkCombination(payoutData:any,symbolCounts:any,index:number):boolean{
            let checks : Array<boolean> = new Array<boolean>();
            for(let j = 0; j<payoutData[index].combination.length; j++){
                checks.push(false);
                let symbolCount = symbolCounts[payoutData[index].combination[j].symbol];
                if(payoutData[index].combination[j].count == symbolCount[payoutData[index].lineIndex]){
                    checks[j] = true;
                }
            }

            for(let m = 0; m<checks.length; m++){
                if(!checks[m]) return false;
            }

            return true;
        }

        private randomSymbolIndex(){
            let random = 0 + Math.floor(Math.random() * Math.floor(6)); 
            return random;
        }

        initEvents(){
            window.addEventListener(Dev.Enum.DataListener.message,(data:any)=>{ this.dataAction(data.data);});
        }

        public get data(){
            return this._data;
        }
    }
}