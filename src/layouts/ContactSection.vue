<template>
  <div class="contact" id="contact">
    <Order />
    <HouseInfo />
  </div>
</template>
<style lang="scss">
#contact{height: auto !important;
  .fp-tableCell{height: auto !important;}
}
</style>
<script>
import Order from '@/components/Order.vue'
import HouseInfo from '@/components/HouseInfo.vue'
import Footer from '@/layouts/Footer.vue'

export default {
  name: 'contactSection',
  components: {
    Order,
    HouseInfo,
    Footer,
  },

  methods: {},
}
</script>
