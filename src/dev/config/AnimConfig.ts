/// <reference path= '../enum/AnimEnum.ts'/>
namespace Dev.Config {

    import AnimNames = Enum.AnimNames;
    import Listener = Enum.GameAnimListener;
    export class AnimConfig {

        /** Sorting animation according to Scenario */
        static AnimationSort: Array<Dev.Enum.GameAnimListener> = [
            Listener.MatchSymbolWin,
            Listener.SmallWin,
            Listener.BigWin,
            Listener.ShowWinAmount,
            Listener.BonusWinStart,
            Listener.LoopMatchSymbolWin
        ];

        /**
         * Animation  of animation config for general animation
         */
        static Animation : Interface.IAnimation = {
            ease : {
                logoScale:"bounce.out",
                logoAlpha:"bounce.out",
                boxFillsAlpha:"power1.inOut",
                bgCurrentSwitch : "power0",
                bgNextSwitch: "power0",
                bgIdle:"sine.inOut",
                bgIdleBubble:"power0",
                bgBuzzFallDown:"power0",
                bgSwitch:"power0",
                bgChangePosition:"sine.out"
            },
            duration : {
                logoScale:.75,
                logoAlpha:.75,
                boxFillsAlpha:.25,
                bgCurrentSwitch:.25,
                bgNextSwitch:.25,
                bgIdle:1,
                bgSwitch:2,
                bgBuzzFallDown:.15,
                bgIdleRandTimeMin: 5,
                bgIdleRandTimeMax:10,
                bgChangePosition:1.25
            },
            speed:{
                boxFillsOffset:.35
            },
            count:{
                bgBuzzFallDown:10,
                bgIdleRandMinAlpha: .5,
                bgIdleRandMaxAlpha:.7,
            }
        }
    }
}