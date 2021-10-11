function Contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById ('txtf')
    var passo = document.getElementById ('txtp')
    var res = document.getElementById ('res')
        if (inicio.value.length <= 0 || fim.value.length <= 0 || passo.value.length <= 0) {
            alert('[ERRO] Preencha os campos em branco e tente novamente!')
       
        } else {
            if (p <= 0) {
                window.alert('[ERRO] Número INVÁLIDO! Considerando PASSO 1!')
                p = 1

            }
            res.innerHTML = `Iniciando contagem... <br>`
            //funcionamento do contador
            var i = Number.parseInt(inicio.value)
            var f = Number.parseInt(fim.value)
            var p = Number.parseInt(passo.value)
                if (i < f) {
                 //contador crescente
                     for(var c = i; c <= f; c += p) {
                     res.innerHTML += `${c} \u{1F449} `
                }
                 //contador regressivo
         } else {
             for(var c = i; c >= f; c -= p)
             res.innerHTML += `${c} \u{1F449} `
         }
                res.innerHTML += `\u{1F3C6}`
        } 
}