function saber(cadena){
    let cadena=document.getElemcentById("cadena").value;
    if(cadena===cadena.tolowerCase()){
        let r="la cadena"+ cadena+"esta formada por minusculas";
        document.getElementById("parrafo").innerHTML=r;
    }else if (cadena===cadena.toUpperCase()){
        let r="la cadena"+ cadena+"esta formada por mayusculas";
        document.getElementById("parrafo").innerHTML=r;
    }else {
        let r="la cadena tien de los dos";
        document.getElementById("parrafo").innerHTML=r;
    }
}