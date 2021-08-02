<template>
  <div>
    <div :class="`indigator ${isLight ? 'light' : ''}`">
      <div class="list-indigator">
        <div :class="`dot ${index == indigatorIndex ? 'active' : ''}`" v-for="index in info.indigatorLength" :key="`indigator-${index}`" v-scroll-to="{ element: `#section${index}` }" @click="setIndigator(index)"></div>
        <!-- <div
        :class="`dot ${(info.indigatorLength + 1) === indigatorIndex ? 'active' : '' }`"
        v-scroll-to="{ element: `#contact` }"
        @click="setIndigator(info.indigatorLength + 1)"
      ></div> -->
      </div>
    </div>
    <div :class="`contact-indigator flex-c`" v-scroll-to="{ element: `#contact` }" @click="setIndigator(navList.length - 1 + 1)" v-if="isPC">
      預約<br />賞屋
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/function.scss';
.indigator {
  font-size: 16px;
  position: fixed;
  left: size(42);
  top: 35%;
  transform: translateY(-50%);
  z-index: 10;
  .list-indigator {
    position: relative;
    padding: 8px;
    border-radius: 20px;
  }

  &.light {
    .dot {
      &::before {
        box-shadow: 0 0 0 1px #fff;
        // background: #fff;
      }
      &.active {
        &::before {
          background: #fff;
        }
      }
      &:hover::before {
        background: #fff;
      }
    }
  }
  .dot {
    width: size(20);
    height: size(20);
    margin: size(30) 0;
    background: transparent;
    cursor: pointer;
    border-radius: 999px;
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 0 1px #003177;
      //@function border: 1px solid #0000;
      border-radius: 999px;
      margin: calc(50% - 0.3em) auto 0 auto;
      transition: all 0.3s;
      background: transparent;
      // background: #fff;
    }
    &.active {
      &::before {
        background: #003177;
      }
    }
    &:hover::before {
      background: #003177;
    }
  }
}
.contact-indigator {
  position: fixed;
  left: size(22);
  bottom: size(150);
  width: size(98);
  height: size(98);
  font-size: size(24);
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: size(2.1);
  color: #003177;
  z-index: 10;
  transition: all 0.3s;
  cursor:pointer;
  border-radius: 50%;
  box-shadow: 0 0.5em .5em -.1em #0006;
  &::before{content:"";position: absolute;width: 100%;height: 100%;z-index: -1;top: 0;left: 0;
  transition: all 20s;transition-timing-function:linear;
  background: url('./button.png') 0 0;
  background-size: cover;}
  &:hover{
    &:before{transform: rotate(700deg);}

  }
}
@media screen and (max-width: 767px) {
  .indigator {
    // display: none;
    width: sizem(30);
    left: 0vw;
    z-index: 25;
    .contact-indigator {
      display: none;
    }
    .dot {
      width: sizem(20);
      height: sizem(20);
      margin: sizem(15) 0;
    }
  }
}
</style>

<script>
import info from '@/info'
import { isPC, isMobile } from '@/utils'

export default {
  name: 'Indigator',

  data() {
    return {
      info,
      indigatorIndex: 1,
      isPC,
      isMobile,
    }
  },

  props: ['viewIndex'],

  watch: {
    viewIndex(val) {
      // console.log(val)
      this.indigatorIndex = val
    },
  },

  computed: {
    isLight() {
      return this.indigatorIndex === 2
    },
  },

  methods: {
    setIndigator(index) {
      this.indigatorIndex = index
    },
  },
}
</script>
