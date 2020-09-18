<template>
  <div class="indigator">
    <div class="list-indigator active" v-if="!isExtend">
      <div :class="`dot`" @click="isExtend = true"></div>
    </div>
    <div :class="`list-indigator ${isMobile ? 'flex' : ''} ${isExtend ? 'active' : ''}`">
      <img src="@/projects/jh/s4/close.png" alt="" v-if="isMobile" class="close" @click="isExtend = false">
      <div :class="`dot ${index === viewIndex ? 'active' : '' }`" v-for="(nav, index) in navList" :key="`indigator-${index + 1}`" v-scroll-to="{ element: `#${nav.section}` }" @click="isExtend = true"><span>{{nav.name}}</span></div>
      <!-- <div
        :class="`dot ${(navList.length - 1 + 1) === viewIndex + 1 ? 'active' : '' }`"
        v-scroll-to="{ element: `#contact` }"
        @click="setIndigator(navList.length - 1 + 1)"
      ></div> -->
    </div>
    <!-- <div :class="`contact-indigator`" v-scroll-to="{ element: `#contact` }">預約賞屋</div> -->
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.indigator {
  font-size: 18px;
  position: fixed;
  right: 0em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  .list-indigator {
    position: relative;
    padding: 8px;
    margin-right: 1em;
    border-radius: 20px;
  }

  .dot {
    width: 2em;
    height: 3em;
    line-height: 2;
    margin: 0;
    background: transparent;
    cursor: pointer;
    position: relative;
    border-radius: 999px; //overflow: hidden;
    &::before {
      content: '';
      display: block;
      width: 0.8em;
      height: 0.8em;
      border: 1px solid #ccc;
      border-radius: 999px;
      margin: 0 auto 0 auto;
      transition: all 0.3s;
      background: #ccc0;
      top: calc(50% - 0.4em);
      position: absolute;
      left: calc(50% - 0.4em);
    }
    &.active {
      &::before {
        background: #ccc;
      }
    }
    &:hover::before {
      background: #069c;
    }
    span {
      color: #fff;
      font-family: 'Noto Serif TC', serif;
      letter-spacing: 0.1em;
      display: block;
      width: 7em;
      position: absolute;
      right: 0;
      top: calc(50% - 1em);
      background: rgba(0, 0, 0, 0.3);
      border-radius: 1em;
      overflow: hidden;
      transition: all 0.3s;
      opacity: 0;
    }
    &:hover {
      span {
        right: 2em;
        opacity: 1;
        animation: dot_span_an 0.2s 1s forwards;
      }
    }
    //&:first-child{display:none;}
  }

  @keyframes dot_span_an {
    to {
      right: 0;
      opacity: 0;
    }
  }

  .contact-indigator {
    position: absolute;
    background: url('../projects/cjl1/all/icon.png');
    background-size: contain;
    margin: 1em auto 1em auto;
    padding: 0.6em 1em 0 1.3em;
    color: #666;
    top: auto;
    right: 0;
    top: calc(50% + 50vh - 5em);
    border-radius: 0;
    cursor: pointer;
    line-height: 1.4;
    font-size: 1.3em;
    width: 5em;
    height: 5em;
    transition: all 0.3s;
    font-family: 'Noto Serif TC', serif;
    letter-spacing: 0.1em;
    font-weight: 700;

    &:hover {
      color: #000;
    }
  }
}
@media screen and (max-width: 767px) {
  .indigator {
    top: 0px;
    transform: none;
    right: -0.5em;
    .list-indigator {
      margin-right: 0;
      padding-left: 0;
      padding-right: 0;
    }
    .contact-indigator {
      display: none;
    }

    .dot {
      width: 1em;
      height: 2em;
      position: relative;
      z-index: 2;
    }

    .dot {
      &::before {
        border: 1px solid #fff;
        background: transparent;
      }
      &.active {
        &::before {
          background: #fff;
        }
      }
      &:hover::before {
        background: #fff;
      }
      span {
        color: #fff;
      }
      &:hover {
        span {
          right: 2em;
          opacity: 1;
          animation: dot_span_an 0.2s 1s forwards;
        }
      }
      //&:first-child{display:none;}
    }
  }
  .indigator {
    padding: sizem(20) sizem(20) sizem(50);
    right: 0;

    .list-indigator {
      flex-wrap: wrap;
      position: absolute;
      top: sizem(10);
      right: sizem(0); //background: #0003;
      width: 0;
      display: none;

      &.active {
        display: flex;
        width: auto;
        opacity: 1;
        width: sizem(50);
        .dot {
          opacity: 1;
        }
      }
    }

    .close {
      width: 1.5em;
      height: 1.5em;
      margin: 10px sizem(10) 30px;
    }
    .dot {
      width: 2.5em;
      height: 3em;
      margin: 0 sizem(10);
      opacity: 0;
      transition: all 1s;
    }
  }
}
</style>

<script>
import navList from '@/info/navList'
import { isMobile } from '@/utils'

export default {
  name: 'Indigator',
  props: ['action', 'viewIndex'],
  data() {
    return {
      isMobile,
      navList,
      isExtend: !isMobile,
    }
  },

  watch: {},

  methods: {
    setIndigator(index) {
      // if (this.isMobile) {
      //   return
      // }
      this.action.moveTo(index)
    },
  },

  created() {},
}
</script>
