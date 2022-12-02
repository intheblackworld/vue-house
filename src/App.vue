<template>
  <div id="app">
    <div ref="gtmNoScript" />
    <AstrictMask />
    <router-view />
  </div>
</template>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Cantata+One&display=swap');
// @import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:700&subset=chinese-traditional');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,700&subset=chinese-traditional');
@import url('https://fonts.googleapis.com/css2?family=Ruthie&display=swap');
// @import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
</style>

<script>
import AstrictMask from '@/components/AstrictMask'
import gtm from '@/mixins/gtm.js'


export default {
  name: 'App',
  mixins: [gtm],
  components: {
    AstrictMask,
  },
}
</script>
