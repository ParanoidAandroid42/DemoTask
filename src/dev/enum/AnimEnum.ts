namespace Dev.Enum {
    
    /** Animation State Type*/
    export enum AnimationStateType {
        /** Playing Animation*/
        AnimationPlaying = "AnimationPlaying",
        /** Stopped Animation */
        AnimationStopped = "AnimationStopped"
    }

    /**
     * GameAnimListener actions
     */
    export enum GameAnimListener {
        MatchSymbolWin = "MatchSymbolWin",
        LoopMatchSymbolWin = "LoopMatchSymbolWin",
        SmallWin = "SmallWin",
        BigWin = "BigWin",
        BonusWinStart="BonusWinStart",
        BonusWinFinished = "BonusWinFinished",
        ShowWinAmount = "ShowWinAmount"
    };

    export enum AnimListener {
        PlayNextAnimation = "PlayNextAnimation",
        SortScenarioAnimation = "SortScenarioAnimation"
    }

    /**
     * Anim names
     */
    export enum AnimNames {
    }
}