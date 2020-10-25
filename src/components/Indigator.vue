<template>
  <div class="indigator">
    <div class="list-indigator">
      <div :class="`dot`" v-for="index in info.indigatorLength" :key="`indigator-${index}`" v-scroll-to="{ element: `#section${index}` }" @click="setIndigator(index)">
        <span :class="`${indigatorIndex === index ? 'active' : ''}`"></span>
      </div>
      <!-- <div
        :class="`dot ${(info.indigatorLength + 1) === indigatorIndex ? 'active' : '' }`"
        v-scroll-to="{ element: `#contact` }"
        @click="setIndigator(info.indigatorLength + 1)"
      ></div> -->
    </div>
    <div :class="`contact-indigator`" v-scroll-to="{ element: `#contact` }" @click="setIndigator(navList.length - 1 + 1)">預約賞屋</div>
  </div>
</template>

<style lang="scss" scoped>
.indigator {
  font-size: 16px;
  position: fixed;
  right: 0.8em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  .list-indigator {
    position: relative;
    padding: 8px;
    border-radius: 20px;
  }

  .dot {
    padding: 10px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
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
@media screen and (max-width: 767px) {
  .indigator {
    // display: none;
    right: -3.5vw;
    .contact-indigator {
      display: none;
    }
    .dot {
      width: 2em;
      height: 3em;
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
