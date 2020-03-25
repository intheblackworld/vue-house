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
    font-size:16px;
  position: fixed;
  right:0.8em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  .list-indigator {
    position: relative;
    padding: 8px;
    border-radius: 20px;
  }

  .dot {
    width:2em;
    height:2em;
    margin:0;
    background: transparent;
    cursor: pointer;
    border-radius: 999px;overflow: hidden;
    &::before{
      content:"";
      display: block;
    width:0.7em;
    height:0.7em;
    border: 1px solid #fff;
    border-radius: 999px;margin: calc(50% - 0.3em) auto 0 auto;
    transition: all 0.3s;
      background: rgba(0, 0, 0, 0.2);
    }
    &.active {
    &::before{
      background: #fff;}
    }
    &:hover::before{
      background: #ffd200;
    }
  }

  .contact-indigator {
    background: rgba(0, 0, 0, 0.4);
    margin: 1em auto 1em auto;
    padding: 0.4em;
    color: #ffd200;
    border-radius: 20px;
    cursor: pointer;
    line-height: 1.5;
    width:2em;transition: all 0.3s;
    &:hover{
      color: #FFF;
    }
  }
}
@media screen and (max-width: 767px){
  
.indigator {
  right: 0;
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
