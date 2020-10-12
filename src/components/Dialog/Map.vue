<template>
  <div class="dialog-content">
    <font-awesome-icon icon="map-marker-alt" />
    <div class="dialog-desc">接待會館</div>
<<<<<<< HEAD
    <div
      class="info"
      v-html="address"
    ></div>
    <a
      class="cta"
      :href="link"
      target="_blank"
      @click="window.dotq = window.dotq || [];
window.dotq.push(

 {

   'projectId': '10000',

   'properties': {

     'pixelId': '10101258',

     'qstrings': {

       'et': 'custom',

       'ea': 'map10101258'

     }

 } } );
"
    >開啟導航</a>
=======
    <div class="info" v-html="address"></div>
    <a class="cta" :href="link" target="_blank">開啟導航</a>
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82
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
