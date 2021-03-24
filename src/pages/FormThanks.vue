<template>
  <div class="thanks">
    <img src="https://bcp.crwdcntrl.net/5/c=13578/b=78113418" width="1" height="1" />
    <a href="/">
      <img src="~@/assets/img/thank-img.png" alt="" class="img">
      <img src="~@/assets/img/thank-img-hover.png" alt="" class="img-hover">
    </a>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
.thanks {
  width: 100vw;
  height: 100vh;
  background: $phone_thanks_bg;
  background-size: cover;
  background-position: center;
  // background-image: linear-gradient(to top, rgba(0, 0, 0, 0.24), rgba(156, 30, 35, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    .img {
      position: absolute;
      opacity: 1;
    }
    .img-hover {
      opacity: 0;
    }

    &:hover {
      .img {
        opacity: 0;
      }
      .img-hover {
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .thanks {
    a {
      .img,
      .img-hover {
        width: 90vw;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'formThanks',
  components: {},

  methods: {},

  mounted() {
    const s = document.createElement('script')
    // s.type = 'text/javascript'
    // s.async = true
    s.nonce = '4pvWcEuS'
    s.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '446015813377115');
      fbq('track', "PageView");`
    const n = document.createElement('noscript')
    n.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=446015813377115&ev=PageView&noscript=1" />`

    const s2 = document.createElement('script')
    s.nonce = '4pvWcEuS'
    s.innerHTML = `fbq('track', 'CompleteRegistration')`

    const s3 = document.createElement('script')
    // s.nonce = '4pvWcEuS'
    s.innerHTML = `gtag('event', 'conversion', {'send_to': 'AW-401328539/riktCMWMn_wBEJuTr78B'});`
    const obj = {
      s,
      n,
      s2,
      s3,
    }

    document.head.appendChild(obj.s)
    document.head.appendChild(obj.n)
    document.head.appendChild(obj.s2)
    document.head.appendChild(obj.s3)
  },
}
</script>
