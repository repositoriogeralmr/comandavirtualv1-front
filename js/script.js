function GerarCódigoDeBarras(elementoInput){
    /*A função JsBarcode não aceita string vazia*/
    if(!elementoInput.value){
        elementoInput.value = 0;
    }
    JsBarcode('#codBarras', elementoInput.value);
}

function mudaCorMesa(){
    var cor_mesa = document.getElementsByClassName("mesas");

    cor_mesa.addEventListener("click", function() {
    cor_mesa.style.backgroundColor  = 'red';
    
})
}