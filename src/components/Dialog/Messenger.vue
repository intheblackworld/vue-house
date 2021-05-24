<template>
  <div class="dialog-content">
    <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
    <div class="dialog-desc">Facebook Messenger</div>
    <div class="info">線上諮詢</div>
    <a class="cta" :href="messenger" target="_blank" @click="window.gtag_report_conversion_chat(messenger)">立即諮詢</a>
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
  },
}
</script>
