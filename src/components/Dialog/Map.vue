<template>
  <div class="dialog-content">
    <font-awesome-icon icon="map-marker-alt" />
    <div class="dialog-desc">地址</div>
    <div class="info" v-html="address"></div>
    <a class="cta btsearch" @click="goMap()" target="_blank">開啟導航</a>
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
    goMap() {
      window.open(this.link)
      gtag('event', 'conversion', {'send_to': 'AW-11022043769/FxRICLHT2Y0YEPmU3Icp'});
    }
  },
}
</script>
