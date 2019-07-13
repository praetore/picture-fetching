<template>
  <q-page padding>
    <p>This is an about page</p>
    <ul id="data">
      <li :key="item" v-for="item in numbers">{{ item }}</li>
    </ul>
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout',
  data: () => ({
    numbers: [1,2,3]
  })
}
</script>
