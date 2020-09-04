<!DOCTYPE>
<head>
<title>Doubleclick.js</title>
<script src "https://file:///C:/Users/DELL/Desktop/rdip/javascript.html"</script>
</script>
<script> 
$(document).ready(function(){
  $("div").dblclick(function(){
    $( this ).toggleClass("divClass2");
  });
});
</script>
 
<style> 
.divClass1
{
    padding:5px;
    text-align:center;
    background-color:yellow;
    border:solid 1px;
}
.divClass2
{
    padding:5px;
    text-align:center;
    background-color:grey;
    border:solid 1px;
}
</style>
</head>
<body>
<div class="divClass1">JournalDev</div>
</body>
</html>

