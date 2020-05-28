<template>
  <div class="dialog-content">
    <font-awesome-icon icon="map-marker-alt" />
    <div class="dialog-desc">接待會館</div>
    <div class="info">{{address}}</div>
    <a
      class="cta"
      :href="link"
      target="_blank"
      @click="gtag"
    >開啟導航</a>
  </div>
</template>

<script>
export default {
  name: 'MessengerDialog',
  components: {},
  props: ['link', 'address'],

  methods: {
    gtag() {
      function gtag() {
        window.dataLayer.push(arguments)
      }
      gtag('event', 'conversion', {
        send_to: 'AW-741945426/YJ8FCK6ottEBENLg5OEC',
        // event_callback: callback,
      })
    },
  },
}
</script>
