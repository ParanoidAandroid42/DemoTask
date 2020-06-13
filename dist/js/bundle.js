var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var AnimationController = (function (_super) {
            __extends(AnimationController, _super);
            function AnimationController() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvents();
                return _this;
            }
            return AnimationController;
        }(PIXI.utils.EventEmitter));
        Controller.AnimationController = AnimationController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var DataController = (function (_super) {
            __extends(DataController, _super);
            function DataController() {
                var _this = _super.call(this) || this;
                _this._currencyPosition = "suffix";
                _this.init();
                _this.initEvents();
                return _this;
            }
            DataController.prototype.resolveFormat = function (amount) {
                var dec = 2;
                var int = 3;
                var d = this._currencyDSeparator;
                var t = this._currencyTSeparator;
                var r = ("\\d(?=(\\d{" + (int || 3) + "})+" + (dec > 0 ? "\\D" : "$") + ")");
                var n = amount.toFixed(Math.max(0, ~~dec));
                var b = (d ? n.replace(".", d) : n).replace(new RegExp(r, "g"), "$&" + (t || ","));
                var p = this._currencyPosition;
                var s = this._currency;
                var sc = s ? String.fromCharCode(s) : this._currencyCode;
                switch (p) {
                    case "suffix":
                        b = (b + " " + sc);
                        break;
                    case "prefix":
                        b = (sc + " " + b);
                        break;
                }
                return b;
            };
            return DataController;
        }(PIXI.utils.EventEmitter));
        Controller.DataController = DataController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var GameController = (function (_super) {
            __extends(GameController, _super);
            function GameController(data) {
                var _this = _super.call(this) || this;
                Dev.Config.GameConfig.StartConfig = data;
                _this.initProperties();
                return _this;
            }
            GameController.prototype.initProperties = function () {
                this.createManagers();
                this.init();
                this.initResource();
            };
            GameController.prototype.createManagers = function () {
                new Core.Managers.TickerManager();
                if (Dev.Config.GameConfig.StartConfig.fpsMeter)
                    new Core.Modules.StatElement();
                new Core.Managers.AnimationManager();
                new Core.Managers.DisplayManager();
                new Core.Managers.StageManager();
                new Core.Managers.ResourceManager();
            };
            return GameController;
        }(PIXI.utils.EventEmitter));
        Controller.GameController = GameController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var ResourceController = (function (_super) {
            __extends(ResourceController, _super);
            function ResourceController() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvents();
                return _this;
            }
            return ResourceController;
        }(PIXI.utils.EventEmitter));
        Controller.ResourceController = ResourceController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Dev;
(function (Dev) {
    var Common;
    (function (Common) {
        var Controller;
        (function (Controller) {
            var SoundController = (function () {
                function SoundController() {
                    this._isMuteSound = true;
                    this._isMuteMusic = false;
                    this._isMuteSoundFx = false;
                    this._soundFXVolume = .5;
                    this._backgroundSoundVolume = 1;
                }
                SoundController.prototype.muteBackgroundSound = function () {
                };
                SoundController.prototype.muteSpecialsSound = function () {
                };
                SoundController.prototype.muteSound = function (mute) {
                    if (mute) {
                        this.muteSpecialsSound();
                        this.muteBackgroundSound();
                    }
                    else {
                        this.unMuteSpecialsSound();
                        this.unMuteBackgroundSound();
                    }
                };
                SoundController.prototype.unMuteSpecialsSound = function () {
                };
                SoundController.prototype.unMuteBackgroundSound = function () {
                };
                SoundController.prototype.isMuteMusic = function (index) {
                    this._isMuteMusic = index;
                    if (!this._isMuteMusic && this._isMuteSound) {
                        this.unMuteBackgroundSound();
                    }
                    else {
                        this.muteBackgroundSound();
                    }
                };
                SoundController.prototype.isMuteSoundFx = function (index) {
                    this._isMuteSoundFx = index;
                    if (!this._isMuteSoundFx && this._isMuteSound) {
                        this.unMuteSpecialsSound();
                    }
                    else {
                        this.muteSpecialsSound();
                    }
                };
                SoundController.prototype.isMuteSound = function (index) {
                    this._isMuteSound = index;
                    if (this._isMuteSound) {
                        this.isMuteSoundFx(this._isMuteSoundFx);
                        this.isMuteMusic(this._isMuteMusic);
                    }
                    else {
                        this.muteSound(false);
                    }
                };
                return SoundController;
            }());
            Controller.SoundController = SoundController;
        })(Controller = Common.Controller || (Common.Controller = {}));
    })(Common = Dev.Common || (Dev.Common = {}));
})(Dev || (Dev = {}));
var Core;
(function (Core) {
    var Enum;
    (function (Enum) {
        var Anchor;
        (function (Anchor) {
            Anchor[Anchor["MiddleLeft"] = 0] = "MiddleLeft";
            Anchor[Anchor["MiddleRight"] = 1] = "MiddleRight";
            Anchor[Anchor["MiddleCenter"] = 2] = "MiddleCenter";
            Anchor[Anchor["UpLeft"] = 3] = "UpLeft";
            Anchor[Anchor["UpRight"] = 4] = "UpRight";
            Anchor[Anchor["UpCenter"] = 5] = "UpCenter";
            Anchor[Anchor["DownLeft"] = 6] = "DownLeft";
            Anchor[Anchor["DownRight"] = 7] = "DownRight";
            Anchor[Anchor["DownCenter"] = 8] = "DownCenter";
        })(Anchor = Enum.Anchor || (Enum.Anchor = {}));
        var Shape;
        (function (Shape) {
            Shape[Shape["Circle"] = 0] = "Circle";
            Shape[Shape["Rectangle"] = 1] = "Rectangle";
            Shape[Shape["RoundRect"] = 2] = "RoundRect";
            Shape[Shape["Line"] = 3] = "Line";
        })(Shape = Enum.Shape || (Enum.Shape = {}));
    })(Enum = Core.Enum || (Core.Enum = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var AnimationManager = (function (_super) {
            __extends(AnimationManager, _super);
            function AnimationManager() {
                var _this = _super.call(this) || this;
                AnimationManager.Instance = _this;
                return _this;
            }
            AnimationManager.prototype.playNextAnimations = function () {
                if (this._animations.length == 0) {
                    var state = Dev.Enum.AnimationStateType.AnimationStopped;
                    this.emit(Dev.Enum.Listeners.OnGameAnimStateAction, state);
                    return;
                }
                else {
                    var state = Dev.Enum.AnimationStateType.AnimationPlaying;
                    this.emit(Dev.Enum.Listeners.OnGameAnimStateAction, state);
                    var animations = Object.keys(Dev.Enum.GameAnimListener);
                    for (var i = 0; i < animations.length; i++) {
                        if (this._animations[0] == Dev.Enum.GameAnimListener[animations[i]]) {
                            this.emit(Dev.Enum.Listeners.OnGameAnimAction, this._animations[0]);
                        }
                    }
                    delete this._animations[0];
                    this._animations.splice(0, 1);
                }
            };
            AnimationManager.prototype.deleteAnimations = function () {
                if (this._animations) {
                    for (var i = 0; i < this._animations.length; i++) {
                        delete this._animations[i];
                    }
                }
            };
            AnimationManager.prototype.sortScenarioAnimation = function (animations) {
                this.deleteAnimations();
                this._animations = animations;
                this.playNextAnimations();
            };
            Object.defineProperty(AnimationManager.prototype, "animations", {
                get: function () {
                    return this._animations;
                },
                enumerable: true,
                configurable: true
            });
            return AnimationManager;
        }(PIXI.utils.EventEmitter));
        Managers.AnimationManager = AnimationManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var DisplayListener;
        (function (DisplayListener) {
            DisplayListener["Resize"] = "resize";
            DisplayListener["OrientationChanged"] = "OrientationChanged";
        })(DisplayListener = Enum.DisplayListener || (Enum.DisplayListener = {}));
        ;
        var Orientation;
        (function (Orientation) {
            Orientation[Orientation["Landscape"] = 0] = "Landscape";
            Orientation[Orientation["Portrait"] = 1] = "Portrait";
            Orientation[Orientation["None"] = 2] = "None";
        })(Orientation = Enum.Orientation || (Enum.Orientation = {}));
        var ScaleModeType;
        (function (ScaleModeType) {
            ScaleModeType[ScaleModeType["Full"] = 0] = "Full";
            ScaleModeType[ScaleModeType["MaxHeight"] = 1] = "MaxHeight";
            ScaleModeType[ScaleModeType["SafeArea"] = 2] = "SafeArea";
        })(ScaleModeType = Enum.ScaleModeType || (Enum.ScaleModeType = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var ScaleModeType = Dev.Enum.ScaleModeType;
        var GameConfig = (function () {
            function GameConfig() {
            }
            GameConfig.DisplayConfig = {
                width: 1280,
                height: 720,
                resizeMode: ScaleModeType.Full,
                landscape: true,
                portrait: true
            };
            return GameConfig;
        }());
        Config.GameConfig = GameConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var GameInformation = Dev.Config.GameConfig;
        var ResizeModeType = Dev.Enum.ScaleModeType;
        var Orientation = Dev.Enum.Orientation;
        var DisplayListener = Dev.Enum.DisplayListener;
        var DisplayManager = (function (_super) {
            __extends(DisplayManager, _super);
            function DisplayManager() {
                var _this = _super.call(this) || this;
                _this.to = 0;
                DisplayManager.instance = _this;
                var w = GameInformation.DisplayConfig.width;
                var h = GameInformation.DisplayConfig.height;
                _this.initProperties(w, h);
                return _this;
            }
            ;
            DisplayManager.prototype.initProperties = function (w, h) {
                var targetCanvasName = GameInformation.StartConfig.targetCanvasName;
                this._targetCanvas = document.getElementById(targetCanvasName);
                this._app = new PIXI.Application({
                    width: w,
                    height: h,
                    backgroundColor: 0x0000,
                    antialias: true
                });
                this._app.renderer.view.id = "videoslot";
                if (this._targetCanvas != undefined)
                    this._targetCanvas.appendChild(this._app.view);
                else
                    document.body.appendChild(this._app.view);
                if (GameInformation.StartConfig.maxHeight != undefined && GameInformation.StartConfig.maxHeight != 0)
                    GameInformation.DisplayConfig.resizeMode = ResizeModeType.MaxHeight;
                this._rendererContainer = this._app.stage;
                this._renderer = this._app.renderer;
                this._width = w;
                this._height = h;
                this._currentOrientation = Dev.Enum.Orientation.None;
                document.getElementById("videoslot");
                this.onResizeHandler();
                this.initEvents();
            };
            DisplayManager.prototype.initEvents = function () {
                if (Dev.Config.GameConfig.StartConfig.fullScreen) {
                    document.body.ontouchend = this.onFullscreenChange.bind(this);
                    document.body.onclick = this.onFullscreenChange.bind(this);
                }
                window.addEventListener(DisplayListener.Resize, this.onResizeHandler.bind(this));
            };
            DisplayManager.prototype.onFullscreenChange = function () {
                var elem = document.documentElement;
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                }
                else if (elem["mozRequestFullScreen"]) {
                    elem["mozRequestFullScreen"]();
                }
                else if (elem["webkitRequestFullscreen"]) {
                    elem["webkitRequestFullscreen"]();
                }
                else if (elem["msRequestFullscreen"]) {
                    elem["msRequestFullscreen"]();
                }
            };
            DisplayManager.prototype.onResizeHandler = function () {
                var _this = this;
                this.setResizeMode();
                clearTimeout(this.to);
                this.to = setTimeout(function () {
                    _this.setOrientationMode();
                }, 50);
            };
            DisplayManager.prototype.setOrientationMode = function () {
                var width, height;
                switch (GameInformation.DisplayConfig.resizeMode) {
                    case ResizeModeType.Full:
                        width = window.innerWidth;
                        height = window.innerHeight;
                        if (height >= width && this._currentOrientation != Orientation.Portrait) {
                            this.currentOrientation = Orientation.Portrait;
                        }
                        else if (height < width && this._currentOrientation != Orientation.Landscape) {
                            this.currentOrientation = Orientation.Landscape;
                        }
                        break;
                    case ResizeModeType.MaxHeight:
                        width = this._targetCanvas.clientWidth;
                        height = this._targetCanvas.clientHeight;
                        if (width <= 450 && this._currentOrientation != Orientation.Portrait) {
                            this.currentOrientation = Orientation.Portrait;
                        }
                        else if (width > 450 && this._currentOrientation != Orientation.Landscape) {
                            this.currentOrientation = Orientation.Landscape;
                        }
                        break;
                    case ResizeModeType.SafeArea:
                        break;
                }
            };
            DisplayManager.prototype.setResizeMode = function () {
                var r;
                var w, h;
                switch (GameInformation.DisplayConfig.resizeMode) {
                    case ResizeModeType.Full:
                        h = window.innerHeight;
                        r = Math.min(window.innerWidth / GameInformation.DisplayConfig.width, window.innerHeight / GameInformation.DisplayConfig.height);
                        w = Math.ceil(GameInformation.DisplayConfig.width * r);
                        h = Math.ceil(GameInformation.DisplayConfig.height * r);
                        this._renderer.resize(w, h);
                        this._rendererContainer.scale.y = this._rendererContainer.scale.x = r;
                        break;
                    case ResizeModeType.MaxHeight:
                        var maxHeight = GameInformation.StartConfig.maxHeight;
                        w = this._targetCanvas.clientHeight;
                        r = Math.min(this._targetCanvas.clientWidth / GameInformation.DisplayConfig.width, this._targetCanvas.clientHeight / GameInformation.DisplayConfig.height);
                        w = Math.ceil(GameInformation.DisplayConfig.width * r);
                        h = Math.ceil(GameInformation.DisplayConfig.height * r);
                        if (h < maxHeight)
                            maxHeight = h;
                        this._renderer.resize(this._targetCanvas.clientWidth, maxHeight);
                        this._rendererContainer.scale.y = this._rendererContainer.scale.x = r;
                        var clientW = this._targetCanvas.clientWidth;
                        var displayW = GameInformation.DisplayConfig.width * r;
                        this._rendererContainer.position.x = (clientW - displayW) / 2;
                        break;
                    case ResizeModeType.SafeArea:
                        break;
                }
            };
            Object.defineProperty(DisplayManager.prototype, "renderer", {
                get: function () {
                    return this._renderer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "rendererContainer", {
                get: function () {
                    return this._rendererContainer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "width", {
                get: function () {
                    return this._width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "height", {
                get: function () {
                    return this._height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "currentOrientation", {
                get: function () {
                    return this._currentOrientation;
                },
                set: function (value) {
                    this._currentOrientation = value;
                    this.emit(Dev.Enum.DisplayListener.OrientationChanged, value);
                },
                enumerable: true,
                configurable: true
            });
            return DisplayManager;
        }(PIXI.utils.EventEmitter));
        Managers.DisplayManager = DisplayManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var ResourceManager = (function (_super) {
            __extends(ResourceManager, _super);
            function ResourceManager() {
                var _this = _super.call(this) || this;
                ResourceManager.Instance = _this;
                _this._cdnPath = Dev.Config.GameConfig.StartConfig.cdnPath;
                return _this;
            }
            ResourceManager.prototype.assetLoading = function () {
                this._loader = new PIXI.Loader();
                this.addTextures();
                this.addSpines();
                this.addWebFonts();
                this._loader.load();
                this._loader.onProgress.add(this.onProgress.bind(this));
                this._loader.onError.add(this.onError.bind(this));
                this._loader.onLoad.add(this.onLoad.bind(this));
                this._loader.onComplete.add(this.onComplete.bind(this));
            };
            ResourceManager.prototype.assetPreLoading = function () {
                this._loader = new PIXI.Loader();
                this.addPreTextures();
                this._loader.load();
                this._loader.onProgress.add(this.onPreProgress.bind(this));
                this._loader.onError.add(this.onPreError.bind(this));
                this._loader.onLoad.add(this.onPreLoad.bind(this));
                this._loader.onComplete.add(this.onPreComplete.bind(this));
            };
            ResourceManager.prototype.addTextures = function () {
                var textures = Object.keys(Dev.Enum.Texture);
                for (var i = 0; i < textures.length; i++)
                    this._loader.add(this._cdnPath + Dev.Enum.Texture[textures[i]]);
            };
            ResourceManager.prototype.addPreTextures = function () {
                var textures = Object.keys(Dev.Enum.PreTexture);
                for (var i = 0; i < textures.length; i++)
                    this._loader.add(this._cdnPath + Dev.Enum.PreTexture[textures[i]]);
            };
            ResourceManager.prototype.addWebFonts = function () {
                var webFonts = Object.keys(Dev.Enum.WebFont);
                for (var i = 0; i < webFonts.length; i++) {
                    WebFont.load({
                        custom: {
                            families: [Dev.Enum.WebFont[webFonts[i]]],
                            urls: [this._cdnPath + Dev.Enum.WebFont.FontUrl]
                        }
                    });
                }
            };
            ResourceManager.prototype.addSpines = function () {
                var spines = Object.keys(Dev.Enum.SpineAnimation);
                for (var i = 0; i < spines.length; i++)
                    this._loader.add(this._cdnPath + Dev.Enum.SpineAnimation[spines[i]]);
            };
            ResourceManager.prototype.onError = function () {
            };
            ResourceManager.prototype.onLoad = function () {
                this.emit(Dev.Enum.ResourceListener.AssetLoading);
            };
            ResourceManager.prototype.onComplete = function () {
                this.emit(Dev.Enum.ResourceListener.AssetLoadCompleted);
            };
            ResourceManager.prototype.onProgress = function () {
            };
            ResourceManager.prototype.onPreError = function () {
            };
            ResourceManager.prototype.onPreLoad = function () {
            };
            ResourceManager.prototype.onPreComplete = function () {
                this.emit(Dev.Enum.ResourceListener.AssetPreLoadCompleted);
            };
            ResourceManager.prototype.onPreProgress = function () {
            };
            ResourceManager.prototype.getSpineData = function (resourceName) {
                return this._loader.resources[resourceName].spineData;
            };
            return ResourceManager;
        }(PIXI.utils.EventEmitter));
        Managers.ResourceManager = ResourceManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var StageManager = (function () {
            function StageManager() {
                this._stages = {};
                this._currentStage = null;
                var dR = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                StageManager.Instance = this;
                this._stageContainer = new Core.Modules.Container(0, 0, Managers.DisplayManager.instance.rendererContainer, "StageContainer");
                this._bg = new Core.Modules.Graphic(dR.width / 2, dR.height / 2, dR.width * 3, dR.height * 3, aI.StageRect, this._stageContainer);
            }
            StageManager.prototype.createStage = function (stage, stageName, tween) {
                if (this._stages[stageName] == null) {
                    this._stages[stageName] = new stage();
                    this._stages[stageName].name = stageName;
                    this._stageContainer.addChild(this._stages[stageName]);
                    if (tween) {
                        TweenMax.fromTo(this._bg, 1, { alpha: 1 }, { alpha: 0 });
                        TweenMax.fromTo(this._stages[stageName], 1, { alpha: 0 }, { alpha: 1 });
                    }
                    else {
                        this._bg.alpha = 0;
                        this._stages[stageName].alpha = 1;
                    }
                    this._stageContainer.addChild(this._bg);
                }
                this._currentStage = stage;
            };
            StageManager.prototype.changeStage = function (stage, tween) {
                StageManager.Instance.removeStage(this._currentStage, tween);
                if (tween) {
                    Core.Managers.TickerManager.instance.addTimeout("stageChange", 1, function () {
                        StageManager.Instance.addStage(stage, tween);
                    }, false);
                }
                else {
                    StageManager.Instance.addStage(stage, tween);
                }
            };
            StageManager.prototype.addStage = function (stage, tween) {
                this.createStage(stage, stage.name, tween);
                this._stages[stage.name].init();
                this._stages[stage.name].initEvents();
            };
            StageManager.prototype.getStage = function (stage) {
                return this._stages[stage.name];
            };
            StageManager.prototype.removeStage = function (stage, tween) {
                var _this = this;
                var stageName = stage.name;
                if (tween) {
                    TweenMax.fromTo(this._bg, 1, { alpha: 0 }, { alpha: 1 });
                    TweenMax.fromTo(this._stages[stageName], 1, { alpha: 1 }, { alpha: 0, onComplete: function () {
                            _this._stages[stageName].dispose();
                            _this._stages[stageName].destroy({ children: true, baseTexture: true });
                            delete _this._stages[stageName];
                        } });
                }
                else {
                    this._bg.alpha = 0;
                    this._stages[stageName].alpha = 0;
                    this._stages[stageName].dispose();
                    this._stages[stageName].destroy({ children: true, baseTexture: true });
                    delete this._stages[stageName];
                }
            };
            Object.defineProperty(StageManager.prototype, "stageContainer", {
                get: function () {
                    return this._stageContainer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StageManager.prototype, "currentStage", {
                get: function () {
                    return this._currentStage;
                },
                enumerable: true,
                configurable: true
            });
            return StageManager;
        }());
        Managers.StageManager = StageManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var TickerManager = (function (_super) {
            __extends(TickerManager, _super);
            function TickerManager() {
                var _this = _super.call(this) || this;
                _this._tickers = {};
                _this._gTimes = {};
                _this._intervals = {};
                TickerManager.instance = _this;
                return _this;
            }
            TickerManager.prototype.addTimeout = function (key, duration, callback, loop) {
                var _this = this;
                if (!this._tickers[key]) {
                    var ticker = new PIXI.Ticker();
                    ticker.autoStart = true;
                    ticker.minFPS = 1;
                    this._tickers[key] = ticker;
                    this._gTimes[key] = performance.now();
                    this._intervals[key] = setInterval(function () {
                        _this.addLoop(key, duration, callback, loop);
                    }, duration);
                }
            };
            TickerManager.prototype.addLoop = function (key, duration, callback, loop) {
                var g_TICK = duration * 1000;
                var timeNow = performance.now();
                var timeDiff = timeNow - this._gTimes[key];
                if (timeDiff < g_TICK) {
                    return;
                }
                callback.call("", this);
                if (loop) {
                    this._gTimes[key] = performance.now();
                }
                else {
                    this.removeTicker(key);
                }
            };
            TickerManager.prototype.removeTicker = function (key) {
                if (this._tickers[key] != null && this._tickers[key] != undefined)
                    this._tickers[key].destroy();
                if (this._intervals[key] != null && this._intervals[key] != undefined)
                    clearInterval(this._intervals[key]);
                delete this._tickers[key];
                delete this._intervals[key];
                delete this._gTimes[key];
            };
            Object.defineProperty(TickerManager.prototype, "tickers", {
                get: function () {
                    return this._tickers;
                },
                enumerable: true,
                configurable: true
            });
            return TickerManager;
        }(PIXI.Ticker));
        Managers.TickerManager = TickerManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var ButtonStates;
        (function (ButtonStates) {
            ButtonStates["Disabled"] = "Disabled";
            ButtonStates["Down"] = "Down";
            ButtonStates["Out"] = "Out";
            ButtonStates["Over"] = "Over";
        })(ButtonStates = Modules.ButtonStates || (Modules.ButtonStates = {}));
        var ButtonEvents;
        (function (ButtonEvents) {
            ButtonEvents["pointerdown"] = "pointerdown";
            ButtonEvents["pointerup"] = "pointerup";
            ButtonEvents["pointerover"] = "pointerover";
            ButtonEvents["pointerout"] = "pointerout";
            ButtonEvents["pointertap"] = "pointertap";
        })(ButtonEvents = Modules.ButtonEvents || (Modules.ButtonEvents = {}));
        var Button = (function (_super) {
            __extends(Button, _super);
            function Button(x, y, c, cB, p, w, h) {
                var _this = _super.call(this) || this;
                _this._frames = null;
                _this._state = ButtonStates.Out;
                _this._callback = null;
                _this._isEnabled = true;
                w && (_this.width = w);
                h && (_this.height = h);
                _this.anchor.set(0.5, 0.5);
                _this.position.set(x, y);
                _this.buttonMode = true;
                _this.interactive = true;
                _this._frames = c.frames;
                cB && (_this._callback = cB);
                c.name ? _this.name = c.name : _this.name = "button";
                p && p.addChild(_this);
                _this.state = ButtonStates.Out;
                _this.initEvent();
                return _this;
            }
            Button.prototype.initEvent = function () {
                this.on(ButtonEvents.pointerdown, this.onButtonDown);
                this.on(ButtonEvents.pointerup, this.onButtonUp);
                this.on(ButtonEvents.pointerover, this.onButtonOver);
                this.on(ButtonEvents.pointerout, this.onButtonOut);
                this.on(ButtonEvents.pointerout, this.onButtonOut);
            };
            Button.prototype.onButtonDown = function () {
                this.state = ButtonStates.Down;
            };
            Button.prototype.onButtonUp = function () {
                this._callback.call("", this);
            };
            Button.prototype.onButtonOver = function () {
                this.state = ButtonStates.Over;
            };
            Button.prototype.onButtonOut = function () {
                this.state = ButtonStates.Out;
            };
            Object.defineProperty(Button.prototype, "state", {
                set: function (state) {
                    this._state = state;
                    switch (state) {
                        case ButtonStates.Out:
                            this.texture = PIXI.Texture.from(this._frames.out);
                            break;
                        case ButtonStates.Over:
                            this.texture = PIXI.Texture.from(this._frames.over);
                            break;
                        case ButtonStates.Down:
                            this.texture = PIXI.Texture.from(this._frames.down);
                            break;
                        case ButtonStates.Disabled:
                            this.texture = PIXI.Texture.from(this._frames.disabled);
                            break;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Button.prototype.changeButtonConfig = function (buttonConfig) {
                this._frames = buttonConfig.frames;
                this.state = this._state;
            };
            Button.prototype.changeTexture = function (texture) {
                this.texture = PIXI.Texture.from(texture);
            };
            Object.defineProperty(Button.prototype, "isEnabled", {
                set: function (enable) {
                    this._isEnabled = enable;
                    if (!this._isEnabled) {
                        this.state = ButtonStates.Disabled;
                    }
                    else {
                        this.state = ButtonStates.Out;
                    }
                    this.interactive = enable;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            return Button;
        }(PIXI.Sprite));
        Modules.Button = Button;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var ButtonText = (function (_super) {
            __extends(ButtonText, _super);
            function ButtonText(x, y, w, h, c, cB, p) {
                var _this = _super.call(this, x, y, c.bConfig, cB, p, w, h) || this;
                _this._text = new Modules.Text(0, 0, c.tConfig, _this, w, h);
                if (c.name)
                    _this.name = c.name;
                return _this;
            }
            Object.defineProperty(ButtonText.prototype, "textAsset", {
                get: function () {
                    return this._text;
                },
                enumerable: true,
                configurable: true
            });
            return ButtonText;
        }(Modules.Button));
        Modules.ButtonText = ButtonText;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Container = (function (_super) {
            __extends(Container, _super);
            function Container(x, y, p, n) {
                var _this = _super.call(this) || this;
                if (n)
                    _this.name = n;
                if (p)
                    p.addChild(_this);
                if (x)
                    _this.position.x = x;
                if (y)
                    _this.position.y = y;
                return _this;
            }
            return Container;
        }(PIXI.Container));
        Modules.Container = Container;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Container2d = (function (_super) {
            __extends(Container2d, _super);
            function Container2d(x, y, p, n) {
                var _this = _super.call(this) || this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                if (n)
                    _this.name = n;
                if (p)
                    p.addChild(_this);
                _this.position.x = x;
                _this.position.y = y;
                return _this;
            }
            Container2d.prototype.setAffine = function (affine) {
                this.proj.affine = affine;
            };
            Container2d.prototype.setAxisX = function (pos, factor) {
                this.proj.setAxisX(pos, factor);
            };
            Container2d.prototype.setAxisY = function (pos, factor) {
                this.proj.setAxisY(pos, factor);
            };
            return Container2d;
        }(PIXI.projection.Container2d));
        Modules.Container2d = Container2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Graphic = (function (_super) {
            __extends(Graphic, _super);
            function Graphic(x, y, w, h, c, p, a) {
                var _this = _super.call(this) || this;
                _this._config = c;
                _this._width = w;
                _this._height = h;
                c.name ? _this.name = c.name : _this.name = "mask";
                _this._position = { x: x, y: y };
                _this._config.anchor = a;
                c.alpha ? _this.alpha = c.alpha : _this.alpha = 1;
                p && p.addChild(_this);
                _this.setShape(c);
                _this.setAnchor(a);
                _this.scale.set(1, 1);
                return _this;
            }
            Graphic.prototype.setShape = function (c) {
                switch (c.shape) {
                    case Core.Enum.Shape.Circle:
                        var fill = c.fill ? c.fill : 0x000000;
                        var radius = c.radius ? c.radius : 1000;
                        var alpha = c.alpha ? c.alpha : 1;
                        this.beginFill(fill, alpha).drawCircle(0, 0, radius).endFill();
                        break;
                    case Core.Enum.Shape.Rectangle:
                        fill = c.fill ? c.fill : 0x00000;
                        alpha = c.alpha ? c.alpha : 1;
                        this.beginFill(fill, alpha)
                            .drawRect(0, 0, this._width, this._height)
                            .endFill();
                        break;
                    case Core.Enum.Shape.Line:
                        fill = c.fill ? c.fill : 0x00000;
                        alpha = c.alpha ? c.alpha : 1;
                        this.beginFill(fill, alpha);
                        this.lineStyle(this._width, fill, 1, .5);
                        this.endFill();
                        break;
                    case Core.Enum.Shape.RoundRect:
                        fill = c.fill ? c.fill : 0x00000;
                        alpha = c.alpha ? c.alpha : 1;
                        radius = c.radius ? c.radius : 1000;
                        this.beginFill(fill, alpha);
                        this.drawRoundedRect(0, 0, this._width, this._height, radius);
                        this.endFill();
                        break;
                }
            };
            Graphic.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.pivot.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.pivot.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.pivot.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.pivot.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.position.set(this._position.x - this._width / 2, this._position.y - this.height / 2);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.pivot.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.pivot.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.pivot.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.pivot.set(1, 1);
                            break;
                    }
                }
                else {
                    this.position.set(this._position.x - this._width / 2, this._position.y - this.height / 2);
                }
            };
            Graphic.prototype.drawLine = function (endPoint, width) {
                this.lineTo(endPoint.x, endPoint.y);
                this.width = width;
            };
            Object.defineProperty(Graphic.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            Graphic.prototype.setPosition = function (x, y) {
                this._position.x = x;
                this._position.y = y;
                this.setAnchor(this._config.anchor);
            };
            return Graphic;
        }(PIXI.Graphics));
        Modules.Graphic = Graphic;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Plane2d = (function (_super) {
            __extends(Plane2d, _super);
            function Plane2d(x, y, p, aC, n) {
                var _this = _super.call(this) || this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                if (n)
                    _this.name = n;
                if (p)
                    p.addChild(_this);
                _this.position.x = x + r.width / 2;
                _this.position.y = y + r.height / 2;
                if (!aC)
                    aC = { yP: new PIXI.Point(0, r.height / 2), yFactor: -1 };
                if (aC.xP)
                    _this.setAxisX(aC.xP, aC.xFactor);
                if (aC.yP)
                    _this.setAxisY(aC.yP, aC.yFactor);
                return _this;
            }
            Plane2d.prototype.setAxisX = function (pos, factor) {
                this.proj.setAxisX(pos, factor);
            };
            Plane2d.prototype.setAxisY = function (pos, factor) {
                this.proj.setAxisY(pos, factor);
            };
            return Plane2d;
        }(PIXI.projection.Container2d));
        Modules.Plane2d = Plane2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var SequenceAnimation = (function (_super) {
            __extends(SequenceAnimation, _super);
            function SequenceAnimation(x, y, c, p, n) {
                var _this = _super.call(this, SequenceAnimation.generateTextures(c.animations[c.defaultAnimName].resource, c.animations[c.defaultAnimName].from, c.animations[c.defaultAnimName].to)) || this;
                _this._config = c;
                _this._animationsConfig = c.animations;
                _this.position.set(x, y);
                _this.name = n;
                p.addChild(_this);
                _this.setAnchor(Core.Enum.Anchor.MiddleCenter);
                return _this;
            }
            SequenceAnimation.generateTextures = function (frame, from, to) {
                var textures = [];
                for (var i = from; i < to; i++) {
                    var index = void 0;
                    if (i < 10) {
                        index = "0000" + i;
                    }
                    else if (i < 100) {
                        index = "000" + i;
                    }
                    else {
                        index = "00" + i;
                    }
                    var texture = PIXI.Texture.from(frame + "/" + index);
                    textures.push(texture);
                }
                return textures;
            };
            SequenceAnimation.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            SequenceAnimation.prototype.playAnimation = function (animationName) {
                var config = this._animationsConfig[animationName];
                SequenceAnimation.generateTextures(config.resource, config.from, config.to);
                config.speed ? this.animationSpeed = config.speed : this.animationSpeed = 1;
                this.loop = config.loop;
                this.gotoAndPlay(config.from);
            };
            return SequenceAnimation;
        }(PIXI.AnimatedSprite));
        Modules.SequenceAnimation = SequenceAnimation;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Spine = (function (_super) {
            __extends(Spine, _super);
            function Spine(x, y, c, p, w, h, a, n) {
                var _this = _super.call(this, Core.Managers.ResourceManager.Instance.getSpineData(c.skeletonDataName)) || this;
                _this._animationsConfig = c.animations;
                w && (_this.width = w);
                h && (_this.height = h);
                n ? _this.name = n : _this.name = "spine";
                _this.position.set(x, y);
                _this._spineConfig = c;
                _this._anchor = a;
                _this.setAnchor(a);
                p.addChild(_this);
                return _this;
            }
            Spine.prototype.setPosition = function (x, y) {
                this.position.set(x, y);
                this.setAnchor(this._anchor);
            };
            Spine.prototype.setAnchor = function (anchor) {
                if (anchor != null || anchor != undefined) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.pivot.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.pivot.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.pivot.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.pivot.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.position.set(this.position.x - this.width / 2, this.position.y - this.height / 2);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.pivot.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.pivot.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.pivot.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.pivot.set(1, 1);
                            break;
                        default:
                            this.position.set(this.position.x - this.width / 2, this.position.y - this.height / 2);
                            break;
                    }
                }
                else {
                    this.position.set(this.position.x - this.width / 2, this.position.y - this.height / 2);
                }
            };
            Spine.prototype.playAnimation = function (animationName) {
                var config = this._animationsConfig[animationName];
                config.speed ? this.state.timeScale = config.speed : this.state.timeScale = 1;
                this.state.setAnimation(0, config.resource, config.loop);
            };
            Spine.prototype.setMix = function (fromName, toName) {
                var fC = this._animationsConfig[fromName];
                var tC = this._animationsConfig[toName];
                var time = 1;
                tC.speed ? time = tC.speed : time = 1;
                this.stateData.setMix(fC.resource, tC.resource, 3);
            };
            Object.defineProperty(Spine.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Spine.prototype, "animConfig", {
                get: function () {
                    return this._animationsConfig;
                },
                set: function (value) {
                    this._animationsConfig = value;
                },
                enumerable: true,
                configurable: true
            });
            return Spine;
        }(PIXI.spine.Spine));
        Modules.Spine = Spine;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Sprite = (function (_super) {
            __extends(Sprite, _super);
            function Sprite(x, y, c, p, w, h, a) {
                var _this = _super.call(this, PIXI.Texture.from(c.frame)) || this;
                w && (_this.width = w);
                h && (_this.height = h);
                c.name ? _this.name = c.name : _this.name = "button";
                _this.setAnchor(a);
                _this.position.set(x, y);
                p && p.addChild(_this);
                return _this;
            }
            Sprite.prototype.changeSprite = function (frameName) {
                this.texture = PIXI.Texture.from(frameName);
            };
            Sprite.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            Object.defineProperty(Sprite.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            return Sprite;
        }(PIXI.Sprite));
        Modules.Sprite = Sprite;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Sprite2d = (function (_super) {
            __extends(Sprite2d, _super);
            function Sprite2d(x, y, c, p, a, w, h) {
                var _this = _super.call(this, PIXI.Texture.from(c.frame)) || this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                w && (_this.width = w);
                h && (_this.height = h);
                c.name ? _this.name = c.name : _this.name = "sprite2d";
                _this._config = c;
                _this.setAnchor(a);
                _this.position.set(x, y);
                p && p.addChild(_this);
                return _this;
            }
            Sprite2d.prototype.changeSprite = function (frameName) {
                this.texture = PIXI.Texture.from(frameName);
            };
            Sprite2d.prototype.setAxisX = function (pos, factor) {
                this.proj.setAxisX(pos, factor);
            };
            Sprite2d.prototype.setAxisY = function (pos, factor) {
                this.proj.setAxisY(pos, factor);
            };
            Sprite2d.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            Object.defineProperty(Sprite2d.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sprite2d.prototype, "config", {
                get: function () {
                    return this._config;
                },
                enumerable: true,
                configurable: true
            });
            return Sprite2d;
        }(PIXI.projection.Sprite2d));
        Modules.Sprite2d = Sprite2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var SpriteText = (function (_super) {
            __extends(SpriteText, _super);
            function SpriteText(x, y, w, h, c, p) {
                var _this = _super.call(this, x, y, c.sConfig, p, w, h) || this;
                _this._text = new Modules.Text(0, 0, c.tConfig, _this, w, h);
                if (c.name)
                    _this.name = c.name;
                return _this;
            }
            Object.defineProperty(SpriteText.prototype, "textAsset", {
                get: function () {
                    return this._text;
                },
                enumerable: true,
                configurable: true
            });
            return SpriteText;
        }(Modules.Sprite));
        Modules.SpriteText = SpriteText;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Stage = (function (_super) {
            __extends(Stage, _super);
            function Stage(x, y, p, n) {
                return _super.call(this, x, y, p, n) || this;
            }
            Stage.prototype.initDisplayEvents = function () {
                var dI = Dev.Enum.DisplayListener;
                this.game.on(dI.OrientationChanged, this.onOrientationChanged.bind(this));
            };
            Stage.prototype.onOrientationChanged = function (value) {
                switch (value) {
                    case Dev.Enum.Orientation.Landscape:
                        this.setVisualLandscape();
                        break;
                    case Dev.Enum.Orientation.Portrait:
                        this.setVisualPortrait();
                        break;
                }
            };
            return Stage;
        }(Modules.Container));
        Modules.Stage = Stage;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var StatElement = (function () {
            function StatElement() {
                var stats = new Stats();
                document.body.appendChild(stats.domElement);
                function animate() {
                    var time = performance.now() / 1000;
                    stats.begin();
                    stats.end();
                    requestAnimationFrame(animate);
                }
                animate();
            }
            return StatElement;
        }());
        Modules.StatElement = StatElement;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Text = (function (_super) {
            __extends(Text, _super);
            function Text(x, y, c, p, w, h) {
                var _this = _super.call(this, c.text, c.textStyle) || this;
                if (c.name)
                    _this.name = c.name;
                w && (_this.width = w);
                h && (_this.height = h);
                _this.position.set(x, y);
                _this.anchor.set(.5, .5);
                p.addChild(_this);
                _this.setAnchor(c.anchor);
                return _this;
            }
            Text.prototype.setTextConfig = function (config) {
                this.style = new PIXI.TextStyle(config.textStyle);
                this.text = config.text;
            };
            Text.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            return Text;
        }(PIXI.Text));
        Modules.Text = Text;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Text2d = (function (_super) {
            __extends(Text2d, _super);
            function Text2d(x, y, z, w, h, c, p) {
                var _this = _super.call(this, c.text, c.textStyle) || this;
                if (c.name)
                    _this.name = c.name;
                w && (_this.width = w);
                h && (_this.height = h);
                _this.position.set(x, y, z);
                _this.anchor.set(.5, .5);
                p && p.addChild(_this);
                _this.setAnchor(c.anchor);
                return _this;
            }
            Text2d.prototype.setTextConfig = function (config) {
                this.style = new PIXI.TextStyle(config.textStyle);
                this.text = config.text;
            };
            Text2d.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            return Text2d;
        }(PIXI.projection.Text2d));
        Modules.Text2d = Text2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Dev;
(function (Dev) {
    var Animation;
    (function (Animation) {
        var GeneralAnimation = (function () {
            function GeneralAnimation() {
            }
            GeneralAnimation.fallAnimation = function (target, duration, positionY, ease) {
                TweenMax.to(target, duration, {
                    ease: "elastic.easeInOut.config(" + ease + ", 0)",
                    y: positionY,
                });
            };
            GeneralAnimation.mexicanWave = function (target, duration, y, delay) {
                var tween = new TimelineMax({ repeat: -1 });
                tween.to(target.scale, duration, { repeat: -1, yoyo: true, delay: delay, y: y, ease: "circ.out" });
                return tween;
            };
            return GeneralAnimation;
        }());
        Animation.GeneralAnimation = GeneralAnimation;
    })(Animation = Dev.Animation || (Dev.Animation = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Animation;
    (function (Animation) {
        var TimerAnimation = (function (_super) {
            __extends(TimerAnimation, _super);
            function TimerAnimation(parentContainer) {
                var _this = _super.call(this) || this;
                _this._container = new Core.Modules.Container(0, 0, parentContainer, "TimerAnimation");
                parentContainer.addChild(_this._container);
                _this.init();
                return _this;
            }
            TimerAnimation.prototype.init = function () {
                var dR = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._mask = new Core.Modules.Graphic(300, 1450, 500, 500, aI.TimerCircle, this._container);
                this._timeText = new Core.Modules.Text(0, 0, aI.TimerText, this._container);
                this._container.alpha = 0;
            };
            TimerAnimation.prototype.maskAnimation = function () {
                var _this = this;
                this._mask.alpha = 0.85;
                TweenLite.fromTo(this._mask.scale, 0.25, { x: 0, y: 0 }, {
                    x: 1, y: 1,
                    onComplete: function () {
                        TweenLite.to(_this._mask, 0.25, { alpha: 0 });
                    }
                });
            };
            TimerAnimation.prototype.setVisualPortrait = function () {
                var dR = Dev.Config.GameConfig.DisplayConfig;
                this._container.position.set(dR.width / 2, dR.height / 2);
            };
            TimerAnimation.prototype.setVisualLandscape = function () {
                var dR = Dev.Config.GameConfig.DisplayConfig;
                this._container.position.set(dR.width / 2, dR.height / 2);
            };
            TimerAnimation.prototype.resolveTimer = function (isShow) {
                switch (isShow) {
                    case true:
                        TweenLite.to(this._container, 0.25, { alpha: 0.8 });
                        this.setTimeText(this.setTime);
                        break;
                    case false:
                        TweenLite.to(this._container, 0.25, { alpha: 0 });
                        this.setTimeText(this.setTime);
                        break;
                }
            };
            TimerAnimation.prototype.resolveTiming = function (value) {
                var _this = this;
                TweenLite.fromTo(this._timeText.scale, 0.25, { x: 1.5, y: 1.5 }, {
                    x: 1, y: 1, onStart: function () {
                        TweenLite.to(_this._timeText.scale, 0.25, { x: 1.5, y: 1.5 });
                        if (value == 0) {
                            _this.resolveTimer(false);
                        }
                        else {
                            _this.resolveTimer(true);
                        }
                    }
                });
            };
            TimerAnimation.prototype.setTimeText = function (value) {
                if (value != 0) {
                    this.maskAnimation();
                    this._timeText.text = (value) + "";
                    this.setTime = value;
                }
                else {
                    this._timeText.text = "";
                    this.setTime = value;
                }
            };
            Object.defineProperty(TimerAnimation.prototype, "setTime", {
                get: function () {
                    return this._time;
                },
                set: function (value) {
                    if (value != undefined) {
                        if (this._time != value) {
                            this._time = value;
                            this.resolveTiming(value);
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TimerAnimation.prototype, "container", {
                get: function () {
                    return this._container;
                },
                enumerable: true,
                configurable: true
            });
            return TimerAnimation;
        }(PIXI.utils.EventEmitter));
        Animation.TimerAnimation = TimerAnimation;
    })(Animation = Dev.Animation || (Dev.Animation = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var AnimationStateType;
        (function (AnimationStateType) {
            AnimationStateType["AnimationPlaying"] = "AnimationPlaying";
            AnimationStateType["AnimationStopped"] = "AnimationStopped";
        })(AnimationStateType = Enum.AnimationStateType || (Enum.AnimationStateType = {}));
        var GameAnimListener;
        (function (GameAnimListener) {
            GameAnimListener["MatchSymbolWin"] = "MatchSymbolWin";
            GameAnimListener["LoopMatchSymbolWin"] = "LoopMatchSymbolWin";
            GameAnimListener["SmallWin"] = "SmallWin";
            GameAnimListener["BigWin"] = "BigWin";
            GameAnimListener["BonusWinStart"] = "BonusWinStart";
            GameAnimListener["BonusWinFinished"] = "BonusWinFinished";
            GameAnimListener["ShowWinAmount"] = "ShowWinAmount";
        })(GameAnimListener = Enum.GameAnimListener || (Enum.GameAnimListener = {}));
        ;
        var AnimListener;
        (function (AnimListener) {
            AnimListener["PlayNextAnimation"] = "PlayNextAnimation";
            AnimListener["SortScenarioAnimation"] = "SortScenarioAnimation";
        })(AnimListener = Enum.AnimListener || (Enum.AnimListener = {}));
        var AnimNames;
        (function (AnimNames) {
        })(AnimNames = Enum.AnimNames || (Enum.AnimNames = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var Listener = Dev.Enum.GameAnimListener;
        var AnimConfig = (function () {
            function AnimConfig() {
            }
            AnimConfig.AnimationSort = [
                Listener.MatchSymbolWin,
                Listener.SmallWin,
                Listener.BigWin,
                Listener.ShowWinAmount,
                Listener.BonusWinStart,
                Listener.LoopMatchSymbolWin
            ];
            AnimConfig.Animation = {
                ease: {
                    logoScale: "bounce.out",
                    logoAlpha: "bounce.out",
                    boxFillsAlpha: "power1.inOut",
                    bgCurrentSwitch: "power0",
                    bgNextSwitch: "power0",
                    bgIdle: "sine.inOut",
                    bgIdleBubble: "power0",
                    bgBuzzFallDown: "power0",
                    bgSwitch: "power0",
                    bgChangePosition: "sine.out"
                },
                duration: {
                    logoScale: .75,
                    logoAlpha: .75,
                    boxFillsAlpha: .25,
                    bgCurrentSwitch: .25,
                    bgNextSwitch: .25,
                    bgIdle: 1,
                    bgSwitch: 2,
                    bgBuzzFallDown: .15,
                    bgIdleRandTimeMin: 5,
                    bgIdleRandTimeMax: 10,
                    bgChangePosition: 1.25
                },
                speed: {
                    boxFillsOffset: .35
                },
                count: {
                    bgBuzzFallDown: 10,
                    bgIdleRandMinAlpha: .5,
                    bgIdleRandMaxAlpha: .7,
                }
            };
            return AnimConfig;
        }());
        Config.AnimConfig = AnimConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var ResourceListener;
        (function (ResourceListener) {
            ResourceListener["AssetLoadCompleted"] = "AssetLoadCompleted";
            ResourceListener["AssetLoading"] = "AssetLoading";
            ResourceListener["AddTextures"] = "AddTextures";
            ResourceListener["AddSounds"] = "AddSounds";
            ResourceListener["AddSpines"] = "AddSpines";
            ResourceListener["AddWebFonts"] = "AddWebFonts";
            ResourceListener["AddPreTextures"] = "AddPreTextures";
            ResourceListener["AssetPreLoadCompleted"] = "AssetPreLoadCompleted";
        })(ResourceListener = Enum.ResourceListener || (Enum.ResourceListener = {}));
        var SpineAnimation;
        (function (SpineAnimation) {
        })(SpineAnimation = Enum.SpineAnimation || (Enum.SpineAnimation = {}));
        var WebFont;
        (function (WebFont) {
            WebFont["LuckiestGuy"] = "Luckiest Guy";
            WebFont["Modak"] = "Modak";
            WebFont["FontUrl"] = "assets/fonts/stylesheet.css";
        })(WebFont = Enum.WebFont || (Enum.WebFont = {}));
        var PreTexture;
        (function (PreTexture) {
            PreTexture["Logo"] = "assets/gfx/Background/logo.png";
        })(PreTexture = Enum.PreTexture || (Enum.PreTexture = {}));
        var Texture;
        (function (Texture) {
            Texture["Symbol1"] = "assets/gfx/Symbols/SYM1.png";
            Texture["Symbol2"] = "assets/gfx/Symbols/SYM2.png";
            Texture["Symbol3"] = "assets/gfx/Symbols/SYM3.png";
            Texture["Symbol4"] = "assets/gfx/Symbols/SYM4.png";
            Texture["Symbol5"] = "assets/gfx/Symbols/SYM5.png";
            Texture["Wild"] = "assets/gfx/Symbols/SYM0.png";
            Texture["WinBg"] = "assets/gfx/Win/bg.png";
            Texture["SpinOut"] = "assets/gfx/SlotMachine/Spin.png";
            Texture["SpinOver"] = "assets/gfx/SlotMachine/SpinOver.png";
            Texture["SpinDisabled"] = "assets/gfx/SlotMachine/SpinDisabled.png";
            Texture["SpinStop"] = "assets/gfx/SlotMachine/SpinStop.png";
            Texture["SpinStopDisabled"] = "assets/gfx/SlotMachine/SpinStopDisabled.png";
            Texture["SpinStopOver"] = "assets/gfx/SlotMachine/SpinStopOver.png";
            Texture["SlotNormalBg"] = "assets/gfx/Background/bg.jpg";
            Texture["SlotBonusFreeSpinBg"] = "assets/gfx/Background/bonus_bg.jpg";
            Texture["Bubble1"] = "assets/gfx/Background/Bubble1.png";
            Texture["UIRefBg"] = "assets/gfx/Menu/ui_ref.png";
            Texture["Bubble2"] = "assets/gfx/Background/Bubble2.png";
            Texture["Bubble3"] = "assets/gfx/Background/Bubble3.png";
            Texture["Bubble4"] = "assets/gfx/Background/Bubble4.png";
        })(Texture = Enum.Texture || (Enum.Texture = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var Shape = Core.Enum.Shape;
        var Texture = Dev.Enum.Texture;
        var PreTexture = Dev.Enum.PreTexture;
        var AssetConfig = (function () {
            function AssetConfig() {
            }
            AssetConfig.ResourceManager = Core.Managers.ResourceManager.Instance;
            AssetConfig.TimerCircle = {
                shape: Shape.Circle,
                name: "TimerCircleMask",
                radius: 1480,
                fill: 0x000000,
                alpha: .75
            };
            AssetConfig.TimerTextStyle = new PIXI.TextStyle({
                fontFamily: "Luckiest Guy",
                fontSize: 300,
                fontWeight: "600",
                fill: "#ffffff",
                align: "center"
            });
            AssetConfig.TimerText = {
                text: "5",
                textStyle: AssetConfig.TimerTextStyle,
                name: "timerText",
                anchor: Core.Enum.Anchor.MiddleCenter
            };
            AssetConfig.StageRect = {
                shape: Shape.Rectangle,
                name: "StageBg",
                fill: 0x00000,
                alpha: 0
            };
            AssetConfig.SpinButton = {
                frames: {
                    out: Texture.SpinOut,
                    over: Texture.SpinOver,
                    down: Texture.SpinOver,
                    disabled: Texture.SpinDisabled
                }
            };
            AssetConfig.StopButton = {
                frames: {
                    out: Texture.SpinStop,
                    over: Texture.SpinStopOver,
                    down: Texture.SpinStopOver,
                    disabled: Texture.SpinStopDisabled
                }
            };
            AssetConfig.SmallWinHeader = new PIXI.TextStyle({
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
            AssetConfig.BigWinHeader = new PIXI.TextStyle({
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
            AssetConfig.SmallWinText = {
                text: "SMALL WIN",
                textStyle: AssetConfig.SmallWinHeader,
                name: "SmallWinHeader"
            };
            AssetConfig.UIHeaderStyle = new PIXI.TextStyle({
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
            AssetConfig.SliderBarTextStyle = new PIXI.TextStyle({
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
            AssetConfig.UIHeaderText = {
                text: "YOU WON",
                textStyle: AssetConfig.UIHeaderStyle,
                name: "UIHeader"
            };
            AssetConfig.SliderBarHeaderText = {
                text: "%0",
                textStyle: AssetConfig.SliderBarTextStyle,
                name: "SliderBarHeader"
            };
            AssetConfig.GeneralBoldTextStyle = new PIXI.TextStyle({
                fontFamily: "Montserrat, sans-serif",
                fontSize: "22px",
                fontWeight: "bold",
                fill: "#ffffff",
                stroke: 0x000000,
                strokeThickness: 5,
                align: "center"
            });
            AssetConfig.GenericBoldText = {
                text: "Generic Bold Text",
                textStyle: AssetConfig.GeneralBoldTextStyle,
                name: "Generic Text"
            };
            AssetConfig.WinAmountStyle = new PIXI.TextStyle({
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
            AssetConfig.WinLineTextStyle = new PIXI.TextStyle({
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
            AssetConfig.WinAmountText = {
                text: "x5",
                textStyle: AssetConfig.WinAmountStyle,
                name: "WinAmountText"
            };
            AssetConfig.WinLineText = {
                text: "",
                textStyle: AssetConfig.WinLineTextStyle,
                name: "WinLineText"
            };
            AssetConfig.BigWinText = {
                text: "BIG WIN",
                textStyle: AssetConfig.BigWinHeader,
                name: "BigWinText"
            };
            AssetConfig.GeneralTextStyle = new PIXI.TextStyle({
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                fontWeight: "bold",
                fill: "#d08f38",
                stroke: 0x000000,
                strokeThickness: 5,
                align: "center"
            });
            AssetConfig.GenericText = {
                text: "Generic Text",
                textStyle: AssetConfig.GeneralTextStyle,
                name: "Generic Text"
            };
            AssetConfig.MenuText = {
                text: "Menu",
                textStyle: AssetConfig.GeneralTextStyle,
                name: "Menu Text"
            };
            AssetConfig.NormalSpinBg = {
                frame: Texture.SlotNormalBg,
                name: "Background"
            };
            AssetConfig.Logo = {
                frame: PreTexture.Logo,
                name: "Logo"
            };
            AssetConfig.WinBg = {
                frame: Texture.WinBg,
                name: "WinBg"
            };
            AssetConfig.BonusFeeSpinBg = {
                frame: Texture.SlotBonusFreeSpinBg,
                name: "Background"
            };
            AssetConfig.Bubbles = [
                {
                    frame: Texture.Bubble1,
                    name: "Bubble1"
                },
                {
                    frame: Texture.Bubble2,
                    name: "Bubble2"
                }, {
                    frame: Texture.Bubble3,
                    name: "Bubble3"
                },
                {
                    frame: Texture.Bubble4,
                    name: "Bubble4"
                }
            ];
            AssetConfig.UIRefBg = {
                frame: Texture.UIRefBg,
                name: "UıRefBg"
            };
            AssetConfig.LoadingCircleBg = {
                shape: Shape.RoundRect,
                name: "LoadingCircle",
                radius: 10,
                fill: 0xba6329
            };
            AssetConfig.SlotWinLine = {
                shape: Shape.Line,
                name: "SlotWinline",
                fill: 0xffffff
            };
            AssetConfig.LoadingCircleFill = {
                shape: Shape.RoundRect,
                name: "LoadingCircle",
                radius: 10,
                fill: 0xe8cf5b
            };
            AssetConfig.FruitBarMask = {
                shape: Shape.RoundRect,
                name: "FruitBarMask",
                radius: 27,
                fill: 0xffffff
            };
            AssetConfig.SliderFilterMask = {
                shape: Shape.RoundRect,
                name: "SliderFilterMask",
                radius: 15,
                fill: 0xffffff,
                alpha: 0
            };
            AssetConfig.PopupRect = {
                shape: Shape.Rectangle,
                name: "PopupBg",
                fill: 0x00000,
                alpha: 0
            };
            AssetConfig.WheelMask = {
                shape: Shape.Circle,
                name: "WheelMask",
                fill: 0x00000,
                radius: 352,
                alpha: 1
            };
            AssetConfig.GeneralReelMask = {
                shape: Shape.Rectangle,
                name: "GeneralReelMask",
                fill: 0x00000,
                alpha: 0
            };
            AssetConfig.Frame = {
                shape: Shape.RoundRect,
                name: "Frame",
                radius: 30,
                fill: 0x00000,
                alpha: 0.7
            };
            AssetConfig.LoadingBg = {
                shape: Shape.Rectangle,
                name: "LoadingBg",
                fill: 0xf2f4d3,
                alpha: 0
            };
            AssetConfig.FireSparkEmitter = {
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
            };
            AssetConfig.SliderBarBubble = {
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
            };
            AssetConfig.BubbleVertical = {
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
            };
            return AssetConfig;
        }());
        Config.AssetConfig = AssetConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var Listeners;
        (function (Listeners) {
            Listeners["OnSpinBarAction"] = "OnSpinBarAction";
            Listeners["OnSpinMachineAction"] = "OnSpinMachineAction";
            Listeners["OnWinLinesAction"] = "OnWinLinesAction";
            Listeners["OnWinAnimAction"] = "OnWinAnimAction";
            Listeners["OnGameAnimAction"] = "OnGameAnimAction";
            Listeners["OnGameAnimStateAction"] = "OnGameAnimStateAction";
            Listeners["OnAnimationAction"] = "OnAnimationAction";
            Listeners["OnBonusGameAction"] = "OnBonusGameAction";
        })(Listeners = Enum.Listeners || (Enum.Listeners = {}));
        var SpinAction;
        (function (SpinAction) {
            SpinAction["StartSpin"] = "StartSpin";
            SpinAction["StopSpin"] = "StopSpin";
            SpinAction["SkipSpin"] = "SkipSpin";
            SpinAction["QuickSpin"] = "QuickSpin";
            SpinAction["ForceSpin"] = "ForceSpin";
        })(SpinAction = Enum.SpinAction || (Enum.SpinAction = {}));
        var SlotAnimState;
        (function (SlotAnimState) {
            SlotAnimState["WheelTurnStopped"] = "WheelTurnStopped";
            SlotAnimState["MatchIconFinished"] = "MatchIconAnimFinished";
            SlotAnimState["MatchIconStarted"] = "MatchIconStarted";
            SlotAnimState["MatchSymbolWinFinished"] = "MatchSymbolWinFinished";
            SlotAnimState["WinLineStarted"] = "WinLineStarted";
            SlotAnimState["WinUpdated"] = "WinUpdated";
            SlotAnimState["WinLineFinished"] = "WinLineFinished";
            SlotAnimState["MatchSymbolWinStarted"] = "MatchSymbolWinStarted";
            SlotAnimState["SpinStarted"] = "SpinStarted";
            SlotAnimState["SpinCompleted"] = "SpinCompleted";
            SlotAnimState["SpinStopped"] = "SpinStopped";
            SlotAnimState["SpinSkipped"] = "SpinSkipped";
            SlotAnimState["SpinQuicked"] = "SpinQuicked";
            SlotAnimState["SpinForceStopped"] = "SpinForceStopped";
            SlotAnimState["ReelSpinCompleted"] = "ReelSpinCompleted";
            SlotAnimState["FinishedBonusStartSpinWin"] = "FinishedStartFreeSpinWin";
        })(SlotAnimState = Enum.SlotAnimState || (Enum.SlotAnimState = {}));
        var SpinButtonState;
        (function (SpinButtonState) {
            SpinButtonState["Normal"] = "Normal";
            SpinButtonState["Quick"] = "Quick";
            SpinButtonState["Stop"] = "Stop";
            SpinButtonState["Auto"] = "Auto";
            SpinButtonState["Skip"] = "Skip";
        })(SpinButtonState = Enum.SpinButtonState || (Enum.SpinButtonState = {}));
        var MachineType;
        (function (MachineType) {
            MachineType["Reel"] = "Reel";
        })(MachineType = Enum.MachineType || (Enum.MachineType = {}));
        var WinlineType;
        (function (WinlineType) {
            WinlineType["LinearAnimation"] = "LinearAnimation";
            WinlineType["FadeIn"] = "FadeIn";
        })(WinlineType = Enum.WinlineType || (Enum.WinlineType = {}));
        var WinType;
        (function (WinType) {
            WinType["SmallWin"] = "SmallWin";
            WinType["BigWin"] = "BigWin";
            WinType["SymbolWin"] = "SymbolWin";
            WinType["BonusWin"] = "BonusWin";
        })(WinType = Enum.WinType || (Enum.WinType = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var SlotSymbol;
        (function (SlotSymbol) {
            SlotSymbol[SlotSymbol["Wild"] = 0] = "Wild";
            SlotSymbol[SlotSymbol["Symbol1"] = 1] = "Symbol1";
            SlotSymbol[SlotSymbol["Symbol2"] = 2] = "Symbol2";
            SlotSymbol[SlotSymbol["Symbol3"] = 3] = "Symbol3";
            SlotSymbol[SlotSymbol["Symbol4"] = 4] = "Symbol4";
            SlotSymbol[SlotSymbol["Symbol5"] = 5] = "Symbol5";
        })(SlotSymbol = Enum.SlotSymbol || (Enum.SlotSymbol = {}));
        var DataListener;
        (function (DataListener) {
            DataListener["error"] = "error";
            DataListener["freeSpin"] = "freeSpin";
            DataListener["spin"] = "spin";
            DataListener["reSpin"] = "reSpin";
            DataListener["bonus"] = "bonus";
            DataListener["gamble"] = "gamble";
            DataListener["gambleSelected"] = "gambleSelected";
            DataListener["takeWin"] = "takeWin";
            DataListener["jackpot"] = "jackpot";
            DataListener["history"] = "history";
            DataListener["message"] = "message";
            DataListener["fakeSymbol"] = "fakeSymbol";
            DataListener["randomSymbol"] = "randomSymbol";
            DataListener["updateBalance"] = "updateBalance";
        })(DataListener = Enum.DataListener || (Enum.DataListener = {}));
        ;
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var DataConfig = (function () {
            function DataConfig() {
            }
            DataConfig.PayoutData = [
                {
                    combination: [
                        { count: 2, symbol: Dev.Enum.SlotSymbol.Symbol2 }
                    ],
                    payout: { coins: 20, cents: 20 },
                    lineIndex: 0
                },
                {
                    combination: [
                        { count: 2, symbol: Dev.Enum.SlotSymbol.Symbol1 }
                    ],
                    payout: { coins: 20, cents: 20 },
                    lineIndex: 0
                },
                {
                    combination: [
                        { count: 2, symbol: Dev.Enum.SlotSymbol.Symbol3 }
                    ],
                    payout: { coins: 20, cents: 20 },
                    lineIndex: 0
                },
                {
                    combination: [
                        { count: 2, symbol: Dev.Enum.SlotSymbol.Symbol4 }
                    ],
                    payout: { coins: 20, cents: 20 },
                    lineIndex: 0
                },
                {
                    combination: [
                        { count: 2, symbol: Dev.Enum.SlotSymbol.Symbol5 }
                    ],
                    payout: { coins: 20, cents: 20 },
                    lineIndex: 0
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Symbol2 }
                    ],
                    payout: { coins: 50, cents: 50 },
                    lineIndex: 0
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Symbol1 }
                    ],
                    payout: { coins: 50, cents: 50 },
                    lineIndex: 0
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Symbol3 }
                    ],
                    payout: { coins: 50, cents: 50 },
                    lineIndex: 0
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Symbol4 }
                    ],
                    payout: { coins: 50, cents: 50 },
                    lineIndex: 0
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Symbol5 }
                    ],
                    payout: { coins: 50, cents: 50 },
                    lineIndex: 0
                }
            ];
            return DataConfig;
        }());
        Config.DataConfig = DataConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var SlotConfig = (function () {
            function SlotConfig() {
            }
            SlotConfig.MachineType = Dev.Enum.MachineType.Reel;
            SlotConfig.SliderMachine = {
                reelMask: {
                    normalScale: { x: 500, y: 200, pY: 362, pX: Dev.Config.GameConfig.DisplayConfig.width / 2 },
                    frameScale: { x: 500, y: 200, pY: 362, pX: Dev.Config.GameConfig.DisplayConfig.width / 2 },
                    fallDownScale: { x: 890, y: 500, positionY: 362, positionX: Dev.Config.GameConfig.DisplayConfig.width / 2 },
                    matchScale: { x: 890, y: 500, pY: 362, pX: Dev.Config.GameConfig.DisplayConfig.width / 2 }
                },
                win: {
                    smallWin: {
                        duration: .5,
                        ease: "back.out(2)",
                        coinCount: 20,
                        showTime: 1
                    },
                    bigWin: {
                        duration: .5,
                        ease: "back.out(2)",
                        coinCount: 20,
                        showTime: 1
                    },
                    bonusWinStart: {
                        duration: .5,
                        ease: "back.out(2)",
                        coinCount: 20,
                        showTime: 1
                    }
                },
                machine: {
                    type: Dev.Enum.MachineType.Reel,
                    reelMatrix: { row: 1, column: 3 }
                },
                symbol: {
                    scale: { x: 140, y: 140 },
                    offset: { x: 20, y: 30 },
                    matchAnimScale: { x: 1, y: 1 },
                    winSpriteScale: { x: 50, y: 50 }
                },
                speed: {},
                duration: {
                    winOffset: .65,
                    loopOffset: .25,
                    spinningDuration: 1,
                    reelStopOffset: .5,
                    fallDown: .5,
                    fallUp: .5,
                    fallDownReelOffset: .1,
                    fallUpReelOffset: .1,
                    spin: .4,
                    reelStop: .25,
                    forceReelStop: .1,
                    slider: .5,
                    matchIconFallDown: 1,
                    matchIconLeftSide: 1,
                    barFill: .8,
                    matchSymbol: 1
                },
                count: {
                    yoyo: 25,
                    forceYoyo: 15,
                    fallDown: 25,
                    fallUp: 25,
                    fallDownEndPositionY: 590,
                    matchIconEndPositionY: -460
                },
                ease: {
                    fallDown: "back.out(0.5)",
                    fallUp: "back.out(0.5)",
                    winSymbolMatch: "power0",
                    slider: "power0",
                    barFill: "power0",
                    forceReelStop: "sine.out",
                    reelStop: "sine.out",
                    spin: "power0"
                },
                winLine: {
                    winLinesPath: [
                        [
                            { row: 0, column: 0, thickness: 8 },
                            { row: 0, column: 1, thickness: 8 },
                            { row: 0, column: 2, thickness: 8 }
                        ]
                    ],
                    duration: .25,
                    type: Dev.Enum.WinlineType.LinearAnimation
                },
                slotSymbols: [
                    {
                        frame: Dev.Enum.Texture.Symbol1,
                        name: "Symbol1",
                        tint: 0xFF0064
                    },
                    {
                        frame: Dev.Enum.Texture.Symbol2,
                        name: "Symbol2",
                        tint: 0xFF0064
                    },
                    {
                        frame: Dev.Enum.Texture.Symbol3,
                        name: "Symbol3",
                        tint: 0xFF0064
                    },
                    {
                        frame: Dev.Enum.Texture.Symbol4,
                        name: "Symbol4",
                        tint: 0xFF0064
                    },
                    {
                        frame: Dev.Enum.Texture.Symbol5,
                        name: "Symbol5",
                        tint: 0xFF0064
                    },
                    {
                        frame: Dev.Enum.Texture.Wild,
                        name: "Wild",
                        tint: 0xFF0064
                    }
                ]
            };
            return SlotConfig;
        }());
        Config.SlotConfig = SlotConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var AnimationType = Dev.Enum.GameAnimListener;
        var AnimationManager = Core.Managers.AnimationManager;
        var AnimationController = (function (_super) {
            __extends(AnimationController, _super);
            function AnimationController() {
                var _this = _super.call(this) || this;
                _this.AnimListener = Dev.Enum.GameAnimListener;
                return _this;
            }
            AnimationController.prototype.init = function () {
            };
            AnimationController.prototype.initEvents = function () {
                this.on(Dev.Enum.Listeners.OnAnimationAction, this.onAnimationAction.bind(this));
                AnimationManager.Instance.on(Dev.Enum.Listeners.OnGameAnimAction, this.onGameAnimationAction.bind(this));
                AnimationManager.Instance.on(Dev.Enum.Listeners.OnGameAnimStateAction, this.onGameAnimStateAction.bind(this));
            };
            AnimationController.prototype.onAnimationAction = function (action, data) {
                switch (action) {
                    case Dev.Enum.AnimListener.SortScenarioAnimation:
                        this.sortScenarioAnimation(data);
                        break;
                    case Dev.Enum.AnimListener.PlayNextAnimation:
                        AnimationManager.Instance.playNextAnimations();
                        break;
                }
            };
            AnimationController.prototype.onGameAnimationAction = function (action, data) {
                this.emit(Dev.Enum.Listeners.OnGameAnimAction, action, data);
            };
            AnimationController.prototype.onGameAnimStateAction = function (action) {
                this.emit(Dev.Enum.Listeners.OnGameAnimStateAction, action);
            };
            AnimationController.prototype.sortScenarioAnimation = function (data) {
                var animations = new Array();
                for (var i = 0; i < Dev.Config.AnimConfig.AnimationSort.length; i++) {
                    switch (Dev.Config.AnimConfig.AnimationSort[i]) {
                        case AnimationType.MatchSymbolWin:
                            if (data.symbolWins != null)
                                animations.push(AnimationType.MatchSymbolWin);
                            break;
                        case AnimationType.LoopMatchSymbolWin:
                            if (data.symbolWins != null)
                                animations.push(AnimationType.LoopMatchSymbolWin);
                            break;
                        case AnimationType.SmallWin:
                            if (data.win != null && data.win.winType == Dev.Enum.WinType.SmallWin)
                                animations.push(AnimationType.SmallWin);
                            break;
                        case AnimationType.BigWin:
                            if (data.win != null && data.win.winType == Dev.Enum.WinType.BigWin)
                                animations.push(AnimationType.BigWin);
                            break;
                        case AnimationType.ShowWinAmount:
                            if (data.win != null)
                                animations.push(AnimationType.ShowWinAmount);
                            break;
                    }
                }
                AnimationManager.Instance.sortScenarioAnimation(animations);
            };
            AnimationController.prototype.deleteAnimations = function () {
                AnimationManager.Instance.deleteAnimations();
            };
            AnimationController.prototype.animations = function () {
                return Dev.Config.AnimConfig.AnimationSort;
            };
            return AnimationController;
        }(Core.Controller.AnimationController));
        Controller.AnimationController = AnimationController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var DataController = (function (_super) {
            __extends(DataController, _super);
            function DataController() {
                var _this = _super.call(this) || this;
                _this._data = {
                    balance: { cents: 500, coins: 500 },
                    currencySymbol: "Euro",
                    earn: { coins: 0, cents: 0 },
                    totalEarn: { coins: 0, cents: 0 },
                    bet: { betLines: 10, betLevelValues: null, coinValues: null },
                    symbolWins: null,
                    symbolMatrix: [
                        [_this.randomSymbolIndex(), _this.randomSymbolIndex(), _this.randomSymbolIndex()]
                    ]
                };
                _this._developmentMode = false;
                return _this;
            }
            DataController.prototype.init = function () {
            };
            DataController.prototype.dataAction = function (data) {
                if (data.currentAction != undefined) {
                    switch (data.currentAction) {
                        case Dev.Enum.DataListener.fakeSymbol:
                            console.log("developmentMode on");
                            this._developmentMode = true;
                            this._data.symbolMatrix = data.symbolMatrix;
                            console.log("Symbol matrix = " + this._data.symbolMatrix);
                            console.log("Please spin");
                            this.fakePayCalculate();
                            break;
                        case Dev.Enum.DataListener.randomSymbol:
                            console.log("developmentMode false");
                            this._developmentMode = false;
                            console.log("Please spin");
                            this.fakePayCalculate();
                            break;
                        case Dev.Enum.DataListener.updateBalance:
                            console.log("Updated Balance");
                            console.log("Current Balance = " + data.balance);
                            this.emit(Dev.Enum.DataListener.updateBalance, data);
                            break;
                    }
                }
            };
            DataController.prototype.fakePayCalculate = function () {
                if (!this._developmentMode) {
                    this._data.symbolMatrix = [
                        [this.randomSymbolIndex(), this.randomSymbolIndex(), this.randomSymbolIndex()]
                    ];
                }
                var wins = new Array();
                var symbolCounts = new Array();
                for (var t = 0; t < Object.keys(Dev.Enum.SlotSymbol).length / 2; t++) {
                    var symbolCount = new Array();
                    symbolCounts.push(symbolCount);
                }
                for (var i = 0; i < this._data.symbolMatrix.length; i++) {
                    for (var t = 0; t < Object.keys(Dev.Enum.SlotSymbol).length / 2; t++)
                        symbolCounts[t].push(0);
                    for (var j = 0; j < this._data.symbolMatrix[i].length; j++) {
                        var symbolIndex = this._data.symbolMatrix[i][j];
                        symbolCounts[symbolIndex][i]++;
                    }
                }
                var payoutData = Dev.Config.DataConfig.PayoutData;
                for (var i = 0; i < payoutData.length; i++) {
                    if (this.checkCombination(payoutData, symbolCounts, i)) {
                        var winSymbolMatrix = this.setSymbolMatrix(payoutData[i]);
                        var win = {
                            winType: Dev.Enum.WinType.SymbolWin,
                            lineIndex: payoutData[i].lineIndex,
                            currency: payoutData[i].payout,
                            winSymbolMatrix: winSymbolMatrix
                        };
                        wins.push(win);
                    }
                }
                if (wins.length != 0)
                    this._data.symbolWins = wins;
                else
                    this._data.symbolWins = null;
                this.checkWinType();
                console.log(this._data);
            };
            DataController.prototype.setSymbolMatrix = function (payoutData) {
                var winline = Dev.Config.SlotConfig.SliderMachine.winLine;
                var path = winline.winLinesPath[payoutData.lineIndex];
                var combination = payoutData.combination;
                var winSymbolMatrix = new Array();
                for (var i = 0; i < path.length; i++) {
                    var row = 0;
                    var column = 0;
                    for (var j = 0; j < combination.length; j++) {
                        row = path[i].row;
                        column = path[i].column;
                        if (this._data.symbolMatrix[row][column] == combination[j].symbol) {
                            winSymbolMatrix.push({ row: row, column: column });
                        }
                    }
                    if (winSymbolMatrix.length == 0)
                        winSymbolMatrix.push({ row: row, column: column });
                }
                return winSymbolMatrix;
            };
            DataController.prototype.checkWinType = function () {
                var winTypes = {};
                var maxCount = 0;
                for (var i = 0; i < this._data.symbolMatrix.length; i++) {
                    for (var j = 0; j < this._data.symbolMatrix[i].length; j++) {
                        var symbolIndex = this._data.symbolMatrix[i][j];
                        if (!winTypes[symbolIndex]) {
                            winTypes[symbolIndex] = 1;
                        }
                        else {
                            var count = winTypes[symbolIndex];
                            count++;
                            if (maxCount < count)
                                maxCount = count;
                            delete winTypes[symbolIndex];
                            winTypes[symbolIndex] = count;
                        }
                    }
                }
                switch (maxCount) {
                    case 2:
                        var win = {
                            winType: Dev.Enum.WinType.SmallWin,
                            currency: { coins: 100, cents: 100 }
                        };
                        this._data.win = win;
                        break;
                    case 3:
                        win = {
                            winType: Dev.Enum.WinType.BigWin,
                            currency: { coins: 200, cents: 200 }
                        };
                        this._data.win = win;
                        break;
                    default:
                        this._data.win = null;
                        break;
                }
            };
            DataController.prototype.checkCombination = function (payoutData, symbolCounts, index) {
                var checks = new Array();
                for (var j = 0; j < payoutData[index].combination.length; j++) {
                    checks.push(false);
                    var symbolCount = symbolCounts[payoutData[index].combination[j].symbol];
                    if (payoutData[index].combination[j].count == symbolCount[payoutData[index].lineIndex]) {
                        checks[j] = true;
                    }
                }
                for (var m = 0; m < checks.length; m++) {
                    if (!checks[m])
                        return false;
                }
                return true;
            };
            DataController.prototype.randomSymbolIndex = function () {
                var random = 0 + Math.floor(Math.random() * Math.floor(6));
                return random;
            };
            DataController.prototype.initEvents = function () {
                var _this = this;
                window.addEventListener(Dev.Enum.DataListener.message, function (data) { _this.dataAction(data.data); });
            };
            Object.defineProperty(DataController.prototype, "data", {
                get: function () {
                    return this._data;
                },
                enumerable: true,
                configurable: true
            });
            return DataController;
        }(Core.Controller.DataController));
        Controller.DataController = DataController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var GameController = (function (_super) {
            __extends(GameController, _super);
            function GameController(data) {
                var _this = _super.call(this, data) || this;
                GameController.Instance = _this;
                return _this;
            }
            GameController.prototype.init = function () {
                this.resourceController = new Controller.ResourceController();
            };
            GameController.prototype.initResource = function () {
                var listener = Dev.Enum.ResourceListener;
                this.once(listener.AssetLoadCompleted, this.onAssetLoadedCompleted);
            };
            GameController.prototype.initEventData = function () {
                var _this = this;
                var dataListener = Object.keys(Dev.Enum.DataListener);
                var _loop_1 = function (i) {
                    var dataName = Dev.Enum.DataListener[dataListener[i]];
                    this_1.dataController.on(dataName, function (data) {
                        _this.emit(dataName, data);
                    });
                };
                var this_1 = this;
                for (var i = 0; i < dataListener.length; i++) {
                    _loop_1(i);
                }
            };
            GameController.prototype.initEventAnimation = function () {
                this.animationController.on(Dev.Enum.Listeners.OnGameAnimAction, this.onGameAnimationAction.bind(this));
                this.animationController.on(Dev.Enum.Listeners.OnGameAnimStateAction, this.onGameAnimationStateAction.bind(this));
                this.on(Dev.Enum.Listeners.OnAnimationAction, this.onAnimationAction.bind(this));
            };
            GameController.prototype.onAnimationAction = function (action, data) {
                var onAnimAction = Dev.Enum.Listeners.OnAnimationAction;
                switch (action) {
                    case Dev.Enum.AnimListener.SortScenarioAnimation:
                        this.animationController.emit(onAnimAction, action, data);
                        break;
                    case Dev.Enum.AnimListener.PlayNextAnimation:
                        this.animationController.emit(onAnimAction, action, data);
                        break;
                }
            };
            GameController.prototype.onGameAnimationAction = function (action) {
                this.emit(Dev.Enum.Listeners.OnGameAnimAction, action, this.dataController.data);
            };
            GameController.prototype.onGameAnimationStateAction = function (action) {
                this.emit(Dev.Enum.Listeners.OnGameAnimStateAction, action);
            };
            GameController.prototype.initEventsDisplay = function () {
                var display = Core.Managers.DisplayManager.instance;
                display.on(Dev.Enum.DisplayListener.OrientationChanged, this.onOrientationChanged.bind(this));
            };
            GameController.prototype.onOrientationChanged = function (value) {
                this.emit(Dev.Enum.DisplayListener.OrientationChanged, value);
            };
            GameController.prototype.onAssetLoadedCompleted = function () {
                this.animationController = new Controller.AnimationController();
                this.dataController = new Controller.DataController();
                this.initEventsDisplay();
                this.initEventData();
                this.initEventAnimation();
            };
            return GameController;
        }(Core.Controller.GameController));
        Controller.GameController = GameController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var MachineController = (function (_super) {
            __extends(MachineController, _super);
            function MachineController(container) {
                var _this = _super.call(this) || this;
                _this._slotMachine = {};
                _this._currentSpinAction = Dev.Enum.SpinAction.StartSpin;
                _this._machineType = Dev.Config.SlotConfig.MachineType;
                _this._container = new Core.Modules.Container(0, 0, container, "SlotMachineContainer");
                _this._game = Controller.GameController.Instance;
                _this.initProperties();
                _this._slotMachine[_this._currentMachineType].updateSlotSymbolIndex(_this._game.dataController.data.symbolMatrix);
                return _this;
            }
            MachineController.prototype.initProperties = function () {
                this.initSlotMachine(this._machineType);
                this._controlBar = new Dev.Modules.ControlBar(this._container);
                this._winLines = new Dev.Modules.Winlines(this._container);
                this._controlBar.updateData(this._game.dataController.data, false);
                this.initEvents();
            };
            MachineController.prototype.initEvents = function () {
                this.initSlotBarEvents();
                this.initSlotMachineEvents();
                this.initWinLinesEvents();
            };
            MachineController.prototype.initSlotMachine = function (type) {
                switch (this._machineType) {
                    case Dev.Enum.MachineType.Reel:
                        this._currentMachineType = Dev.Modules.SliderMachine.toString();
                        this._slotMachine[this._currentMachineType] = new Dev.Modules.SliderMachine(this._container);
                        break;
                }
            };
            MachineController.prototype.initSlotBarEvents = function () {
                var mL = Dev.Enum.Listeners;
                this._controlBar.on(mL.OnSpinBarAction, this.checkSlotBarAction.bind(this));
            };
            MachineController.prototype.initSlotMachineEvents = function () {
                var mL = Dev.Enum.Listeners;
                this._slotMachine[this._currentMachineType].on(mL.OnSpinMachineAction, this.checkSlotAnimState.bind(this));
            };
            MachineController.prototype.initWinLinesEvents = function () {
                var mL = Dev.Enum.Listeners;
                this._winLines.on(mL.OnWinLinesAction, this.checkSlotAnimState.bind(this));
            };
            MachineController.prototype.changeSlotMachineType = function (type) {
                this._machineType = type;
                this._slotMachine[this._currentMachineType].destroy();
                this.initSlotMachine(type);
            };
            MachineController.prototype.onDataAction = function (action, data) {
                switch (action) {
                    case Dev.Enum.DataListener.message:
                        this._currentSpinAction = Dev.Enum.SpinAction.StopSpin;
                        this.checkSlotBarAction();
                        break;
                }
            };
            MachineController.prototype.onGameAnimationAction = function (action) {
                var machine = this._slotMachine[this._currentMachineType];
                var data = this._game.dataController.data;
                var matchOffset = this._slotMachine[this._currentMachineType].slotMachineConfig.duration.winOffset;
                var loopOffset = this._slotMachine[this._currentMachineType].slotMachineConfig.duration.loopOffset;
                switch (action) {
                    case Dev.Enum.GameAnimListener.MatchSymbolWin:
                        machine.playMatchAnimation(data.symbolWins, 0, matchOffset);
                        break;
                    case Dev.Enum.GameAnimListener.LoopMatchSymbolWin:
                        machine.playLoopMatchAnimation(data.symbolWins, 0, loopOffset);
                        break;
                }
            };
            MachineController.prototype.onAnimationAction = function (action) {
                var data = this._game.dataController.data;
                switch (action) {
                    case Dev.Enum.AnimListener.PlayNextAnimation:
                        this.emit(Dev.Enum.Listeners.OnAnimationAction, action, data);
                        break;
                    case Dev.Enum.AnimListener.SortScenarioAnimation:
                        this.emit(Dev.Enum.Listeners.OnAnimationAction, action, data);
                        break;
                }
            };
            MachineController.prototype.checkSlotBarAction = function () {
                var _this = this;
                var machine = this._slotMachine[this._currentMachineType];
                switch (this._currentSpinAction) {
                    case Dev.Enum.SpinAction.StartSpin:
                        machine.playSpinAnimation();
                        this._game.dataController.fakePayCalculate();
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Stop, false);
                        this._currentSpinAction = Dev.Enum.SpinAction.ForceSpin;
                        machine.reelStoppedIndex = 0;
                        var spinningDuration = machine.slotMachineConfig.duration.spinningDuration;
                        Core.Managers.TickerManager.instance.addTimeout("fakeData", spinningDuration, function () {
                            _this.onDataAction(Dev.Enum.DataListener.message, null);
                        }, false);
                        break;
                    case Dev.Enum.SpinAction.ForceSpin:
                        machine.updateSlotSymbolIndex(this._game.dataController.data.symbolMatrix);
                        machine.playForceStopAnimation();
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Stop, false);
                        break;
                    case Dev.Enum.SpinAction.SkipSpin:
                        machine.playSkippedAnimation();
                        this.onAnimationAction(Dev.Enum.AnimListener.PlayNextAnimation);
                        break;
                    case Dev.Enum.SpinAction.QuickSpin:
                        break;
                    case Dev.Enum.SpinAction.StopSpin:
                        machine.updateSlotSymbolIndex(this._game.dataController.data.symbolMatrix);
                        this._currentSpinAction = Dev.Enum.SpinAction.ForceSpin;
                        machine.playStopAnimation();
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Stop, true);
                        break;
                }
            };
            MachineController.prototype.checkSlotAnimState = function (animationAction, value) {
                var _this = this;
                var machine = this._slotMachine[this._currentMachineType];
                var data = this._game.dataController.data;
                switch (animationAction) {
                    case Dev.Enum.SlotAnimState.SpinStarted:
                        machine.playSkippedAnimation();
                        this._currentSpinAction = Dev.Enum.SpinAction.ForceSpin;
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Stop, true);
                        if (data.currentAction) {
                            this._game.dataController.data.balance.cents--;
                            this._game.dataController.data.balance.coins--;
                        }
                        this._controlBar.updateData(this._game.dataController.data, false);
                        break;
                    case Dev.Enum.SlotAnimState.ReelSpinCompleted:
                        this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.ReelSpinCompleted);
                        break;
                    case Dev.Enum.SlotAnimState.SpinCompleted:
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                        this._currentSpinAction = Dev.Enum.SpinAction.StartSpin;
                        break;
                    case Dev.Enum.SlotAnimState.SpinQuicked:
                        break;
                    case Dev.Enum.SlotAnimState.SpinForceStopped:
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, false);
                        this._currentSpinAction = Dev.Enum.SpinAction.StartSpin;
                        this.onAnimationAction(Dev.Enum.AnimListener.SortScenarioAnimation);
                        break;
                    case Dev.Enum.SlotAnimState.SpinStopped:
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                        this._currentSpinAction = Dev.Enum.SpinAction.StartSpin;
                        this.onAnimationAction(Dev.Enum.AnimListener.SortScenarioAnimation);
                        break;
                    case Dev.Enum.SlotAnimState.MatchSymbolWinStarted:
                        this._currentSpinAction = Dev.Enum.SpinAction.SkipSpin;
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Skip, true);
                        break;
                    case Dev.Enum.SlotAnimState.MatchSymbolWinFinished:
                        this._currentSpinAction = Dev.Enum.SpinAction.StartSpin;
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                        Core.Managers.TickerManager.instance.addTimeout("wait", 1, function () {
                            _this.onAnimationAction(Dev.Enum.AnimListener.PlayNextAnimation);
                        }, false);
                        break;
                    case Dev.Enum.SlotAnimState.WinUpdated:
                        this._controlBar.updateWin(value, true);
                        break;
                    case Dev.Enum.SlotAnimState.WinLineStarted:
                        this._winLines.playWinlineAnimation(machine.slotMachineConfig, data.symbolWins, value.index, machine.matrixSymbols, value.loop);
                        break;
                    case Dev.Enum.SlotAnimState.WinLineFinished:
                        this._winLines.playWinLineFadeOutAnimation(machine.winLineInfo);
                        break;
                    case Dev.Enum.SlotAnimState.SpinSkipped:
                        this._currentSpinAction = Dev.Enum.SpinAction.StartSpin;
                        this._winLines.stopWinLineAnimation();
                        break;
                }
            };
            Object.defineProperty(MachineController.prototype, "controlBar", {
                get: function () {
                    return this._controlBar;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MachineController.prototype, "slotMachine", {
                get: function () {
                    return this._slotMachine[this._currentMachineType];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MachineController.prototype, "container", {
                get: function () {
                    return this._container;
                },
                enumerable: true,
                configurable: true
            });
            return MachineController;
        }(PIXI.utils.EventEmitter));
        Controller.MachineController = MachineController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Stages;
    (function (Stages) {
        var GameController = Dev.Controller.GameController;
        var LoaderStage = (function (_super) {
            __extends(LoaderStage, _super);
            function LoaderStage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._loadingBorders = [];
                _this._loadingFills = [];
                return _this;
            }
            LoaderStage.prototype.init = function () {
                this.game = GameController.Instance;
                this._container = new Core.Modules.Container(0, 0, this, "Container");
                this.playLogoAnimation();
            };
            LoaderStage.prototype.playLogoAnimation = function () {
                var dR = Dev.Config.GameConfig.DisplayConfig;
                var aC = Dev.Config.AssetConfig;
                var aI = Dev.Config.AnimConfig.Animation;
                this._bg = new Core.Modules.Graphic(dR.width / 2, dR.height / 2, dR.width * 2, dR.height * 2, aC.LoadingBg, this._container);
                this._logo = new Core.Modules.Sprite(dR.width / 2, 300, aC.Logo, this._container);
                for (var i = 0; i < 3; i++) {
                    this._loadingBorders.push(new Core.Modules.Graphic(dR.width / 2 - 50 + i * 50, dR.height / 2 + 220, 35, 35, aC.LoadingCircleBg, this._container));
                    this._loadingFills.push(new Core.Modules.Graphic(17.5, 17.5, 35, 35, aC.LoadingCircleFill, this._loadingBorders[i]));
                    this._loadingFills[i].alpha = 0;
                }
                TweenMax.fromTo(this._logo.scale, aI.duration.logoScale, { x: 0, y: 0 }, { x: 1, y: 1, ease: aI.ease.logoScale });
                TweenMax.fromTo(this._logo, aI.duration.logoAlpha, { alpha: 0 }, { alpha: 1, ease: aI.ease.logoAlpha });
                this._sequence = new TimelineMax({ repeat: -1, delay: .75 });
                var offset = aI.speed.boxFillsOffset;
                this._sequence.to(this._loadingFills[0], aI.duration.boxFillsAlpha, { alpha: 1, ease: aI.ease.boxFillsAlpha });
                this._sequence.to(this._loadingFills[0], aI.duration.boxFillsAlpha, { alpha: 0, ease: aI.ease.boxFillsAlpha });
                this._sequence.to(this._loadingFills[1], aI.duration.boxFillsAlpha, { alpha: 1, ease: aI.ease.boxFillsAlpha }, "-=" + offset);
                this._sequence.to(this._loadingFills[1], aI.duration.boxFillsAlpha, { alpha: 0, ease: aI.ease.boxFillsAlpha });
                this._sequence.to(this._loadingFills[2], aI.duration.boxFillsAlpha, { alpha: 1, ease: aI.ease.boxFillsAlpha }, "-=" + offset);
                this._sequence.to(this._loadingFills[2], aI.duration.boxFillsAlpha, { alpha: 0, ease: aI.ease.boxFillsAlpha });
            };
            LoaderStage.prototype.initEvents = function () {
            };
            LoaderStage.prototype.setVisualPortrait = function () {
            };
            LoaderStage.prototype.setVisualLandscape = function () {
            };
            LoaderStage.prototype.dispose = function () {
                this._sequence.kill();
            };
            return LoaderStage;
        }(Core.Modules.Stage));
        Stages.LoaderStage = LoaderStage;
    })(Stages = Dev.Stages || (Dev.Stages = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var ResourceManager = Core.Managers.ResourceManager;
        var StageManager = Core.Managers.StageManager;
        var LoaderStage = Dev.Stages.LoaderStage;
        var ResourceController = (function (_super) {
            __extends(ResourceController, _super);
            function ResourceController() {
                return _super.call(this) || this;
            }
            ResourceController.prototype.init = function () {
            };
            ResourceController.prototype.initEvents = function () {
                var listener = Dev.Enum.ResourceListener;
                var resource = ResourceManager.Instance;
                resource.once(listener.AssetLoading, this.assetLoading.bind(this));
                resource.on(listener.AssetLoadCompleted, this.assetsLoadCompleted.bind(this));
                resource.once(listener.AssetPreLoadCompleted, resource.assetLoading.bind(resource));
                resource.assetPreLoading();
            };
            ResourceController.prototype.assetLoading = function () {
                StageManager.Instance.addStage(LoaderStage, true);
            };
            ResourceController.prototype.assetsLoadCompleted = function () {
                var listener = Dev.Enum.ResourceListener;
                var stage = StageManager.Instance;
                Core.Managers.TickerManager.instance.addTimeout("loaded", 1, function () {
                    stage.changeStage(Dev.Stages.MainStage, true);
                    Controller.GameController.Instance.emit(listener.AssetLoadCompleted);
                }, false);
            };
            return ResourceController;
        }(Core.Controller.ResourceController));
        Controller.ResourceController = ResourceController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var BubblePaths = [
            { repeatDelay: 8, duration: 20, path: [{ x: 1207, y: 816 }, { x: 1000, y: 534 }, { x: 1180, y: 124 }, { x: 1049, y: -100 }] },
            { repeatDelay: 10, duration: 15, path: [{ x: 800, y: 816 }, { x: 620, y: 534 }, { x: 890, y: 124 }, { x: 620, y: -100 }] },
            { repeatDelay: 12, duration: 12, path: [{ x: 350, y: 816 }, { x: 480, y: 534 }, { x: 320, y: 124 }, { x: 438, y: -100 }] },
            { repeatDelay: 5, duration: 3, path: [{ x: 1107, y: 816 }, { x: 1250, y: 534 }, { x: 1100, y: 124 }, { x: 1189, y: -300 }] }
        ];
        var Background = (function (_super) {
            __extends(Background, _super);
            function Background(container) {
                var _this = _super.call(this) || this;
                _this._bubbles = [];
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aC = { yP: new PIXI.Point(0, 250), yFactor: -1 };
                _this._container = new Core.Modules.Container(0, 0, container, "BackgroundContainer");
                _this.initProperties();
                return _this;
            }
            Background.prototype.initProperties = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._bg = new Core.Modules.Sprite(r.width / 2, r.height / 2 + 200, aI.NormalSpinBg, this._container);
                var bubble = new Core.Modules.Sprite(1136, 816, aI.Bubbles[0], this._container, null, null);
                this._bubbles.push(bubble);
                bubble = new Core.Modules.Sprite(844, 816, aI.Bubbles[1], this._container, null, null);
                this._bubbles.push(bubble);
                bubble = new Core.Modules.Sprite(994, 816, aI.Bubbles[2], this._container, null, null);
                this._bubbles.push(bubble);
                bubble = new Core.Modules.Sprite(1136, 816, aI.Bubbles[3], this._container, null, null);
                this._bubbles.push(bubble);
                this.playBackgroundPositionAnimation(r.width / 2, r.height / 2);
                this.playIdleBubbles();
            };
            Background.prototype.playBackgroundBuzzAnimation = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aC = Dev.Config.AnimConfig.Animation;
                var duration = aC.duration.bgBuzzFallDown;
                var ease = aC.ease.bgBuzzFallDown;
                var count = aC.count.bgBuzzFallDown;
                var y = r.height / 2 + count;
                TweenMax.to(this._bg, duration, { y: y, ease: ease, yoyo: true, repeat: 1 });
            };
            Background.prototype.playBackgroundPositionAnimation = function (toX, toY) {
                var aC = Dev.Config.AnimConfig.Animation;
                var duration = aC.duration.bgChangePosition;
                var ease = aC.ease.bgChangePosition;
                TweenMax.to(this._bg, duration, { x: toX, y: toY, ease: ease });
            };
            Background.prototype.changeBackground = function (type) {
                switch (type) {
                    case Dev.Enum.DataListener.bonus:
                        this._bg.changeSprite(Dev.Config.AssetConfig.BonusFeeSpinBg.frame);
                        break;
                    case Dev.Enum.DataListener.spin:
                        this._bg.changeSprite(Dev.Config.AssetConfig.NormalSpinBg.frame);
                        break;
                }
            };
            Background.prototype.playIdleBubbles = function () {
                var aC = Dev.Config.AnimConfig.Animation;
                for (var i = 0; i < this._bubbles.length; i++) {
                    gsap.to(this._bubbles[i], {
                        motionPath: {
                            path: BubblePaths[i].path,
                            align: "self"
                        },
                        repeat: -1,
                        duration: BubblePaths[i].duration,
                        delay: 1,
                        repeatDelay: BubblePaths[i].repeatDelay,
                        ease: aC.ease.bgIdleBubble
                    });
                }
            };
            Object.defineProperty(Background.prototype, "container", {
                get: function () {
                    return this._container;
                },
                enumerable: true,
                configurable: true
            });
            return Background;
        }(PIXI.utils.EventEmitter));
        Modules.Background = Background;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var ControlBar = (function (_super) {
            __extends(ControlBar, _super);
            function ControlBar(container) {
                var _this = _super.call(this) || this;
                _this._container = new Core.Modules.Container(0, 0, container, "SlotBarContainer");
                _this.initProperties();
                return _this;
            }
            ControlBar.prototype.initProperties = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                this._refBg = new Core.Modules.Sprite(r.width / 2, r.height / 2, aI.UIRefBg, this._container, r.width, r.height);
                this._win = new Core.Modules.Text(r.width - 160, 668, aI.GenericText, this._container);
                this._winAmount = new Core.Modules.Text(r.width - 160, 700, aI.GenericBoldText, this._container);
                this._total = new Core.Modules.Text(160, 668, aI.GenericText, this._container);
                this._totalAmount = new Core.Modules.Text(160, 700, aI.GenericBoldText, this._container);
                this._balance = new Core.Modules.Text(120, 15, aI.GenericText, this._container);
                this._balanceAmount = new Core.Modules.Text(120, 35, aI.GenericBoldText, this._container);
                this._spinButton = new Core.Modules.Button(r.width / 2, 650, aI.SpinButton, this.onSpinAction.bind(this), this._container, 125, 125);
                this.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                this._win.text = "WIN";
                this._balance.text = "BALANCE";
                this._total.text = "TOTAL WIN";
                this._winAmount.text = "0";
                this._balanceAmount.text = "5000";
                this._totalAmount.text = "0";
            };
            ControlBar.prototype.updateData = function (data, animation) {
                this.updateCredit(data);
                this._winSum = { cents: 0, coins: 0 };
                this._data = data;
                this._winAmount.text = this.resolveFormat(this._winSum.cents, "suffix", false);
                this._totalAmount.text = this.resolveFormat(data.totalEarn.cents, "suffix", false);
                if (animation) {
                    TweenMax.fromTo(this._winAmount.scale, .35, { x: 1, y: 1 }, { x: 1.5, y: 1.5, yoyo: true, yoyoEase: "back.out(2)", repeat: 1 });
                    TweenMax.fromTo(this._totalAmount.scale, .35, { x: 1, y: 1 }, { x: 1.5, y: 1.5, yoyo: true, yoyoEase: "back.out(2)", repeat: 1 });
                }
            };
            ControlBar.prototype.updateWin = function (win, animation) {
                this._winSum.cents += win.cents;
                this._winSum.coins += win.coins;
                this._data.totalEarn.cents += win.cents;
                this._data.totalEarn.coins += win.coins;
                this._totalAmount.text = this.resolveFormat(this._data.totalEarn.cents, "suffix", false);
                this._winAmount.text = this.resolveFormat(this._winSum.cents, "suffix", false);
                if (animation) {
                    TweenMax.fromTo(this._winAmount.scale, .35, { x: 1, y: 1 }, { x: 1.5, y: 1.5, yoyo: true, yoyoEase: "back.out(2)", repeat: 1 });
                    TweenMax.fromTo(this._totalAmount.scale, .35, { x: 1, y: 1 }, { x: 1.5, y: 1.5, yoyo: true, yoyoEase: "back.out(2)", repeat: 1 });
                }
            };
            ControlBar.prototype.updateCredit = function (data) {
                this._balanceAmount.text = this.resolveFormat(data.balance.coins, "suffix", true);
            };
            ControlBar.prototype.resolveFormat = function (amount, currencyPosition, coin) {
                if (coin) {
                    return amount + " COIN";
                }
                var dec = 2;
                var int = 3;
                var d = ".";
                var t = ",";
                var r = ("\\d(?=(\\d{" + (int || 3) + "})+" + (dec > 0 ? "\\D" : "$") + ")");
                var n = amount.toFixed(Math.max(0, ~~dec));
                var b = (d ? n.replace(".", d) : n).replace(new RegExp(r, "g"), "$&" + (t || ","));
                var p = currencyPosition;
                switch (p) {
                    case "suffix":
                        b = (b + " " + this._data.currencySymbol);
                        break;
                    case "prefix":
                        b = (this._data.currencySymbol + " " + b);
                        break;
                }
                return b;
            };
            ControlBar.prototype.onSpinAction = function () {
                var listener = Dev.Enum.Listeners;
                this.emit(listener.OnSpinBarAction);
            };
            ControlBar.prototype.setButtonState = function (buttonState, enabled) {
                this._spinButton.isEnabled = enabled;
                switch (buttonState) {
                    case Dev.Enum.SpinButtonState.Normal:
                        this._spinButton.changeButtonConfig(Dev.Config.AssetConfig.SpinButton);
                        break;
                    case Dev.Enum.SpinButtonState.Auto:
                        break;
                    case Dev.Enum.SpinButtonState.Quick:
                        break;
                    case Dev.Enum.SpinButtonState.Skip:
                        break;
                    case Dev.Enum.SpinButtonState.Stop:
                        this._spinButton.changeButtonConfig(Dev.Config.AssetConfig.StopButton);
                        break;
                }
            };
            Object.defineProperty(ControlBar.prototype, "visible", {
                set: function (value) {
                    this._container.visible = value;
                },
                enumerable: true,
                configurable: true
            });
            return ControlBar;
        }(PIXI.utils.EventEmitter));
        Modules.ControlBar = ControlBar;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var SpinDirection;
        (function (SpinDirection) {
            SpinDirection[SpinDirection["up"] = 0] = "up";
            SpinDirection[SpinDirection["down"] = 1] = "down";
            SpinDirection[SpinDirection["left"] = 2] = "left";
            SpinDirection[SpinDirection["right"] = 3] = "right";
            SpinDirection[SpinDirection["none"] = 4] = "none";
        })(SpinDirection = Modules.SpinDirection || (Modules.SpinDirection = {}));
        var Machine = (function (_super) {
            __extends(Machine, _super);
            function Machine(slotMachineConfig, container) {
                var _this = _super.call(this) || this;
                _this.matrixSymbols = [];
                _this.reelStoppedIndex = 0;
                _this.slotMachineConfig = slotMachineConfig;
                _this.container = new Core.Modules.Container(0, -70, container, "MachineContainer");
                _this.baseReelContainer = new Core.Modules.Container(0, 0, _this.container, "ReelContainer");
                _this.initProperties();
                return _this;
            }
            Machine.prototype.initProperties = function () {
                this.createReelContainers();
                this.init();
            };
            Machine.prototype.createReelContainers = function () {
                this.reelContainers = new Array();
                var column = this.slotMachineConfig.machine.reelMatrix.column;
                var dR = Dev.Config.GameConfig.DisplayConfig;
                var row = this.slotMachineConfig.machine.reelMatrix.row;
                for (var i = 0; i < column; i++) {
                    var sS = this.slotMachineConfig.symbol.scale;
                    var sO = this.slotMachineConfig.symbol.offset;
                    var pX = dR.width / 2 - (Math.floor(column / 2) - i) * (sO.x + sS.x);
                    var pY = dR.height / 2 - (Math.floor(row / 2) * (sS.y + sO.y));
                    if (column % 2 == 0) {
                        pX += sS.x / 2;
                    }
                    if (row % 2 == 0) {
                        pY += sS.y / 2;
                    }
                    this.reelContainerPositionY = pY;
                    var container = new Core.Modules.Container(pX, pY, this.baseReelContainer, "ReelContainer");
                    this.reelContainers.push(container);
                    this.createSlotSymbol(container, i);
                }
                this.matrixSymbols = this.transpose(this.matrixSymbols);
            };
            Machine.prototype.updateSlotSymbolIndex = function (symbolMatrix) {
                for (var i = 0; i < this.matrixSymbols.length; i++) {
                    for (var j = 0; j < this.matrixSymbols[i].length; j++) {
                        this.matrixSymbols[i][j].index = symbolMatrix[i][j];
                    }
                }
            };
            Machine.prototype.transpose = function (matrix) {
                var rows = matrix.length, cols = matrix[0].length;
                var grid = [];
                for (var j = 0; j < cols; j++) {
                    grid[j] = Array(rows);
                }
                for (var i = 0; i < rows; i++) {
                    for (var j = 0; j < cols; j++) {
                        grid[j][i] = matrix[i][j];
                    }
                }
                return grid;
            };
            Machine.prototype.createSlotSymbol = function (container, reelIndex) {
                var symbols = new Array();
                for (var i = -1; i < this.slotMachineConfig.machine.reelMatrix.row; i++) {
                    var random = 0 + Math.floor(Math.random() * Math.floor(this.slotMachineConfig.slotSymbols.length));
                    var symbol = new Modules.Symbol(this.slotMachineConfig, random, this.reelContainers[reelIndex], { r: i, c: reelIndex });
                    if (i >= 0)
                        symbols.push(symbol);
                }
                this.matrixSymbols.push(symbols);
            };
            Machine.prototype.playIdleAnimation = function () {
                var rows = this.matrixSymbols.length, cols = this.matrixSymbols[0].length;
                for (var i = 0; i < rows; i++) {
                    for (var j = 0; j < cols; j++) {
                    }
                }
            };
            Machine.prototype.playFallDownContainer = function (reelSpinMask) {
                var _this = this;
                var sC = this.slotMachineConfig;
                var x = sC.reelMask.fallDownScale.x;
                var y = sC.reelMask.fallDownScale.y;
                reelSpinMask.width = x;
                reelSpinMask.height = y;
                var t1 = this.reelContainers[0].position.y;
                var t2 = this.reelContainers[0].position.y + sC.count.fallDown;
                var _loop_2 = function (i) {
                    var timeline = new TimelineMax({ delay: i * sC.duration.fallDownReelOffset });
                    this_2.reelContainers[i].position.y -= sC.count.fallDownEndPositionY;
                    timeline.to(this_2.reelContainers[i], sC.duration.fallDown, { ease: sC.ease.fallDown, y: t2 });
                    timeline.to(this_2.reelContainers[i], sC.duration.fallUp, {
                        ease: sC.ease.fallUp, y: t1, onComplete: function () {
                            if (i == _this.reelContainers.length - 1) {
                                x = Dev.Config.SlotConfig.SliderMachine.reelMask.normalScale.x;
                                y = Dev.Config.SlotConfig.SliderMachine.reelMask.normalScale.y;
                                reelSpinMask.width = x;
                                reelSpinMask.height = y;
                                _this.playIdleAnimation();
                            }
                        }
                    });
                };
                var this_2 = this;
                for (var i = 0; i < this.reelContainers.length; i++) {
                    _loop_2(i);
                }
            };
            Machine.prototype.destroy = function () {
                this.dispose();
                this.container.destroy({ children: true, baseTexture: true });
            };
            return Machine;
        }(PIXI.utils.EventEmitter));
        Modules.Machine = Machine;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var SliderMachine = (function (_super) {
            __extends(SliderMachine, _super);
            function SliderMachine(container) {
                return _super.call(this, Dev.Config.SlotConfig.SliderMachine, container) || this;
            }
            SliderMachine.prototype.init = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                this.winLineInfo = Dev.Config.SlotConfig.SliderMachine.winLine;
                this.winInfo = Dev.Config.SlotConfig.SliderMachine.win;
                var frameScale = Dev.Config.SlotConfig.SliderMachine.reelMask.frameScale;
                this._frame = new Core.Modules.Graphic(frameScale.pX, frameScale.pY, frameScale.x, frameScale.y, aI.Frame, this.container);
                this.container.addChild(this.reelContainers[0].parent);
                this.initMask();
                this.playFallDownContainer(this._reelSpinMask);
                this.initEvents();
            };
            SliderMachine.prototype.initEvents = function () {
                var l = Dev.Enum.Listeners;
            };
            SliderMachine.prototype.initMask = function () {
                var aI = Dev.Config.AssetConfig;
                var maskScale = Dev.Config.SlotConfig.SliderMachine.reelMask.normalScale;
                this._reelSpinMask = new Core.Modules.Graphic(maskScale.pX, maskScale.pY, maskScale.x, maskScale.y, aI.GeneralReelMask, this.reelContainers[0].parent);
                this.reelContainers[0].parent.mask = this._reelSpinMask;
            };
            SliderMachine.prototype.playMatchAnimation = function (wins, index, offsetDuration) {
                var _this = this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var container = new Core.Modules.Container(r.width / 2 + 50, r.height / 2 - 200, this.container);
                var platformY = this.slotMachineConfig.count.matchIconEndPositionY;
                if (index == 0) {
                    this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.MatchSymbolWinStarted);
                    var emitter = new PIXI.particles.Emitter(container, aI.Bubbles[0].frame, aI.BubbleVertical);
                    emitter.autoUpdate = true;
                    var max = 10 * wins.length;
                    if (max > 100)
                        max = 100;
                    emitter.maxParticles = max;
                    emitter.playOnceAndDestroy(function () {
                        container.destroy();
                    });
                }
                this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.WinLineStarted, { index: index, loop: false });
                var _loop_3 = function (i) {
                    var row = wins[index].winSymbolMatrix[i].row;
                    var column = wins[index].winSymbolMatrix[i].column;
                    var winSymbol = this_3.matrixSymbols[row][column];
                    var from = { x: winSymbol.scale.x, y: winSymbol.scale.y };
                    var to = { x: winSymbol.scale.x + winSymbol.scale.x * .1, y: winSymbol.scale.y + winSymbol.scale.y * .1 };
                    this_3._matchTween = TweenLite.fromTo(winSymbol.scale, .25, { x: from.x, y: from.y }, { x: to.x, y: to.y, yoyo: true, repeat: 1, onComplete: function () {
                            if (i == wins[index].winSymbolMatrix.length - 1) {
                                Core.Managers.TickerManager.instance.addTimeout("Match", offsetDuration, function () {
                                    if (index < wins.length - 1) {
                                        index++;
                                        _this.playMatchAnimation(wins, index, offsetDuration);
                                    }
                                    else {
                                        _this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.MatchSymbolWinFinished);
                                    }
                                }, false);
                                _this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.WinLineFinished);
                            }
                        } });
                };
                var this_3 = this;
                for (var i = 0; i < wins[index].winSymbolMatrix.length; i++) {
                    _loop_3(i);
                }
            };
            SliderMachine.prototype.playLoopMatchAnimation = function (wins, index, offsetDuration) {
                var _this = this;
                this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.WinLineStarted, { index: index, loop: true });
                var _loop_4 = function (i) {
                    var row = wins[index].winSymbolMatrix[i].row;
                    var column = wins[index].winSymbolMatrix[i].column;
                    var winSymbol = this_4.matrixSymbols[row][column];
                    var from = { x: winSymbol.scale.x, y: winSymbol.scale.y };
                    var to = { x: winSymbol.scale.x + winSymbol.scale.x * .1, y: winSymbol.scale.y + winSymbol.scale.y * .1 };
                    this_4._loopTween = TweenLite.fromTo(winSymbol.scale, .25, { x: from.x, y: from.y }, { x: to.x, y: to.y, yoyo: true, repeat: 1, onComplete: function () {
                            if (i == wins[index].winSymbolMatrix.length - 1) {
                                Core.Managers.TickerManager.instance.addTimeout("Loop", offsetDuration, function () {
                                    if (index < wins.length - 1) {
                                        index++;
                                        _this.playLoopMatchAnimation(wins, index, offsetDuration);
                                    }
                                    else {
                                        _this.playLoopMatchAnimation(wins, 0, offsetDuration);
                                    }
                                }, false);
                                _this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.WinLineFinished);
                            }
                        } });
                };
                var this_4 = this;
                for (var i = 0; i < wins[index].winSymbolMatrix.length; i++) {
                    _loop_4(i);
                }
            };
            SliderMachine.prototype.playForceStopAnimation = function () {
                var _this = this;
                var sI = Dev.Config.SlotConfig;
                var sM = sI.SliderMachine;
                this.removeListener(Dev.Enum.SlotAnimState.ReelSpinCompleted);
                this.stopTimeline();
                this.on(Dev.Enum.SlotAnimState.ReelSpinCompleted, function (reelIndex) {
                    if (reelIndex == _this.reelStoppedIndex) {
                        _this._playTimeline[reelIndex].restart();
                        _this._playTimeline[reelIndex].kill();
                        TweenMax.to(_this.reelContainers[reelIndex].children, sM.duration.forceReelStop, {
                            onStart: function () {
                                _this.reelContainers[reelIndex].filters = null;
                                if (reelIndex == _this.reelContainers.length - 1) {
                                    _this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.ReelSpinCompleted);
                                }
                            },
                            ease: sM.ease.forceReelStop,
                            y: "+=" + (sM.count.forceYoyo),
                            yoyo: true,
                            repeat: 1,
                            onComplete: function () {
                                if (reelIndex == _this.reelContainers.length - 1) {
                                    _this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.SpinStopped);
                                    _this.removeListener(Dev.Enum.SlotAnimState.ReelSpinCompleted);
                                }
                            }
                        });
                        _this.reelStoppedIndex++;
                    }
                });
            };
            SliderMachine.prototype.playStopAnimation = function () {
                var _this = this;
                var sI = Dev.Config.SlotConfig;
                var sM = sI.SliderMachine;
                this.stopTimeline();
                var index = this.reelStoppedIndex;
                this.on(Dev.Enum.SlotAnimState.ReelSpinCompleted, function (reelIndex) {
                    if (reelIndex == index) {
                        var reelStopOffsetDuration = sM.duration.reelStopOffset;
                        if (index == 0)
                            reelStopOffsetDuration = 0;
                        _this._stopTimeline.call(function () {
                            _this._playTimeline[reelIndex].restart();
                            _this._playTimeline[reelIndex].kill();
                            var stopTween = TweenMax.to(_this.reelContainers[reelIndex].children, sM.duration.reelStop, {
                                onStart: function () {
                                    _this.reelContainers[reelIndex].filters = null;
                                    _this.reelStoppedIndex++;
                                    _this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.ReelSpinCompleted);
                                },
                                ease: sM.ease.reelStop,
                                y: "+=" + (sM.count.yoyo),
                                yoyo: true,
                                repeat: 1,
                                onComplete: function () {
                                    if (reelIndex == _this.reelContainers.length - 1) {
                                        _this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.SpinStopped);
                                        _this.removeListener(Dev.Enum.SlotAnimState.ReelSpinCompleted);
                                    }
                                }
                            });
                        }, null, "+=" + (reelStopOffsetDuration));
                    }
                    index++;
                });
            };
            SliderMachine.prototype.stopTimeline = function () {
                if (this._stopTimeline)
                    this._stopTimeline.kill();
                this._stopTimeline = new TimelineMax();
            };
            SliderMachine.prototype.playSpinAnimation = function () {
                var _this = this;
                this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.SpinStarted);
                var sC = this.slotMachineConfig;
                var speed = sC.duration.spin;
                var moveY = sC.symbol.scale.y * (sC.machine.reelMatrix.row) + sC.symbol.offset.y * (sC.machine.reelMatrix.row - 1);
                this._playTimeline = [];
                var _loop_5 = function (i) {
                    var timeline = new TimelineMax({ repeat: -1 });
                    var blurFilter = new PIXI.filters.BlurFilter();
                    blurFilter.blurX = 1;
                    blurFilter.blurY = 12;
                    blurFilter.autoFit = true;
                    this_5.reelContainers[i].filters = [blurFilter];
                    timeline.to(this_5.reelContainers[i].children, speed, {
                        ease: sC.ease.spin,
                        y: "+=" + (moveY + sC.symbol.scale.y - 5),
                        modifiers: {
                            y: function (y) {
                                return y / (moveY) < 1 ? y : y % (moveY) - sC.symbol.scale.y;
                            }
                        },
                        onComplete: function () {
                            _this.emit(Dev.Enum.SlotAnimState.ReelSpinCompleted, i);
                        }
                    });
                    this_5._playTimeline.push(timeline);
                };
                var this_5 = this;
                for (var i = 0; i < this.reelContainers.length; i++) {
                    _loop_5(i);
                }
            };
            SliderMachine.prototype.playQuickSpinAnimation = function () {
            };
            SliderMachine.prototype.playSkippedAnimation = function () {
                Core.Managers.TickerManager.instance.removeTicker("Loop");
                Core.Managers.TickerManager.instance.removeTicker("Match");
                if (this._matchTween)
                    this._matchTween.kill();
                if (this._loopTween)
                    this._loopTween.kill();
                this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.SpinSkipped);
            };
            SliderMachine.prototype.dispose = function () {
            };
            return SliderMachine;
        }(Modules.Machine));
        Modules.SliderMachine = SliderMachine;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var Symbol = (function (_super) {
            __extends(Symbol, _super);
            function Symbol(mI, sI, p, rM) {
                var _this = this;
                var offset = mI.symbol.offset;
                var scale = mI.symbol.scale;
                _this = _super.call(this, 0, (scale.y + offset.y) * (rM.r), mI.slotSymbols[sI], p, scale.x, scale.y) || this;
                _this._index = sI;
                _this._container = p;
                _this._machineInfo = mI;
                _this._symbolConfig = mI.slotSymbols[sI];
                _this._reelMatrix = rM;
                _this.initProperties();
                return _this;
            }
            Symbol.prototype.initProperties = function () {
            };
            Object.defineProperty(Symbol.prototype, "symbolConfig", {
                get: function () {
                    return this._symbolConfig;
                },
                set: function (config) {
                    this._symbolConfig = config;
                    var mI = this._machineInfo;
                    this.changeSprite(config.frame);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Symbol.prototype, "index", {
                get: function () {
                    return this._index;
                },
                set: function (index) {
                    this._index = index;
                    this.symbolConfig = this._machineInfo.slotSymbols[index];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Symbol.prototype, "reelMatrix", {
                get: function () {
                    return this._reelMatrix;
                },
                enumerable: true,
                configurable: true
            });
            return Symbol;
        }(Core.Modules.Sprite));
        Modules.Symbol = Symbol;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var WinAnimation = (function (_super) {
            __extends(WinAnimation, _super);
            function WinAnimation(container) {
                var _this = _super.call(this) || this;
                _this._winAmountCount = 0;
                _this._container = new Core.Modules.Container(0, 0, container, "WinContainer");
                _this.initProperties();
                return _this;
            }
            WinAnimation.prototype.initProperties = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._background = new Core.Modules.Sprite(r.width / 2, r.height / 2, aI.WinBg, this._container);
                this._backContainer = new Core.Modules.Container(0, 0, this._container, "backContainer");
                this._frontContainer = new Core.Modules.Container(0, 0, this._container, "frontContainer");
                this._container.alpha = 0;
                this._winHeader = new Core.Modules.Text(r.width / 2, r.height / 2, aI.SmallWinText, this._frontContainer);
                this._uiHeader = new Core.Modules.Text(r.width / 2, r.height / 2 - 100, aI.UIHeaderText, this._frontContainer);
                this._winAmount = new Core.Modules.Text(r.width / 2, r.height / 2 - 100, aI.WinAmountText, this._frontContainer);
            };
            WinAnimation.prototype.playWinAnimation = function (animType, winAnimInfo, amount) {
                this._winTimeline = new TimelineMax();
                switch (animType) {
                    case Dev.Enum.WinType.SmallWin:
                        this.playBigWinAnimation(winAnimInfo, amount, 5);
                        this._winHeader.setTextConfig(Dev.Config.AssetConfig.SmallWinText);
                        break;
                    case Dev.Enum.WinType.BigWin:
                        this.playBigWinAnimation(winAnimInfo, amount, 4);
                        this._winHeader.setTextConfig(Dev.Config.AssetConfig.BigWinText);
                        break;
                }
            };
            WinAnimation.prototype.playBigWinAnimation = function (winAnimInfo, amount, end) {
                var _this = this;
                var winAmountTween = TweenMax.fromTo(this._winAmount.scale, .25, { x: 1, y: 1 }, { x: 1.2, y: 1.2, ease: "back.out(0.5)", yoyo: true, repeat: -1 });
                var r = Dev.Config.GameConfig.DisplayConfig;
                this._winAmount.text = amount.toString();
                this._winAmount.position.set(r.width / 2, r.height / 2 - 100);
                this._winHeader.position.y = -500;
                this._winHeader.alpha = 1;
                this._uiHeader.visible = false;
                this._winAmount.position.set(r.width / 2, r.height / 2 + 50);
                this._winTimeline.to(this._container, winAnimInfo.duration, { alpha: 1, ease: winAnimInfo.ease });
                this._winTimeline.to(this._winHeader, winAnimInfo.duration, { y: 200, ease: winAnimInfo.ease });
                this._winTimeline.to(this._winAmount, winAnimInfo.duration, { alpha: 1, ease: winAnimInfo.ease }, "-=" + winAnimInfo.duration);
                this._winTimeline.to(this._winHeader, winAnimInfo.duration, { y: r.height / 2 + 50, ease: winAnimInfo.ease }, "+=" + winAnimInfo.showTime);
                this._winTimeline.to(this._winHeader, winAnimInfo.duration, { alpha: 0, ease: winAnimInfo.ease }, "-=" + winAnimInfo.duration);
                this._winTimeline.call(function () {
                    _this.emit(Dev.Enum.Listeners.OnAnimationAction, Dev.Enum.AnimListener.PlayNextAnimation);
                    winAmountTween.restart();
                    winAmountTween.kill();
                });
                var counter = { var: this._winAmountCount };
                TweenMax.to(counter, winAnimInfo.duration * 5, {
                    var: this._winAmountCount + amount,
                    onUpdate: function () {
                        _this._winAmount.text = Math.ceil(counter.var).toString();
                    },
                    ease: "power0"
                });
                this._winAmountCount += amount;
            };
            WinAnimation.prototype.showWinAnimation = function (duration, amount) {
                var _this = this;
                this._winAmountCount = 0;
                TweenMax.fromTo(this._winAmount.scale, .25, { x: 1, y: 1 }, { x: 1.2, y: 1.2, ease: "back.out(0.5)", yoyo: true, repeat: 1 });
                var r = Dev.Config.GameConfig.DisplayConfig;
                TweenMax.to(this._container, duration, { alpha: 0, delay: duration, onComplete: function () {
                        _this.emit(Dev.Enum.Listeners.OnAnimationAction, Dev.Enum.AnimListener.PlayNextAnimation);
                    } });
            };
            return WinAnimation;
        }(PIXI.utils.EventEmitter));
        Modules.WinAnimation = WinAnimation;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var Winlines = (function (_super) {
            __extends(Winlines, _super);
            function Winlines(container) {
                var _this = _super.call(this) || this;
                _this._winLines = new Array();
                _this._baseContainer = container;
                _this.initProperties();
                return _this;
            }
            Winlines.prototype.initProperties = function () {
                this._winLineAnimTimeline = new TimelineMax();
            };
            Winlines.prototype.playWinlineAnimation = function (sC, wS, index, mS, loop) {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var lineIndex = wS[index].lineIndex;
                var path = sC.winLine.winLinesPath[lineIndex];
                var duration = sC.winLine.duration;
                var offset = sC.symbol.offset;
                var scale = sC.symbol.scale;
                var line;
                if (this._container) {
                    this._container.destroy({ children: true, baseTexture: false, texture: false });
                }
                this._container = new Core.Modules.Container(0, 0, this._baseContainer, "WinLinesContainer");
                this._winLines = new Array();
                for (var j = 0; j < path.length - 1; j++) {
                    var currentRow = path[j].row;
                    var currentColumn = path[j].column;
                    var nextRow = path[j + 1].row;
                    var nextColumn = path[j + 1].column;
                    var width = mS[currentRow][currentColumn].parent.position.x;
                    var x = mS[currentRow][currentColumn].parent.position.x;
                    var y = (scale.y + offset.y) * (currentRow) + mS[currentRow][currentColumn].parent.position.y / 2 + 120;
                    line = new Core.Modules.Graphic(x, y, path[j].thickness, null, Dev.Config.AssetConfig.SlotWinLine, this._container);
                    width -= mS[nextRow][nextColumn].parent.position.x;
                    width = Math.abs(width);
                    x = mS[nextRow][nextColumn].parent.position.x;
                    y = (scale.y + offset.y) * (nextRow) - ((scale.y + offset.y) * (currentRow));
                    y = currentRow == nextRow ? 0 : y;
                    line.drawLine(new PIXI.Point(x, y), width + path[j].thickness / 3.2);
                    this._winLines.push(line);
                }
                this._amount = new Core.Modules.Text(r.width / 2, r.height / 2 - 70, aI.WinLineText, this._container);
                this._winLineAnimTimeline.fromTo(this._container, duration, { alpha: 0 }, { alpha: 1 });
                this._amount.text = wS[index].currency.cents.toString();
                if (!loop)
                    this.emit(Dev.Enum.Listeners.OnWinLinesAction, Dev.Enum.SlotAnimState.WinUpdated, wS[index].currency);
            };
            Winlines.prototype.playWinLineFadeOutAnimation = function (wI) {
                var duration = wI.duration;
                this._winLineAnimTimeline.fromTo(this._container, duration, { alpha: 1 }, { alpha: 0 });
            };
            Winlines.prototype.stopWinLineAnimation = function () {
                if (this._winLineAnimTimeline) {
                    this._winLineAnimTimeline.restart();
                    this._winLineAnimTimeline.kill();
                    if (this._container) {
                        this._container.destroy({ children: true, baseTexture: false, texture: false });
                        this._container.alpha = 0;
                    }
                    this._winLineAnimTimeline = new TimelineMax();
                }
            };
            return Winlines;
        }(PIXI.utils.EventEmitter));
        Modules.Winlines = Winlines;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Stages;
    (function (Stages) {
        var GameController = Dev.Controller.GameController;
        var DisplayManager = Core.Managers.DisplayManager;
        var MainStage = (function (_super) {
            __extends(MainStage, _super);
            function MainStage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MainStage.prototype.init = function () {
                this.game = GameController.Instance;
                this._background = new Dev.Modules.Background(this);
                this._slotMachineController = new Dev.Controller.MachineController(this);
                this._winAnimation = new Dev.Modules.WinAnimation(this);
                this.onOrientationChanged(DisplayManager.instance.currentOrientation);
            };
            MainStage.prototype.initEvents = function () {
                this.initDisplayEvents();
                this.initGameEvents();
                this.initSlotMachineEvents();
                this.initWinAnimationEvents();
                this.initBackgroundEvents();
            };
            MainStage.prototype.onGameDataAction = function (action, data) {
                switch (action) {
                    case Dev.Enum.DataListener.message:
                        this.game.emit(Dev.Enum.AnimListener.SortScenarioAnimation, data);
                        break;
                }
                this._slotMachineController.onDataAction(action, data);
            };
            MainStage.prototype.onAnimationAction = function (action, data) {
                switch (action) {
                    case Dev.Enum.AnimListener.SortScenarioAnimation:
                        this.game.emit(Dev.Enum.Listeners.OnAnimationAction, Dev.Enum.AnimListener.SortScenarioAnimation, data);
                        break;
                    case Dev.Enum.AnimListener.PlayNextAnimation:
                        this.game.emit(Dev.Enum.Listeners.OnAnimationAction, Dev.Enum.AnimListener.PlayNextAnimation, data);
                        break;
                }
            };
            MainStage.prototype.onGameAnimationAction = function (action, data) {
                console.log(action);
                var wI;
                var r = Dev.Config.GameConfig.DisplayConfig;
                switch (action) {
                    case Dev.Enum.GameAnimListener.SmallWin:
                        wI = this._slotMachineController.slotMachine.winInfo.smallWin;
                        this._winAnimation.playWinAnimation(Dev.Enum.WinType.SmallWin, wI, data.win.currency.cents);
                        break;
                    case Dev.Enum.GameAnimListener.BigWin:
                        wI = this._slotMachineController.slotMachine.winInfo.bigWin;
                        this._winAnimation.playWinAnimation(Dev.Enum.WinType.BigWin, wI, data.win.currency.cents);
                        break;
                    case Dev.Enum.GameAnimListener.MatchSymbolWin:
                        this._slotMachineController.onGameAnimationAction(action);
                        break;
                    case Dev.Enum.GameAnimListener.BonusWinStart:
                        wI = this._slotMachineController.slotMachine.winInfo.bonusWinStart;
                        this._winAnimation.playWinAnimation(Dev.Enum.WinType.BonusWin, wI, data.bonus.bonusCount);
                        break;
                    case Dev.Enum.GameAnimListener.LoopMatchSymbolWin:
                        this._background.changeBackground(Dev.Enum.DataListener.spin);
                        this._slotMachineController.onGameAnimationAction(action);
                        this._slotMachineController.controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                        break;
                    case Dev.Enum.GameAnimListener.ShowWinAmount:
                        this._winAnimation.showWinAnimation(1, 200);
                        break;
                }
            };
            MainStage.prototype.onGameAnimationStateAction = function (action) {
                switch (action) {
                    case Dev.Enum.AnimationStateType.AnimationPlaying:
                        this._slotMachineController.controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, false);
                        break;
                    case Dev.Enum.AnimationStateType.AnimationStopped:
                        this._slotMachineController.controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                        break;
                }
            };
            MainStage.prototype.initSlotMachineEvents = function () {
                this._slotMachineController.on(Dev.Enum.Listeners.OnGameAnimAction, this.onGameAnimationAction.bind(this));
                this._slotMachineController.on(Dev.Enum.Listeners.OnAnimationAction, this.onAnimationAction.bind(this));
                this._slotMachineController.on(Dev.Enum.Listeners.OnSpinMachineAction, this.checkSlotAnimState.bind(this));
            };
            MainStage.prototype.initBackgroundEvents = function () {
            };
            MainStage.prototype.initWinAnimationEvents = function () {
                this._winAnimation.on(Dev.Enum.Listeners.OnWinAnimAction, this.checkSlotAnimState.bind(this));
                this._winAnimation.on(Dev.Enum.Listeners.OnAnimationAction, this.onAnimationAction.bind(this));
            };
            MainStage.prototype.checkSlotAnimState = function (animationAction, value) {
                switch (animationAction) {
                    case Dev.Enum.SlotAnimState.FinishedBonusStartSpinWin:
                        this._background.changeBackground(Dev.Enum.DataListener.bonus);
                        this._slotMachineController.controlBar.emit(Dev.Enum.Listeners.OnSpinBarAction, Dev.Enum.SpinAction.StartSpin);
                        break;
                }
            };
            MainStage.prototype.initGameEvents = function () {
                var _this = this;
                var dataListener = Object.keys(Dev.Enum.DataListener);
                var _loop_6 = function (i) {
                    var dataName = Dev.Enum.DataListener[dataListener[i]];
                    this_6.game.on(dataName, function (data) {
                        _this.onGameDataAction(dataName, data);
                    });
                };
                var this_6 = this;
                for (var i = 0; i < dataListener.length; i++) {
                    _loop_6(i);
                }
                this.game.on(Dev.Enum.Listeners.OnGameAnimAction, this.onGameAnimationAction.bind(this));
                this.game.on(Dev.Enum.Listeners.OnGameAnimStateAction, this.onGameAnimationStateAction.bind(this));
            };
            MainStage.prototype.setVisualPortrait = function () {
            };
            MainStage.prototype.setVisualLandscape = function () {
            };
            MainStage.prototype.dispose = function () {
            };
            return MainStage;
        }(Core.Modules.Stage));
        Stages.MainStage = MainStage;
    })(Stages = Dev.Stages || (Dev.Stages = {}));
})(Dev || (Dev = {}));
