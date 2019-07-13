import { BaseService } from "./BaseService";
import { ImageSource } from "../model/ImageSource";
import { TumblrClient } from "tumblr.js";

export class TumblrService extends BaseService<ImageSource> {
    getImages(): ImageSource[] {
        let tumblr = require('tumblr.js');
        // let client = tumblr.createClient({
        //   consumer_key: 'MG7aNeJvfIoJQB8kzy57JFlHTxn11qCItFWvaT0C2QkL5mlUWW',
        //   consumer_secret: '6fOqrY3Jx9EhWCHdVHvfjiMitZvLqrQsHtlpJxrXv1RVyKQyoS',
        //   token: 'CRjdCnko7lnXVHcgVXMT2YBk6NsdJwjKkY31KfCx6tSJdZfpit',
        //   token_secret: 'eFqtSRhYWpm7Mg6BHa9P4Is1OlPudxRJ1HJvSXzFg0W6SLRbjT'
        // });
        let client = tumblr.createClient({ consumer_key: 'MG7aNeJvfIoJQB8kzy57JFlHTxn11qCItFWvaT0C2QkL5mlUWW' });
        let tag = "lol"
        let images:ImageSource[] = [];
        client.taggedPosts(tag,function (err:any, response:any) {
            let images: ImageSource[] = [];
            if(err != null)
                throw err;
            response.forEach((item: { photos: { original_size: { url: string; } }[] }) => {
                images = [...images,new ImageSource(item.photos[0].original_size.url)];
            });
        });
        return images;
    }
    getName(): string{
        return "Tumblr";
    }
}