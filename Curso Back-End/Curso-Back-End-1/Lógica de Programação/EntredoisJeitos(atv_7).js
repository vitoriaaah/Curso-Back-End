function estaentredoisjeitos (numero, minimo, maximo, inclusivo = false){
    if(inclusivo==true){
       return numero > minimo && numero <= maximo;
    }else{
    return numero > minimo && numero < maximo;
}
}