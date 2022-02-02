<template>
  <div class="bg">
    <vue-lazy-component class="section" id="section1" style="">
      <Section1 />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section2" style="">
      <Section2 />
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
  .bg {
  }
}
</style>

<script>
import Section1 from '@/projects/shin-lan/medias/Section1.vue'
import Section2 from '@/projects/shin-lan/medias/Section2.vue'

export default {
  name: 'medias',
  components: {
    Section1,
    Section2,
  },

  data() {
    return {

    }
  },

  computed: {

  },

  mounted() {

  },

  methods: {},

  watch: {

  },
}
</script>
