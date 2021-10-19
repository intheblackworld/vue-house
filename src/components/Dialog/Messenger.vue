<template>
  <div class="dialog-content">
    <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
    <div class="dialog-desc">Facebook Messenger</div>
    <div class="info">線上諮詢</div>
    <a class="cta" :href="messenger" target="_blank" @click="trackMess">立即諮詢</a>
  </div>
</template>

<script>
export default {
  name: 'MessengerDialog',
  components: {},
  props: ['messenger'],
  data() {
    return {
      window,
    }
  },

  methods: {
    trackMess() {
      window._lt(
        'send',
        'cv',
        {
          type: 'fbmessage',
        },
        ['2dbeb344-9b9c-48e5-962d-ebcfd192bae4'],
      )
      window.gtag_report_conversion_messenger('https://oh.h35.tw')
    },
  },
}
</script>
