function maiorOuIgual (n1,n2){
    if (n1>n2){
        return(`${n1} é maior que ${n2}`);
    }else
    if(n1==n2){
        return(`${n1} é igual a ${n2}`);
    }else
    if(n1<n2){
        return(`${n1} é menor que ${n2}`);}
}
    do{
        var n1= prompt("Insira o primeiro valor: ");
        var n2= prompt("Insira o segundo valor: ");
    }while( !/^[0-9]+$/.test(n1) || !/^[0-9]+$/.test(n2) );
    maiorOuIgual(n1,n2);
