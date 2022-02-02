<template>
  <div class="bg">
    <div class="section" id="section1" style="">
      <Section1 />
    </div>
    <vue-lazy-component class="section" id="section2" style="">
      <Section2 />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section3" style="">
      <Section3 />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section4" style="">
      <Section4 />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section5" style="">
      <Section5 />
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
import Section1 from '@/projects/shin-lan/about_us/Section1.vue'
import Section2 from '@/projects/shin-lan/about_us/Section2.vue'
import Section3 from '@/projects/shin-lan/about_us/Section3.vue'
import Section4 from '@/projects/shin-lan/about_us/Section4.vue'
import Section5 from '@/projects/shin-lan/about_us/Section5.vue'
export default {
  name: 'about_us',
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
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
