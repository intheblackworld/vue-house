<template>
  <div class="indigator">
    <div class="list-indigator">
      <div
        :class="`dot ${index === indigatorIndex + 1 ? 'active' : '' }`"
        v-for="(nav, index) in navList"
        :key="`indigator-${index + 1}`"
        v-scroll-to="{ element: isMobile ? `#${nav.section}` : '' }"
        @click="setIndigator(index + 1)"
      ><span>{{nav.name}}</span></div>
      <!-- <div
        :class="`dot ${(navList.length - 1 + 1) === indigatorIndex + 1 ? 'active' : '' }`"
        v-scroll-to="{ element: `#contact` }"
        @click="setIndigator(navList.length - 1 + 1)"
      ></div> -->
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
    font-size:18px;
  position: fixed;
  right:0em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  .list-indigator {
    position: relative;
    padding: 8px;
  margin-right:1em;
    border-radius: 20px;
  }

  .dot {
    width:2em;
    height:3em;
    line-height: 2;
    margin:0;
    background: transparent;
    cursor: pointer;position: relative;
    border-radius: 999px;//overflow: hidden;
    &::before{
      content:"";
      display: block;
    width:0.8em;
    height:0.8em;
    //border: 1px solid #fff;
    border-radius: 999px;margin: 0 auto 0 auto;
    transition: all 0.3s;
      background: #ba926299;
      top:calc(50% - 0.4em);position:absolute;
      left:calc(50% - 0.4em);
    }
    &.active {
    &::before{
      background: #ba9262FF;}
    }
    &:hover::before{
      background: #ba9262FF;
    }
    span{color:#FFF;font-family: "Noto Serif TC", serif;letter-spacing: 0.1em;
    display: block;
    width: 7em;position:absolute;right: 0;top:calc(50% - 1em);
      background: rgba(0, 0, 0, 0.3);
      border-radius: 1em;
      overflow: hidden;transition: all 0.3s;opacity: 0;
      }
    &:hover{
       span{right: 2em;opacity: 1;}
    }
  }

  .contact-indigator {
    position: absolute;;
    background:url('../projects/tv/s1/icon.png');
    background-size: contain;
    margin: 1em auto 1em auto;
    padding: 0.6em 1em 0 1.3em;
    color: #666;top: auto;
    right: 0;
    top:calc(50% + 50vh - 5em);
    border-radius:0;
    cursor: pointer;
    line-height: 1.4;
  font-size: 1.3em;
    width:5em;
    height: 5em;
    transition: all 0.3s;font-family: "Noto Serif TC", serif;letter-spacing: 0.1em;font-weight: 700;

    &:hover{
      color: #000;
    }
  }
}
@media screen and (max-width: 767px){
  
.indigator {
  right: -0.5em;
  .list-indigator {
  margin-right:0;
  }
  .contact-indigator {
    display: none;
   
  }
}

.dot {
  position: relative;
  z-index: 2;
}
}
</style>

<script>
import navList from '@/info/navList'
import { isMobile } from '@/utils'

export default {
  name: 'Indigator',
  props: ['action', 'indigatorIndex'],
  data() {
    return {
      isMobile,
      navList,
    }
  },

  watch: {},

  methods: {
    setIndigator(index) {
      if (this.isMobile) {
        return
      }
      this.action.moveTo(index)
    },
  },

  created() {},
}
</script>
