<!DOCTYPE>
  <html>
  <head>
  <title>Strings</title>
  </head>
<body>
  <h2>JavaScript String Properties</h2>

<p>The length property returns the length of a string:</p>

<p id="demo"></p>

<script>
var txt = "Welcome to javascript";
console.log(txt[5])
console.log(txt[7])
console.log(txt[10])
document.getElementById("demo").innerHTML = txt.length;
</script>
</body>
</html>
