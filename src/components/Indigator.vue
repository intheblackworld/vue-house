<template>
  <div class="indigator">
    <div class="list-indigator">
      <div
        :class="`dot ${index === indigatorIndex ? 'active' : '' }`"
        v-for="index in info.indigatorLength"
        :key="`indigator-${index}`"
        v-scroll-to="{ element: `#section${index}` }"
        @click="setIndigator(index)"
      ></div>
      <div
        :class="`dot ${(info.indigatorLength + 1) === indigatorIndex ? 'active' : '' }`"
        v-scroll-to="{ element: `#contact` }"
        @click="setIndigator(info.indigatorLength + 1)"
      ></div>
    </div>
    <div
      :class="`contact-indigator`"
      v-scroll-to="{ element: `#contact` }"
      @click="setIndigator(info.indigatorLength + 1)"
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

@media screen and (max-width: 767px) {
  .indigator {
    right: 3px;

    .list-indigator {
      padding: 4px 5px;
    }

    .dot {
      width: 14px;
      height: 14px;
      margin: 0 auto;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .contact-indigator {
      width: 24px;
      padding: 10px 4px;display: none;
    }
  }
}
</style>

<script>
import info from '@/info'

export default {
  name: 'Indigator',

  data() {
    return {
      info,
      indigatorIndex: 1,
    }
  },

  watch: {},

  methods: {
    setIndigator(index) {
      this.indigatorIndex = index
    },
  },

  created() {},
}
</script>
