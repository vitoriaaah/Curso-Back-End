let lista = []
// Cria o array da lista de compras
function listaDeCompras(){
do{ 
    var produto = prompt(`Informe o produto que deseja comprar:`)
    // Solicita que o usuário digite o nome do produto.
    } while (/^[0-9]+$/.test(produto))

    lista.push(produto)
    // Cada produto é adicionado no final da lista.
}

do {
    listaDeCompras()
    var resposta = prompt(`Você deseja inserir um novo produto na lista ou encerrar? Digite 1 para encerrar ou 2 para continuar.`)
    // Enquanto o cliente desejar, pergunta se ele deseja continuar adicionando as compras à lista.
} while (resposta == 2)
    
for (var i = 0; i < lista.length; i++){
  console.log(lista[i], `R$10`)
  // Exibe a lista de compras e os preços de cada produto.
}

alert(`O total da compra é de R$${lista.length*10}.`)
// Exibe o total da compra.