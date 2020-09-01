<!DOCTYPE html>
<html>
<head>
<script>
function validationForm(){
var x = document.forms["myForms"]["fphoneno"].value;
if (x == [^0-9]){
alert("Phone no is invalid");
return false;
}
}
</script>
</head>
<body>

<form name="REGISTATION PAGE" action="/file:"phoneno.html" onsubmit="return validationForm()"method="post">
Phoneno: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>

</body>
</html> 
