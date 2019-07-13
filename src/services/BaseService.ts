import { ImageSource } from "../model/ImageSource";
export abstract class BaseService<T extends ImageSource> {
    constructor() {
        
    }
    abstract getImages():T[];
    abstract getName():string;
}