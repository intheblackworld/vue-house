export default {
  mounted() {
    let scriptArray = []
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5SGDFVQ');`
    const s2 = document.createElement('script')
    s2.type = 'text/javascript'
    s2.async = true
    s2.innerHTML = `(function (i, s, o, g, r, a, m) {i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {(i[r].q = i[r].q || []).push(arguments)}, i[r].l = 1 * new Date(); a = s.createElement(o),m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');ga('create', 'UA-17198937-1', 'auto');ga('send', 'pageview');`
    const n = document.createElement('noscript')
    n.type = 'text/javascript'
    n.async = true
    n.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SGDFVQ" height="0" width="0"
      style="display:none;visibility:hidden"></iframe>`
    const obj = {
      s,
      s2,
      n
    }
    scriptArray.push(obj)

    document.head.appendChild(obj.s)
    document.head.appendChild(obj.s2)
    this.$refs.gtmnoscrip2.appendChild(obj.n)
  }
}
