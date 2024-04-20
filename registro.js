function sumar()
{
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").vaue;
    var r=parseInt(n1)+parseInt(n2);
    r="el resultado es: "+r;
    document.getElementById("res").innerHTML=r;
}