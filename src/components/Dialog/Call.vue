<template>
  <div class="dialog-content">
    <font-awesome-icon icon="phone" />
    <div class="dialog-desc">賞屋專線</div>
    <div class="info">{{phone}}</div>
    <div class="cta bt_contact" @click="redirectToPhoneThanks" v-if="isMobile">撥打電話</div>
  </div>
</template>
<style lang="scss" scoped>
// .cta{display: none;}
// /* 手機尺寸 */
// @media only screen and (max-width: 767px) {
// .cta{display: block;}
// }
</style>
<script>
import { isMobile } from '@/utils'
export default {
  name: 'CallDialog',
  components: {},
  props: ['phone'],
  data() {
    return {
      window,
      isMobile,
    }
  },

  methods: {
    redirectToPhoneThanks(e) {
      window.gtag('event', 'click', {
        event_category: 'link',
        event_label: 'phone number',
      })
      e.preventDefault()
      window.location.href = `tel:${this.phone.replace('-', '')}`
      setTimeout(() => {
        window.location.href = 'phoneThanks'
      }, 1000)
    },
  },
}
</script>
