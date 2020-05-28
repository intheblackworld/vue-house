<template>
  <div class="dialog-content">
    <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
    <div class="dialog-desc">Facebook Messenger</div>
    <div class="info">線上諮詢</div>
    <a
      class="cta"
      :href="messenger"
      target="_blank"
      @click="gtag"
    >立即諮詢</a>
  </div>
</template>

<script>
export default {
  name: 'MessengerDialog',
  components: {},
  props: ['messenger'],

  methods: {
    gtag() {
      function gtag() {
        window.dataLayer.push(arguments)
      }
      gtag('event', 'conversion', {
        send_to: 'AW-741945426/Xa9FCIi1ttEBENLg5OEC',
        // event_callback: callback,
      })
    },
  },
}
</script>
