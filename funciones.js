function evalua() {
  let cadena = document.getElementById("cadena").value;
  if (cadena === cadena.toLowerCase()) {
    let r = "La cadena " + cadena + " está formada por minúsculas.";
    document.getElementById("parrafo").innerHTML = r;
  } else if (cadena === cadena.toUpperCase()) {
    let r = "La cadena " + cadena + " está formada por mayúsculas.";
    document.getElementById("parrafo").innerHTML = r;
  } else {
    let r = "La cadena tiene de los dos.";
    document.getElementById("parrafo").innerHTML = r;
  }
}
