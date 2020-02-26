<template>
  <div class="indigator">
    <div class="list-indigator">
      <div
        :class="`dot ${index === indigatorIndex + 1 ? 'active' : '' }`"
        v-for="index in navList.length - 1"
        :key="`indigator-${index}`"
        @click="setIndigator(index)"
      ></div>
      <div
        :class="`dot ${(navList.length - 1 + 1) === indigatorIndex + 1 ? 'active' : '' }`"
        v-scroll-to="{ element: `#contact` }"
        @click="setIndigator(navList.length - 1 + 1)"
      ></div>
    </div>
    <div
      :class="`contact-indigator`"
      v-scroll-to="{ element: `#contact` }"
      @click="setIndigator(navList.length - 1 + 1)"
    >預約賞屋</div>
  </div>
</template>

<style lang="scss" scoped>
.indigator {
  position: fixed;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  z-index: 10;
  .list-indigator {
    position: relative;
    padding: 8px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
  }

  .dot {
    width: 16px;
    height: 16px;
    margin-top: 15px;
    margin-bottom: 15px;
    background: transparent;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 999px;
    &.active {
      background: #fff;
    }
  }

  .contact-indigator {
    background: rgba(0, 0, 0, 0.4);
    margin: 10px auto;
    padding: 8px;
    color: #ffd200;
    border-radius: 20px;
    cursor: pointer;
    line-height: 1.5;
    width: 32px;
  }
}
</style>

<script>
import navList from '@/info/navList'

export default {
  name: 'Indigator',
  props: ['action', 'indigatorIndex'],
  data() {
    return {
      navList,
    }
  },

  watch: {},

  methods: {
    setIndigator(index) {
      this.action.moveTo(index)
    },
  },

  created() {},
}
</script>
