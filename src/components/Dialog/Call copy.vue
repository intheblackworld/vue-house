<template>
  <div class="dialog-content">
    <font-awesome-icon icon="phone" />
    <div class="dialog-desc">賞屋專線</div>
    <div class="info">{{phone}}</div>
    <div class="cta" @click="redirectToPhoneThanks" v-if="isMobile">撥打電話</div>
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
      e.preventDefault()
      window.location.href = `tel:${this.phone.replace('-', '')}`
      window._lt(
        'send',
        'cv',
        {
          type: 'phonecall',
        },
        ['2dbeb344-9b9c-48e5-962d-ebcfd192bae4'],
      )
      window.gtag_report_conversion_call('https://oh.h35.tw')
      setTimeout(() => {
        window.location.href = 'phoneThanks'
      }, 1000)
    },
  },
}
</script>
<!-- Event snippet for 撥打電話 conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
 -->
<script>
function gtag_report_conversion_call(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-373671502/Nv24CPueyZwCEM6Ml7IB',
      'event_callback': callback
  });
  return false;
}
</script>
