function numeroparames(){
    return(NumeroMes);

}do{
    var NomeMes;
    var NumeroMes= parseInt(prompt("Informe um numero: "));

}while(NumeroMes <=0 && NumeroMes>12);
switch (NumeroMes) {
    
    case 1:
    NomeMes= "Janeiro";
        break;

    case 2:
    NomeMes= "Fevereiro";
        break;
    
    case 3:
    NomeMes= "Março";
        break;
    
    case 4:
    NomeMes= "Abril";
        break;

    case 5:
    NomeMes= "Maio";
        break;
    
    case 6:
    NomeMes= "Junho";
        break;

    case 7:
    NomeMes= "Julho";
        break;

    case 8:
    NomeMes= "Agosto";
        break;

    case 9:
    NomeMes= "Setembro";
        break;

    case 10:
    NomeMes= "Outubro";
        break;

    case 11:
    NomeMes= "Novembro";
        break;

    case 12:
    NomeMes= "Dezembro";
        break;
}
numeroparames(NumeroMes);