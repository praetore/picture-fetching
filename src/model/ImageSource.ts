export class ImageSource {
    
    private _src:string;
    get src() {
        return this._src;
    }
    set src(src:string) {
        this._src = src;
    }
    constructor(imgSrc:string) {
        this._src = imgSrc;
    }
}
