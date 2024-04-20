function accion(){
    //console.log('esta funcionando');
    var ancla=document.getElementsByClassName('estilos_barr');
    for(var i=0;i<ancla.length;i++){
        ancla[i].classList.toggle('desaparece');
    }
}