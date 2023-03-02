//fazer par ou impar com o bagulhinho
function parouImpar(numero, par=false){
    return par ? numero%=2 : !(numero%4)
}
var numero= prompt("Digite o valor: ");
alert(`Par(true)\nImpar(false)\nResultado: ${parouImpar(numero)}`)