<template>
  <div class="bg">
    <div class="section" id="section1" style="">
      <Section1 />
    </div>
    <vue-lazy-component class="section" id="section2">
      <component :is="currentView" :key="$route.query.type" />
    </vue-lazy-component>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
// .bg {
//   background-size: cover;
//   background-position: center;
//   width: 100vw;
//   height: 100vh;
// }
@media screen and (max-width: 767px) {
  .bg {}
}
</style>
<script>
import Section1 from '@/projects/shin-lan/renewal/Section1.vue'

// 🔥 只掃一次所有 typeX.vue
const modules = require.context(
  '@/projects/shin-lan/renewal',
  false,
  /^\.\/type\d+\.vue$/
)

const typeMap = modules.keys().reduce((acc, key) => {
  const typeMatch = key.match(/type(\d+)\.vue/)
  const type = typeMatch ? typeMatch[1] : null

  if (type) {
    acc[type] = modules(key).default
  }

  return acc
}, {})

typeMap.list = () => import('@/projects/shin-lan/renewal/list.vue')

export default {
  name: 'renewal',

  components: {
    Section1
  },

  computed: {
    currentView() {
      const type = this.$route.query.type || 'list'
      return typeMap[type] || typeMap.list
    }
  }
}
</script>
