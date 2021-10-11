 var numero = [14, 43, 19, 32, 51]
// array 
    

var numero = [14, 43, 19, 32, 51]
numero[5] = 99
//adicionar elementos no vetor array      

    console.log(`mostrar ${numero[5]}`)

numero.length
    console.log(`O vetor tem ${numero.length} posições.`)
//mostrar quantos elementos o vetor tem (conta junto com a chave ''key'' de identificação)

numero.sort()
//ele coloca todos os elementos em ordem crescente

    console.log(`O vetor é: ${numero.sort()}`)


    for (var pos = 0; pos <numero.length; pos++) {
        console.log(`A posição ${pos} tem o valor ${numero[pos]}`)
    }
// ou uma forma mais simplificada
    for (let pos in numero) {
        console.log(`${numero[pos]}`)
    }

    console.log(numero.indexOf(32))
    //ele busca o vetor que o valor se encontra


