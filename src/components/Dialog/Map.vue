<template>
  <div class="dialog-content">
    <font-awesome-icon icon="map-marker-alt" />
    <div class="dialog-desc">接待會館</div>
    <div class="info" v-html="address"></div>
    <a class="cta" @click="trackMap" :href="link" target="_blank">開啟導航</a>
  </div>
</template>

<script>
export default {
  name: 'MessengerDialog',
  components: {},
  props: ['link', 'address'],
  data() {
    return {
      window,
    }
  },

  methods: {
    trackMap() {
      window._lt(
        'send',
        'cv',
        {
          type: 'googlemap',
        },
        ['2dbeb344-9b9c-48e5-962d-ebcfd192bae4'],
      )

      window.gtag_report_conversion_map()
    },
  },
}
</script>
