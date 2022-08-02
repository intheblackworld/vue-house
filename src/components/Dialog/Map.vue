<template>
  <div class="dialog-content">
    <font-awesome-icon icon="map-marker-alt" />
    <div class="dialog-desc">接待中心</div>
    <div class="info" v-html="address"></div>
    <a class="cta btsearch" :href="link" target="_blank">開啟導航</a>
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

  methods: {},
}
</script>
