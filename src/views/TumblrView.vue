<template>
    <q-page>
        <ul id="data">
            <li :key="item" v-for="item in images"><img alt="" :src="item"/></li>
        </ul>
    </q-page>
</template>

<style scoped>

</style>

<script lang="ts">
    import Component from "vue-class-component";
    import Vue from "vue";
    import {Source} from "@/constant/Source";

    @Component
    export default class TumblrView extends Vue {
        created() {
            this.$store.commit('updateImages', {source: Source.TUMBLR, query: "lol"})
        }

        get images(): string[] {
            return this.$store.state.images[Source.TUMBLR]
        }
    }
</script>
