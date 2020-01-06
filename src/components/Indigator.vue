<template>
  <div class="indigator">
    <div class="list-indigator">
      <div
        :class="`dot ${index == indigatorIndex ? 'active' : '' }`"
        v-for="index in info.indigatorLength"
        :key="`indigator-${index}`"
        v-scroll-to="{ element: `#section${index}` }"
        @click="setIndigator(index)"
      ></div>
      <!-- <div
        :class="`dot ${(info.indigatorLength + 1) === indigatorIndex ? 'active' : '' }`"
        v-scroll-to="{ element: `#contact` }"
        @click="setIndigator(info.indigatorLength + 1)"
      ></div> -->
    </div>
    <div
      :class="`contact-indigator`"
      v-scroll-to="{ element: `#section8` }"
      @click="setIndigator(info.indigatorLength)"
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
    font-size:16px;
    width: 1em;
    height: 1em;
    margin-top: 0.9em;
    margin-bottom: 0.9em;
    background: transparent;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 999px;
    &.active {
      background: #fff;
    }
    &:hover {
    border: 2px solid #fff;
    }
  }

  .contact-indigator {
    background: rgb(239,204,125);
background: -moz-linear-gradient(-45deg,  rgba(239,204,125,1) 0%, rgba(255,255,255,1) 50%, rgba(239,204,125,1) 100%);
background: -webkit-linear-gradient(-45deg,  rgba(239,204,125,1) 0%,rgba(255,255,255,1) 50%,rgba(239,204,125,1) 100%);
background: linear-gradient(135deg,  rgba(239,204,125,1) 0%,rgba(255,255,255,1) 50%,rgba(239,204,125,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#efcc7d', endColorstr='#efcc7d',GradientType=1 );
    margin: 10px auto;
    padding: 8px;
    color: #640;
    border-radius: 20px;
    cursor: pointer;
    line-height: 1.5;
    width: 32px;
    transition: all 0.3s;
    &:hover{     
    color: #000;
    }
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

  props: ['viewIndex'],

  watch: {
    viewIndex(val) {
      console.log(val)
      this.indigatorIndex = val
    }
  },

  methods: {
    setIndigator(index) {
      this.indigatorIndex = index
    },
  },
}
</script>
