function converteridadeemdiasparadias(anos){
idadeemdias= anos*365;
return (idadeemdias);
}
var anos= parseInt(prompt("Informe sua idade: "));
alert(`Idade em anos: ${anos} \nIdade em dias: ${converteridadeemdiasparadias(anos)}dias`);