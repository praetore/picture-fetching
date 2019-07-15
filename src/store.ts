import Vue from 'vue'
import Vuex from 'vuex'
import TumblrService from '@/services/TumblrService';
import {Source} from '@/constant/Source';

Vue.use(Vuex);

interface State {
    images: { [key: string]: string[]; };
}

export default new Vuex.Store<State>({
    state: {
        images: {
            [Source.TUMBLR]: [],
            [Source.IMGUR]: [],
        }
    },
    mutations: {
        async updateImages(state: State, payload: { source: Source, query: string }) {
            const tumblrService = new TumblrService();

            switch (payload.source) {
                case Source.TUMBLR:
                    state.images[payload.source] = await tumblrService.getImages(payload.query);
                    break;
                case Source.IMGUR:
                default:
                    break
            }
        }
    },
    actions: {}
})
