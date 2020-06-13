namespace Dev.Enum {
    
    /**
     * Resource listener
     */
    export enum ResourceListener  {
        AssetLoadCompleted = "AssetLoadCompleted",
        AssetLoading = "AssetLoading",
        AddTextures = "AddTextures",
        AddSounds = "AddSounds",
        AddSpines = "AddSpines",
        AddWebFonts = "AddWebFonts",
        AddPreTextures = "AddPreTextures",
        AssetPreLoadCompleted = "AssetPreLoadCompleted"
    }
    
    /**
     * Spine animation
     */
    export enum SpineAnimation {
    }

    /**
     * Web font
     */
    export enum WebFont {
        LuckiestGuy = "Luckiest Guy",
        Modak = "Modak",
        FontUrl = "assets/fonts/stylesheet.css"
    }

    /**
     * Pre texture
     */
    export enum PreTexture {
        Logo = "assets/gfx/Background/logo.png"
    }

    /**
     * Texture
     */
    export enum Texture {
        Symbol1 = "assets/gfx/Symbols/SYM1.png",
        Symbol2 = "assets/gfx/Symbols/SYM2.png",
        Symbol3 = "assets/gfx/Symbols/SYM3.png",
        Symbol4 = "assets/gfx/Symbols/SYM4.png",
        Symbol5 = "assets/gfx/Symbols/SYM5.png",
        Wild = "assets/gfx/Symbols/SYM0.png",
        WinBg = "assets/gfx/Win/bg.png",
        SpinOut = "assets/gfx/SlotMachine/Spin.png",
        SpinOver = "assets/gfx/SlotMachine/SpinOver.png",
        SpinDisabled = "assets/gfx/SlotMachine/SpinDisabled.png",
        SpinStop = "assets/gfx/SlotMachine/SpinStop.png",
        SpinStopDisabled = "assets/gfx/SlotMachine/SpinStopDisabled.png",
        SpinStopOver = "assets/gfx/SlotMachine/SpinStopOver.png",
        SlotNormalBg = "assets/gfx/Background/bg.jpg",
        SlotBonusFreeSpinBg = "assets/gfx/Background/bonus_bg.jpg",
        Bubble1 = "assets/gfx/Background/Bubble1.png",
        UIRefBg = "assets/gfx/Menu/ui_ref.png",
        Bubble2 = "assets/gfx/Background/Bubble2.png",
        Bubble3 = "assets/gfx/Background/Bubble3.png",
        Bubble4 = "assets/gfx/Background/Bubble4.png"
    }
}