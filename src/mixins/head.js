export default {
  mounted() {
    const s = document.createElement('script')
    s.innerHTML = `gtag('event', 'conversion', {'send_to': 'AW-793623475/Vv57CILW2PkCELP3tvoC'});`
    const obj = {
      s
    }

    document.head.appendChild(obj.s)
  }
}
