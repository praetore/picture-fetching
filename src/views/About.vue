<template>
  <q-page padding>
    <p>This is an about page</p>
    <ul id="data">
      <li :key="item" v-for="item in images"><img src="{{ item }}" /></li>
    </ul>
  </q-page>
</template>

<script>
import { TumblrService } from "../services/TumblrService";
export default {
  name: 'PageAbout',
  data: () => ({
    numbers: [1,2,3],
    images: (new TumblrService).getImages()
  })
}
</script>
