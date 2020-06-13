/// <reference path= '../enum/ResourceEnum.ts'/>
module Dev.Config {
    
    import Shape = Core.Enum.Shape;
    import Texture = Enum.Texture;
    import PreTexture = Enum.PreTexture;
    
    export class AssetConfig {

        static ResourceManager = Core.Managers.ResourceManager.Instance;

        static TimerCircle : Core.Interface.IMaskConfig = {
            shape : Shape.Circle,
            name : "TimerCircleMask",
            radius : 1480,
            fill : 0x000000,
            alpha: .75
        }

        static TimerTextStyle = new PIXI.TextStyle({
            fontFamily: "Luckiest Guy",
            fontSize: 300,
            fontWeight: "600",
            fill: "#ffffff",
            align: "center"
        });

        /** Timer text's config*/
        static TimerText: Core.Interface.ITextConfig = {
            text: "5",
            textStyle: AssetConfig.TimerTextStyle,
            name: "timerText",
            anchor:  Core.Enum.Anchor.MiddleCenter
        };

        static StageRect: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "StageBg",
            fill : 0x00000,
            alpha:0
        }
        
        //
        // ─── Button Config ────────────────────────────────────────────────────────────
        //
            
         /**spin button's config*/
         static SpinButton: Core.Interface.IButtonConfig = {
            frames: {
                out: Texture.SpinOut,
                over: Texture.SpinOver,
                down: Texture.SpinOver,
                disabled: Texture.SpinDisabled
            }
        };

         /**stop button's config*/
         static StopButton: Core.Interface.IButtonConfig = {
            frames: {
                out: Texture.SpinStop,
                over: Texture.SpinStopOver,
                down: Texture.SpinStopOver,
                disabled: Texture.SpinStopDisabled
            }
        };

        //
        // ────────────────────────────────────────────────────────── Button Config ─────
        //


        //
        // ─── Text Config ────────────────────────────────────────────────────────────
        //
            
        /**
         * small win header of asset config
         */
        static SmallWinHeader = new PIXI.TextStyle({
            fontFamily: Dev.Enum.WebFont.Modak,
            fontSize: 200,
            fill: 0xf54782,
            fontWeight: "400",
            lineJoin: "round",
            letterSpacing: 3,
            miterLimit: 5,
            stroke: "#fffff",
            strokeThickness: 5
        });

         /**
         * big win header of asset config
         */
        static BigWinHeader = new PIXI.TextStyle({
            fontFamily: Dev.Enum.WebFont.Modak,
            fontSize: 200,
            fill: 0x36a9e1,
            fontWeight: "400",
            lineJoin: "round",
            letterSpacing: 3,
            miterLimit: 5,
            stroke: "#fffff",
            strokeThickness: 5
        });

        /**
         * Small win text of asset config
         */
        static SmallWinText: Core.Interface.ITextConfig = {
            text: "SMALL WIN",
            textStyle: AssetConfig.SmallWinHeader,
            name: "SmallWinHeader"
        };

         /**
         * Win header of asset config
         */
        static UIHeaderStyle = new PIXI.TextStyle({
            fontFamily: Dev.Enum.WebFont.Modak,
            fontSize: 200,
            fill: 0xffed00,
            fontWeight: "400",
            lineJoin: "round",
            letterSpacing: 3,
            miterLimit: 5,
            stroke: "#2c00fb",
            strokeThickness: 5
        });

        static SliderBarTextStyle = new PIXI.TextStyle({
            fontSize: 30,
            fontFamily: Dev.Enum.WebFont.LuckiestGuy,
            fill: "white",
            fontWeight: "400",
            lineJoin: "round",
            letterSpacing: 3,
            miterLimit: 5,
            stroke: "#2c00fb",
            strokeThickness: 5
        });

        static UIHeaderText: Core.Interface.ITextConfig = {
            text: "YOU WON",
            textStyle: AssetConfig.UIHeaderStyle,
            name: "UIHeader"
        };  

        static SliderBarHeaderText: Core.Interface.ITextConfig = {
            text: "%0",
            textStyle: AssetConfig.SliderBarTextStyle,
            name: "SliderBarHeader"
        };  
        
        /** general bold text's style*/
        static GeneralBoldTextStyle = new PIXI.TextStyle({
            fontFamily: "Montserrat, sans-serif",
            fontSize: "22px",
            fontWeight: "bold",
            fill: "#ffffff",
            stroke: 0x000000,
            strokeThickness: 5,
            align: "center"
        });
        
        /** generic bold text's config*/
        static GenericBoldText: Core.Interface.ITextConfig = {
            text: "Generic Bold Text",
            textStyle: AssetConfig.GeneralBoldTextStyle,
            name: "Generic Text"
        };

        static WinAmountStyle = new PIXI.TextStyle({
            fontFamily: Dev.Enum.WebFont.Modak,
            fontSize: 150,
            fill: "white",
            fontWeight: "400",
            lineJoin: "round",
            letterSpacing: 3,
            miterLimit: 5,
            stroke: "#fffff",
            strokeThickness: 5
        });

        static WinLineTextStyle = new PIXI.TextStyle({
            fontFamily: Dev.Enum.WebFont.LuckiestGuy,
            fontSize: 80,
            fill: "white",
            fontWeight: "400",
            lineJoin: "round",
            letterSpacing: 3,
            miterLimit: 5,
            stroke: "#fffff",
            strokeThickness: 5
        });

        static WinAmountText: Core.Interface.ITextConfig = {
            text: "x5",
            textStyle: AssetConfig.WinAmountStyle,
            name: "WinAmountText"
        };

        static WinLineText: Core.Interface.ITextConfig = {
            text: "",
            textStyle: AssetConfig.WinLineTextStyle,
            name: "WinLineText"
        };

        /**
         * big win text of asset config
         */
        static BigWinText: Core.Interface.ITextConfig = {
            text: "BIG WIN",
            textStyle: AssetConfig.BigWinHeader,
            name: "BigWinText"
        };

        /** general text's style*/
        static GeneralTextStyle = new PIXI.TextStyle({
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            fontWeight: "bold",
            fill: "#d08f38",
            stroke: 0x000000,
            strokeThickness: 5,
            align: "center"
        });

        /** generic text's config*/
        static GenericText: Core.Interface.ITextConfig = {
            text: "Generic Text",
            textStyle: AssetConfig.GeneralTextStyle,
            name: "Generic Text"
        };


        /** menu text's config*/
        static MenuText: Core.Interface.ITextConfig = {
            text: "Menu",
            textStyle: AssetConfig.GeneralTextStyle,
            name: "Menu Text"
        };

        //
        // ────────────────────────────────────────────────────────── Text Config ─────
        //

        //
        // ─── Sprite Config ────────────────────────────────────────────────────────────
        //

        /**
         * Normal spin bg of asset config
         */
        static NormalSpinBg : Core.Interface.ISpriteConfig = {
            frame : Texture.SlotNormalBg,
            name : "Background"
        }

        /**
         * Logo  of asset config
         */
        static Logo : Core.Interface.ISpriteConfig = {
            frame : PreTexture.Logo,
            name : "Logo"
        }

        static WinBg : Core.Interface.ISpriteConfig = {
            frame : Texture.WinBg,
            name : "WinBg"
        }

        static BonusFeeSpinBg : Core.Interface.ISpriteConfig = {
            frame : Texture.SlotBonusFreeSpinBg,
            name : "Background"
        }
        static Bubbles : Core.Interface.ISpriteConfig[] = [
            {
                frame : Texture.Bubble1,
                name : "Bubble1"
            },
            {
                frame : Texture.Bubble2,
                name : "Bubble2"
            },  {
                frame : Texture.Bubble3,
                name : "Bubble3"
            },
            {
                frame : Texture.Bubble4,
                name : "Bubble4"
            }
        ]

        static UIRefBg : Core.Interface.ISpriteConfig = {
            frame : Texture.UIRefBg,
            name : "UıRefBg"
        }

        //
        // ────────────────────────────────────────────────────────── Sprite Config ─────
        //

        //
        // ─── Mask Config ────────────────────────────────────────────────────────────
        //

        static LoadingCircleBg : Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "LoadingCircle",
            radius : 10,
            fill : 0xba6329
        }

        static SlotWinLine : Core.Interface.IMaskConfig = {
            shape : Shape.Line,
            name : "SlotWinline",
            fill : 0xffffff
        }

        static LoadingCircleFill : Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "LoadingCircle",
            radius : 10,
            fill : 0xe8cf5b
        }

        static FruitBarMask : Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "FruitBarMask",
            radius : 27,
            fill : 0xffffff
        }

        static SliderFilterMask : Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "SliderFilterMask",
            radius : 15,
            fill : 0xffffff,
            alpha:0
        }

        static PopupRect: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "PopupBg",
            fill : 0x00000,
            alpha:0
        }

        static WheelMask: Core.Interface.IMaskConfig = {
            shape : Shape.Circle,
            name : "WheelMask",
            fill : 0x00000,
            radius:352,
            alpha:1
        }

        static GeneralReelMask: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "GeneralReelMask",
            fill : 0x00000,
            alpha:0
        }

        static Frame: Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "Frame",
            radius:30,
            fill : 0x00000,
            alpha:0.7
        }

        static LoadingBg: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "LoadingBg",
            fill : 0xf2f4d3,
            alpha:0
        }

        //
        // ────────────────────────────────────────────────────────── Mask Config ─────
        //

        //
        // ─── Spine Config ────────────────────────────────────────────────────────────
        //

        //
        // ────────────────────────────────────────────────────────── Spine Config ─────
        //

         //
        // ─── Sequence Animation Config ────────────────────────────────────────────────────────────
        //


         //
        // ────────────────────────────────────────────────────────── Sequence Animation Config ─────
        //
            

         //
        // ─── Particles Config ────────────────────────────────────────────────────────────
        //

          /**fire spark emitter */
          static FireSparkEmitter = {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 0.01,
                "end": 0.2,
                "minimumScaleMultiplier": 0.3
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 85,
                "end": 10,
                "minimumSpeedMultiplier": 0.9
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.16,
                "max": 0.85
            },
            "blendMode": "normal",
            "frequency": 0.006,
            "emitterLifetime": -0.66,
            "maxParticles": 6,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "circle",
            "spawnCircle": {
                "x": 5,
                "y": 0,
                "r": 0
            }
        }

        static SliderBarBubble = {
            "alpha": {
                "start": 1,
                "end": 1
            },
            "scale": {
                "start": 0.2,
                "end": 0.1,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 150,
                "end": 50,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": -100,
                "max": -80
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 20
            },
            "lifetime": {
                "min": 1,
                "max": 1
            },
            "blendMode": "normal",
            "frequency": 0.032,
            "emitterLifetime": 1,
            "maxParticles": 25,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": 0,
                "y": 0,
                "w": 50,
                "h": 0
            }
        }

        //bubble emitter 
        static BubbleVertical = {
            "alpha": {
                "start": 0.9,
                "end": 0
            },
            "scale": {
                "start": 0.51,
                "end": 1,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 500,
                "end": 500,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 260,
                "max": 280
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 50
            },
            "lifetime": {
                "min": 2,
                "max": 2
            },
            "blendMode": "normal",
            "frequency": 0.015,
            "emitterLifetime": 1,
            "maxParticles": 30,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": -500,
                "y": 500,
                "w": 900,
                "h": 0
            }
        }
         //
        // ────────────────────────────────────────────────────────── Particles Config ─────
        //
    }
}