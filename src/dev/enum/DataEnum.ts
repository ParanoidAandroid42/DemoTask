namespace Dev.Enum {

    export enum SlotSymbol {
        Wild = 0,
        Symbol1 = 1,
        Symbol2 = 2,
        Symbol3 = 3,
        Symbol4 = 4,
        Symbol5 = 5
    }

    /**
     * listeners actions
     */
    export enum DataListener {
        error = "error",
        freeSpin = "freeSpin",
        spin = "spin",
        reSpin = "reSpin",
        bonus = "bonus",
        gamble = "gamble",
        gambleSelected = "gambleSelected",
        takeWin = "takeWin",
        jackpot = "jackpot",
        history = "history",
        message = "message",
        fakeSymbol = "fakeSymbol",
        randomSymbol = "randomSymbol",
        updateBalance = "updateBalance"
    };
}