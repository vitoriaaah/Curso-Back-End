function quantidadedehorastrabalhadaspormes(horatrabalhada, horatotal){
    salário= horatotal*horatrabalhada;

    alert (`Salario igual a R$ ${salário}`)
}do{
    var horatrabalhada= prompt("Informe as horas trabalhadas durante o mes: ");
   
}while( !/^[0-9]+$/.test(horatrabalhada) && ( !/^[0-9]+$/.test(horatrabalhada)));

do{
var horatotal= parseFloat(prompt("Informe o valor da hora trabalhada: "));
}while(!/^[1-9]+$/.test(horatotal) && ( !/^[1-9]+$/.test(horatotal)));

quantidadedehorastrabalhadaspormes(horatotal, horatrabalhada); 