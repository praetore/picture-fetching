import {BaseService} from "./BaseService";
import * as tumblr from 'tumblr.js';

export default class TumblrService extends BaseService {
    async getImages(query: string): Promise<string[]> {
        const client = tumblr.createClient({
            consumer_key: 'MG7aNeJvfIoJQB8kzy57JFlHTxn11qCItFWvaT0C2QkL5mlUWW',
            returnPromises: true
        });
        // @ts-ignore
        return client.taggedPosts(query)
            .then((response: any) =>
                response.flatMap((item: any) =>
                    item.photos.map((photo: any) =>
                        photo.original_size.url)))
    }

    getName(): string {
        return "Tumblr";
    }
}