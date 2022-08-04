<template>
  <div class="dialog-content">
    <font-awesome-icon icon="phone" />
    <div class="dialog-desc">賞屋專線</div>
    <div class="info">{{phone}}</div>
    <div class="cta btcontact" @click="redirectToPhoneThanks" v-if="isMobile">撥打電話</div>
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
      isMobile
    }
  },

  methods: {
    redirectToPhoneThanks(e) {
      window.dotq = window.dotq || []

      window.dotq.push({
        projectId: '10000',

        properties: {
          pixelId: '10101258',

          qstrings: {
            et: 'custom',

            ea: 'call10101258',
          },
        },
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
