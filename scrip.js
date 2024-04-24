
function genera_rfc(){
    let nombre=document.getElementById("nombre").value;
    let name=nombre.substring(0,2);
    let ap=document.getElementById("ap").value;
    let fhn=ap.substring(0,1);
    let am=document.getElementById("am").value;
    let mhn=am.substring(0,1);
    var anio=document.getElementById("anio").value;
    var year=anio.substring(2,2);
    var day=document.getElementById("dia").value;
    var mont=document.getElementById("mes2").value;
    r=name+fhn+mhn+year+day+mont;
    document.getElementById("resultado").value="hola";
}