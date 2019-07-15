export abstract class BaseService {
    constructor() {
        
    }
    abstract getImages(query: string):Promise<string[]>;
    abstract getName():string;
}