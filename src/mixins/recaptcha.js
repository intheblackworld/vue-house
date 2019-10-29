export default {
  mounted() {
    let scriptArray = []
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = `https://www.google.com/recaptcha/api.js?render=6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s`
    const n = document.createElement('script')
    n.type = 'text/javascript'
    n.async = true
    n.innerHTML = `grecaptcha.ready(function() {
        grecaptcha.execute('6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s_', {action: 'homepage'}).then(function(token) {
        });
    });`
    const obj = {
      s,
      n
    }
    scriptArray.push(obj)

    scriptArray.forEach(script => {
      document.head.appendChild(script.s)
      document.head.appendChild(script.n)
    })
  }
}
