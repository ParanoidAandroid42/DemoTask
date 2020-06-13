/// <reference path= '../enum/SlotEnum.ts'/>
namespace Dev.Config {
    
    import SpineAnimation = Enum.SpineAnimation;

    export class SlotConfig {

        /**
         * Machine type of slot config
         */
        static MachineType = Enum.MachineType.Reel;

        /**
         * Slider machine of slot config
         */
        static SliderMachine: Interface.ISlotConfig = {
            reelMask : {
                normalScale : {x:500,y:200,pY:362,pX:Dev.Config.GameConfig.DisplayConfig.width/2},
                frameScale : {x:500,y:200,pY:362,pX:Dev.Config.GameConfig.DisplayConfig.width/2},
                fallDownScale : {x:890,y:500,positionY:362,positionX:Dev.Config.GameConfig.DisplayConfig.width/2},
                matchScale : {x:890,y:500,pY:362,pX:Dev.Config.GameConfig.DisplayConfig.width/2}
            },
            win:{
                smallWin: {
                    duration:.5,
                    ease:"back.out(2)",
                    coinCount:20,
                    showTime:1
                },
                bigWin: {
                    duration:.5,
                    ease:"back.out(2)",
                    coinCount:20,
                    showTime:1
                },
                bonusWinStart: {
                    duration:.5,
                    ease:"back.out(2)",
                    coinCount:20,
                    showTime:1
                }
            },
            machine : {
                type:Enum.MachineType.Reel,
                reelMatrix : {row:1,column:3}
            },
            symbol : {
                scale : {x:140,y:140},
                offset : {x:20,y:30},
                matchAnimScale : {x:1,y:1},
                winSpriteScale : {x:50,y:50}
            },
            speed : {
            },
            duration : {
                winOffset:.65,
                loopOffset:.25,
                spinningDuration: 1,
                reelStopOffset:.5,
                fallDown:.5,
                fallUp:.5,
                fallDownReelOffset:.1,
                fallUpReelOffset:.1,
                spin: .4,
                reelStop:.25,
                forceReelStop:.1,
                slider:.5,
                matchIconFallDown:1,
                matchIconLeftSide : 1,
                barFill:.8,
                matchSymbol:1
            },
            count:{
                yoyo:25,
                forceYoyo:15,
                fallDown:25,
                fallUp:25,
                fallDownEndPositionY:590,
                matchIconEndPositionY:-460
            },
            ease:{
                fallDown:"back.out(0.5)",
                fallUp:"back.out(0.5)",
                winSymbolMatch:"power0",
                slider:"power0",
                barFill:"power0",
                forceReelStop:"sine.out",
                reelStop:"sine.out",
                spin:"power0"
            },
            winLine : {
                winLinesPath:[
                    [
                        {row:0,column:0,thickness:8},
                        {row:0,column:1,thickness:8},
                        {row:0,column:2,thickness:8}
                    ]
                ],
                duration:.25,
                type: Enum.WinlineType.LinearAnimation
            },
            slotSymbols : [
                {
                    frame: Dev.Enum.Texture.Symbol1,
                    name : "Symbol1",
                    tint : 0xFF0064
                },
                {
                    frame: Dev.Enum.Texture.Symbol2,
                    name : "Symbol2",
                    tint : 0xFF0064 
                },
                {
                    frame: Dev.Enum.Texture.Symbol3,
                    name : "Symbol3",
                    tint : 0xFF0064
                },
                {
                    frame: Dev.Enum.Texture.Symbol4,
                    name : "Symbol4",
                    tint : 0xFF0064 
                },
                {
                    frame: Dev.Enum.Texture.Symbol5,
                    name : "Symbol5",
                    tint : 0xFF0064
                },
                {
                    frame: Dev.Enum.Texture.Wild,
                    name : "Wild",
                    tint : 0xFF0064
                }
            ]
        }
    }
}