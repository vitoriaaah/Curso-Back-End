function converteridadeemdiasparadias(anos){
idadeemdias= anos*365;
return (idadeemdias);
}do{
var anos= parseInt(prompt("Informe sua idade: "));
if (anos <= 0 || !/^[0-9]+$/.test(anos)){
    alert("Erro. \nTente novamente");
}
}while(anos<=0 && anos == "" || !/^[0-9]+$/.test(anos));
alert(`Idade em anos: ${anos} \nIdade em dias: ${converteridadeemdiasparadias(anos)}dias`);

