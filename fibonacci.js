<!DOCTYPE>
<html>
<head>
<title>Fibonacci series</title>
</head>
<body>
  <p>you cannot use num</p>
<p>id="fibonacci"></p>
<script>
function Fib(num){
    try { 
      Fib(num)
        }
    catch(err){
      document.getElementById("fibonacci").innerHTML = err.name;  
    }
let num = 5;
for (let i=0;i<=num;i++){
if ((i==0 or i==1)){
return 1
}
else{
return Fib(i)*Fib(i-1);
}
}
console.log(Fib(num))
</script>
</body>
</html>
