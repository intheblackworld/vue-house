<template>
  <div :class="`indigator flex-ac flex-jb ${viewIndex > 1 ? 'white' : ''}`">
    <img
      class="logo"
      src="@/assets/img/nav-logo.png"
      alt
      v-scroll-to="{ element: `#section1` }"
    />
    <div class="list-indigator active" v-if="!isExtend">
      <div
        :class="`dot`"
        @click="isExtend = true"
      ></div>
    </div>
    <div
      :class="`list-indigator flex ${isExtend ? 'active' : ''}`"
    >
      <div
        :class="`dot ${index == (indigatorIndex - 1) ? 'active' : '' }`"
        v-for="(nav, index) in navList"
        :key="`indigator-${index}`"
        v-scroll-to="{ element: `#${nav.section}`, offset: nav.offset }"
        @click="setIndigator(index)"
      ></div>
      <!-- <div
        :class="`dot ${(info.indigatorLength + 1) === indigatorIndex ? 'active' : '' }`"
        v-scroll-to="{ element: `#contact` }"
        @click="setIndigator(info.indigatorLength + 1)"
      ></div> -->
    </div>
    <!-- <div
      :class="`contact-indigator`"
      v-scroll-to="{ element: `#contact` }"
      @click="setIndigator(navList.length - 1 + 1)"
    >預約賞屋</div> -->
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';
@import '@/assets/style/function.scss';
.indigator {
  width: 100vw;
  font-size: 16px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  padding: size(24) size(88);
  transition: all .3s;

  &.white {
    background-color: #ccc;
  }
  .list-indigator {
    position: relative;
    padding: 8px;
    border-radius: 20px;
    width: 0;
    display: none;
    transition: all .3s;

    .dot {
      margin: 0;
      opacity: 0;
      transition: all 1s;
    }

    &.active {
      display: flex;
      width: auto;
      opacity: 1;

      .dot {
        margin: 0 size(20);
        opacity: 1;
      }
    }
  }

  .dot {
    width: 36px;
    height: 36px;
    margin: 0 size(20);
    background: transparent;
    cursor: pointer;
    border-radius: 999px;
    overflow: hidden;
    transition: all .3s;
    &::before {
      content: '';
      display: block;
      width: 18px;
      height: 18px;
      //@function border: 1px solid #0000;
      border-radius: 999px;
      margin: calc(50% - 0.3em) auto 0 auto;
      transition: all 0.3s;
      background: transparent;
      border: 1px solid #fff;
      // background: #fff;
    }
    &.active {
      &::before {
        background: #fff;
      }
    }
    &:hover::before {
      background: #ccc;
    }
  }

  .contact-indigator {
    background: rgba(0, 0, 0, 0.4);
    margin: 1em auto 1em auto;
    padding: 0.4em;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    line-height: 1.5;
    width: 2em;
    transition: all 0.3s;
    &:hover {
      color: #fff;
      background: rgba(0, 40, 130, 0.4);
    }
  }
}

.logo {
  width: $logo_pc_width;
  height: auto;
  cursor: pointer;
  display: block;
}
@media screen and (max-width: 767px) {
  .indigator {
    display: none;
    right: -3.5vw;
    .contact-indigator {
      display: none;
    }
    .dot {
      width: 2em;
      height: 3em;
      margin: 0 size-m(10);
    }
  }

  .logo {
    width: $logo_phone_width;
    left: 15px;
    top: 15px;
  }
}
</style>

<script>
import info from '@/info'
import navList from '@/info/navList'

export default {
  name: 'Indigator',

  data() {
    return {
      navList,
      info,
      indigatorIndex: 1,
      isExtend: false,
    }
  },

  props: ['viewIndex'],

  watch: {
    viewIndex(val) {
      // console.log(val)
      this.indigatorIndex = val
    },
  },

  methods: {
    setIndigator(index) {
      this.indigatorIndex = index
    },
  },
}
</script>
