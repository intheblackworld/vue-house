export default {
  mounted() {
    console.log(123123123)
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = `gtag('event', 'conversion', {'send_to': 'AW-374267634/b0E6CP225I0CEPK9u7IB'});`
    const obj = {
      s,
    }

    document.head.appendChild(obj.s)
  }
}
