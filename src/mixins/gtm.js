export default {
  mounted() {
    let scriptArray = []
    this.$gtmCode.forEach((gtm, index) => {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-${gtm}');`
      const n = document.createElement('noscript')
      n.type = 'text/javascript'
      n.async = true
      n.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-${gtm}"height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      const obj = {
        s,
        n
      }
      scriptArray.push(obj)
    })

    scriptArray.forEach(script => {
      document.head.appendChild(script.s)
      this.$refs.gtmNoScript.appendChild(script.n)
    })
    // dss custom
    // 1. ga new
    const tag1 = document.createElement('script')
    tag1.type = 'text/javascript'
    tag1.src = 'https://www.googletagmanager.com/gtag/js?id=UA-147268639-1'
    tag1.async = true
    tag1.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-147268639-1');
  `
    document.head.appendChild(tag1)

    // 2. fb pixel
    const fbTag = document.createElement('script')
    fbTag.innerHTML = `!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2321433564797478');
    fbq('track', 'PageView');
  `
    const fbNoTag = document.createElement('noscript')
    fbNoTag.innerHTML = `<img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=2321433564797478&ev=PageView&noscript=1" />`
    document.head.appendChild(fbTag)
    document.head.appendChild(fbNoTag)

    // 3.  tag3
    const tag3 = document.createElement('script')
    tag3.async = true
    tag3.src = 'https://www.googletagmanager.com/gtag/js?id=AW-741945426'
    const tag4 = document.createElement('script')
    tag4.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'AW-741945426');
  `

    document.head.appendChild(tag3)
    document.head.appendChild(tag4)
  }
}
