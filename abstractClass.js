var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TakePhoto = /** @class */ (function () {
    function TakePhoto(camera, time) {
        this.camera = camera;
        this.time = time;
    }
    TakePhoto.prototype.confirmPhoto = function () {
        console.log("12");
        return 12;
    };
    return TakePhoto;
}());
// const user = new TakePhoto("Rear", 10);
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(camera, time, post) {
        var _this = _super.call(this, camera, time) || this;
        _this.camera = camera;
        _this.time = time;
        _this.post = post;
        return _this;
    }
    Instagram.prototype.openCamera = function () {
        console.log("In open camera");
    };
    return Instagram;
}(TakePhoto));
var user = new Instagram("Rear", 10, "Vlog");
user.openCamera();
user.confirmPhoto();
