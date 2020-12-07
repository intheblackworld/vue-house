<template>
  <div class="contact" id="contact">
    <Order v-if="!hideOrder" />
    <HouseInfo />
  </div>
</template>
<style lang="scss" scoped>
</style>

<script>
import Order from '@/components/Order2.vue'
import HouseInfo from '@/components/HouseInfo2.vue'
import Footer from '@/layouts/Footer.vue'

export default {
  name: 'contactSection',
  components: {
    Order,
    HouseInfo,
    Footer,
  },
  props: ['hideOrder'],
 methods: {},
}
</script>
