function inversao(valor){
    const tipo= typeof valor
    if(tipo== "boolean")
    return !valor
else
    if(tipo== "number")
        return -valor
    else
        return`Booleano ou numero esperado, mas o parametro é do tipo ${tipo}`
}
console.log(inversao(true))
console.log(inversao(5))
console.log(inversao(-2000))
