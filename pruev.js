/*alert("escribe tu nombre.....");
var cadena=prompt("Escribe su nombre","Nombre");
alert("hola "+cadena);
var num1=parseInt(prompt("escribe un numeros",""));
var num2 =parseInt(prompt("escribe otro numero",""));

alert(num1+num2);
var dias=["lunes","martes","miercoles","jueves"]
for(contador in dias)
{
    alert(dias[contador]);
}*/
var cadena=prompt("Escribe un texto: ","");
var tam=cadena.length;
alert("La longitud es de: "+tam);
var cadena2=prompt("Escribe otro texto: ");
var nuevac=cadena.concat(cadena2);
//nuevac=cadena+cadena2
alert("La nueva cadena es: "+nuevac);
var num=prompt("escribe un numero: ","");
var suma=parseInt(num)+parseInt(num);
alert("la suma de estos es de: "+suma);
var caracter=prompt("carcter que quieres buescar: ");
caracter=cadena.indexOf('pos');
alert("el caracter esta an la posisi "+caracter);