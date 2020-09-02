<!DOCTYPE>
<html>
<head>
<title>Fibonacci series</title?
</head>
<script>
function Fib(num){
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
