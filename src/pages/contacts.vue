<template>
  <div class="bg">
    <vue-lazy-component class="section" id="section1" style="">
      <Section1 />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="contact" style="">
      <ContactSection />
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
import Section1 from '@/projects/shin-lan/contacts/Section1.vue'
import ContactSection from '@/layouts/ContactSection2.vue'

export default {
  name: 'company',
  components: {
    Section1,
    ContactSection,
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
