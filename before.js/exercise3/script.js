var numero = document.getElementById('txtn')
var lista = document.getElementById('selector')
var res = document.getElementById('res')
var valores = []

    function isNumero (n) {
        if (Number(n) >= 1 && Number(n) <= 100 ) {
            return true
        } else {
            return false
        }

    }

    function inLista (n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }

    }

    function Adicionar() {
         if (isNumero(numero.value) && !inLista(numero.value, valores)) {
                valores.push(Number(numero.value))
                var item = document.createElement('option')
                item.text = `O vetor de ${numero.value} foi adicionado!`
                lista.appendChild(item)
                res.innerHTML = ''
         } else {
             window.alert('Valor inválido ou já adicionado na lista.')
         }
         numero.value = ''
         numero.focus()
      
} 
    function Finalizar() {
        if (valores.length == 0) {
            alert('Adicione valores antes de finalizar!')
        } else {
            var tot = valores.length
            var ordem = valores.sort()
            var menor = valores[0]
            var maior = valores[0]
            var soma = 0 
            
                for (var pos in valores) {
                    soma += valores[pos]
                    if (valores[pos] > maior)
                        maior = valores[pos]
                } 
            
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>Os vetores em ordem crescente fica: ${ordem}.`
            res.innerHTML += `<p>O maior valor cadastrado é o ${maior}.`
            res.innerHTML += `<p>O menor valor cadastrado é o ${menor}.`
            res.innerHTML += `<p>A soma entre os valores cadastrados é ${soma}.`
        }
    }