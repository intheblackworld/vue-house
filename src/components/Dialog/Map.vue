<template>
  <div class="dialog-content">
    <font-awesome-icon icon="map-marker-alt" />
    <div class="dialog-desc">接待會館</div>
    <div class="info" v-html="address"></div>
    <a class="cta bt_search" :href="link" target="_blank" @click="window.gtag('event','click',{
'event_category':'link',
'event_label':'location'
});">開啟導航</a>
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
