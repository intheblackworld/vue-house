<template>
  <div class="dialog-content">
    <font-awesome-icon icon="map-marker-alt" />
    <div class="dialog-desc">接待會館</div>
<<<<<<< HEAD
    <div class="info">{{address}}</div>
    <a class="cta" :href="link" target="_blank" @click="window.dotq = window.dotq || [];
 window.dotq.push(
 {
   'projectId': '10000',
   'properties': {
     'pixelId': '10113125',
     'qstrings': {
       'et': 'custom',
       'ea': 'map10113125'
     }
 } } ); ">開啟導航</a>
=======
    <div class="info" v-html="address"></div>
    <a class="cta" :href="link" target="_blank">開啟導航</a>
>>>>>>> 42a16098d5fd70b8cb1b99de8f42295891e2f82a
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
  },
}
</script>
