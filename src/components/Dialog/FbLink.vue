<template>
  <div class="dialog-content">
    <font-awesome-icon icon="map-marker-alt" />
    <div class="dialog-desc">Facebook粉絲專頁</div>
    <div class="info" v-html="address"></div>
    <a class="cta btsearch" :href="link" target="_blank">開啟Facebook</a>
  </div>
</template>

<script>
export default {
  name: 'FbDialog,',
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
>
