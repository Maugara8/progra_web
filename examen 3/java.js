function palindromo() {
    var cadena = document.getElementById("frase").value;//aqui se declara la variable para que tome los valores del html
    var resultado = "La frase \""+cadena+"\" ";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    for(i in letrasEspacios) {
      if(letrasEspacios[i] != " ") {
        cadenaSinEspacios += letrasEspacios[i];
      }
    }
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();//eata funcion voltea las palabras
    var iguales = true;
    for(i in letras) {
      if(letras[i] != letrasReves[i]) {//aquí lee las oraciones inversas carracter por carracter y si son diferntes lo marca
        iguales = false;
      }
    }
    if(iguales) {
      resultado += " es un palíndromo";//en caso de que sea palindromo
    } else {
      resultado += " no es un palíndromo";//caso contrario 
    }
    document.getElementById("resultado").innerHTML = resultado;
  }