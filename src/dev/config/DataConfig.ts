/// <reference path= '../enum/SlotEnum.ts'/>
/// <reference path= '../enum/DataEnum.ts'/>
namespace Dev.Config {

    export class DataConfig {

        static PayoutData : Array<Interface.IPayout> = [
            {
                combination:[
                    {count:2,symbol:Enum.SlotSymbol.Symbol2}
                ],
                payout:{coins:20,cents:20},
                lineIndex: 0
            },
            {
                combination:[
                    {count:2,symbol:Enum.SlotSymbol.Symbol1}
                ],
                payout:{coins:20,cents:20},
                lineIndex: 0
            }, 
            {
                combination:[
                    {count:2,symbol:Enum.SlotSymbol.Symbol3}
                ],
                payout:{coins:20,cents:20},
                lineIndex: 0
            },
            {
                combination:[
                    {count:2,symbol:Enum.SlotSymbol.Symbol4}
                ],
                payout:{coins:20,cents:20},
                lineIndex: 0
            },
            {
                combination:[
                    {count:2,symbol:Enum.SlotSymbol.Symbol5}
                ],
                payout:{coins:20,cents:20},
                lineIndex: 0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol2}
                ],
                payout:{coins:50,cents:50},
                lineIndex: 0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol1}
                ],
                payout:{coins:50,cents:50},
                lineIndex: 0
            }, 
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol3}
                ],
                payout:{coins:50,cents:50},
                lineIndex: 0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol4}
                ],
                payout:{coins:50,cents:50},
                lineIndex: 0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol5}
                ],
                payout:{coins:50,cents:50},
                lineIndex: 0
            }
        ]
    }
}