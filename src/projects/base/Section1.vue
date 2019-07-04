<template>
  <div class="section1">
    <!-- 圖片懶家仔 -->
    <img v-lazy="require('@/assets/img/contact-logo.png')" />
    <!-- 背景圖覽家仔 -->
    <div
      class="lazy-bg fullscreen"
      v-lazy:background-image="require('@/assets/img/contact-logo.png')"
    ></div>
    <section
      v-scroll-reveal.reset="$fadeInDown()"
    >
      <img src="@/assets/img/contact-logo.png" />
      <img src="@/assets/img/contact-logo.png" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'section1',
  components: {},

  methods: {
  },
}
</script>
