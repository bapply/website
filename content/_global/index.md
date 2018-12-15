+++
headless = true
fragment = "config"
[[config]]
  type = "css"
  html = "<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700,800,900' rel='stylesheet'>"

[[config]]
  type = "js"
  html = """
<script>
  var i = 0;
  var nodes = document.querySelectorAll('.substitude span')
  if (nodes.length > 0) {
    setInterval(function() {
      nodes.forEach(function(node) {node.classList.add('hidden')})
      nodes[i].classList.remove('hidden')
      i++
      if (i === nodes.length) {
        i = 0
      }
    }, 3000)
  }
</script>
"""
+++
