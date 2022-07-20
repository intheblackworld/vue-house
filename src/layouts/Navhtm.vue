<template>

<div id="bh-theme">
<div class="bh-float-menu" style="top: calc(50vh - min(228px, 40vh));">
  <div class="bh-items">
    <div class="bh-item">
      <a aria-current="page" href="https://contest.bhuntr.com/#news" class="router-link-active router-link-exact-active">最新公告</a>
    </div>
    <div class="bh-item is-active">
      <a aria-current="page" href="https://contest.bhuntr.com/#timeline" class="router-link-active router-link-exact-active">活動時程</a>
    </div>
    <div class="bh-item"><a aria-current="page" href="https://contest.bhuntr.com/#limit" class="router-link-active router-link-exact-active">參賽資格</a>
    </div>
    <div class="bh-item is-active">
      <a aria-current="page" href="https://contest.bhuntr.com/#winner" class="router-link-active router-link-exact-active">得獎名單</a>
    </div>
    <div class="bh-item">
      <a aria-current="page" href="https://contest.bhuntr.com/#guideline" class="router-link-active router-link-exact-active">比賽說明</a>
    </div>
    <div class="bh-item">
      <a aria-current="page" href="https://contest.bhuntr.com/#attachment" class="router-link-active router-link-exact-active">檔案下載</a>
    </div>
    <div class="bh-item">
      <a aria-current="page" href="https://contest.bhuntr.com/#prize" class="router-link-active router-link-exact-active">比賽獎項</a>
    </div>
    <div class="bh-item">
      <a aria-current="page" href="https://contest.bhuntr.com/#faq" class="router-link-active router-link-exact-active">活動 Q&amp;A</a>
    </div>
  </div>
  <button class="bh-button"><span>馬上報名</span></button>
  </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from '@/utils'
import navList from '@/info/navList'

export default {
  name: 'navigation',
  components: {},
  data() {
    return {
      isOpen: false,
      isMobile,
      isTablet,
      list: navList,
    }
  },

  props: ['min'],

  computed: {
  },

  methods: {
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
#bh-theme{
    font-size: 17px;
    line-height: 1.5;
  .bh-float-menu {
    font-family: 'Noto Sans TC', serif;
    position: fixed;
    top: calc(45vh - min(35%,40vh));
    height: 100%;
    max-height: 80vh;
    right:size(20);
    width:size(140);
    padding: 0 size(10);
    z-index: 5;

    .bh-items {
      margin-bottom: 20px;
      padding: 20px 0;
      background-color: #fff;
      text-align: center;
      box-shadow: 0 0 8px #0003;
      border-radius: 3px;
      background-clip: padding-box;
      .bh-item {
        padding: 10px 0;
        a {
          display: block;
          width: 100%;
          color: #666;
          font-weight: 500;
          border-left: 4px solid #fff;
          border-right: 4px solid #fff;
          text-decoration: none;
        }
        &:hover a,
        &.is-active a{
          border-left: 4px solid #ffc400
        }
      }
      .bh-with-dropdown-item {
        position: relative;
        .bh-dropdown-menu {
          position: absolute;
          right:size(180);
          width:size(180);
          top: 0;
          overflow: hidden;
          opacity: 0;
          display: none;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: center;
          padding: size(7.5) 0;
          transition: opacity .3s ease;
          background: #fff;
          margin-left: 3px;
          border: 1px solid #efefef;
          border-color: var(--menuButtonFontColor)!important;
          box-shadow: #000c 0 2px 10px -6px;
          .bh-link {
            padding: 1rem 1.5rem;
            display: inline-block;
            width: 100%;
            &:hover,
            &.is-actived {
              color: var(--menuButtonFontColor)!important;
              background-color: var(--menuButtonBackgroundColor)!important
            }
          }
        }
        &:hover .bh-dropdown-menu,
        &:active .bh-dropdown-menu,
        &:focus .bh-dropdown-menu {
          display: flex;
          opacity: 1;
        }
      }
    }
    .bh-button {
      border: 0;
      width: 100%;
      box-shadow: 0 0 8px #0006;
      color:#fff;
      background-color: #ffa600;
      border-radius: 3px;
      font-size: 17px;
      line-height: 1.5;
      padding: 0.5em 0;
      &:hover {
        color:#fff;
        background-color: #3e8a00;
      }
    }
  }
}



@media screen and (max-width: 767px) {
 
}

</style>
