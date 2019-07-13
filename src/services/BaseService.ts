import { ImageSource } from "../model/ImageSource";
export abstract class BaseService {
    constructor() {
        
    }
    abstract getImages():ImageSource[];
    abstract getName():String;
}