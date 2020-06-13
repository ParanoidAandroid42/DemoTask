namespace Dev.Enum {

    /**
     * Listeners
     */
    export enum Listeners{
        OnSpinBarAction = "OnSpinBarAction",
        OnSpinMachineAction = "OnSpinMachineAction",
        OnWinLinesAction = "OnWinLinesAction",
        OnWinAnimAction = "OnWinAnimAction",
        OnGameAnimAction = "OnGameAnimAction",
        OnGameAnimStateAction = "OnGameAnimStateAction",
        OnAnimationAction = "OnAnimationAction",
        OnBonusGameAction = "OnBonusGameAction"
    }

    /**
     * Spin action
     */
    export enum SpinAction{
        StartSpin = "StartSpin",
        StopSpin = "StopSpin",
        SkipSpin = "SkipSpin",
        QuickSpin = "QuickSpin",
        ForceSpin = "ForceSpin"
    }

    /**
     * Slot anim state
     */
    export enum SlotAnimState{
        WheelTurnStopped = "WheelTurnStopped",
        MatchIconFinished = "MatchIconAnimFinished",
        MatchIconStarted = "MatchIconStarted",
        MatchSymbolWinFinished = "MatchSymbolWinFinished",
        WinLineStarted = "WinLineStarted",
        WinUpdated = "WinUpdated",
        WinLineFinished = "WinLineFinished",
        MatchSymbolWinStarted = "MatchSymbolWinStarted",
        SpinStarted = "SpinStarted",
        SpinCompleted = "SpinCompleted",
        SpinStopped = "SpinStopped",
        SpinSkipped = "SpinSkipped",
        SpinQuicked = "SpinQuicked",
        SpinForceStopped = "SpinForceStopped",
        ReelSpinCompleted = "ReelSpinCompleted",
        FinishedBonusStartSpinWin = "FinishedStartFreeSpinWin"
    }

    /**
     * Spin button state
     */
    export enum SpinButtonState {
        Normal = "Normal",
        Quick = "Quick",
        Stop = "Stop",
        Auto = "Auto",
        Skip = "Skip"
    }

    /**
     * Machine type
     */
    export enum MachineType{
        Reel = "Reel"
    }

    /**
     * Winline type
     */
    export enum WinlineType{
        LinearAnimation = "LinearAnimation",
        FadeIn = "FadeIn"
    }

    /**
     * Win type
     */
    export enum WinType {
        SmallWin = "SmallWin",
        BigWin = "BigWin",
        SymbolWin = "SymbolWin",
        BonusWin = "BonusWin"
    }
}