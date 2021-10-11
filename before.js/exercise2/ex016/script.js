function Contar() {
    
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
       
        
        if (ini.value.length <= 0 || fim.value.length <= 0 || passo.value.length <= 0) {
            alert('[ERRO] IMPOSSÍVEL CONTAR, preencha os campos em branco e tente novamente!')      
}   else {
            res.innerHTML = `Contagem iniciando... <br>`
     
          //funcionamento do contador
         var i = Number.parseInt(ini.value)
         var f = Number.parseInt(fim.value)
         var p = Number.parseInt(passo.value)
         if (p <= 0) {
             window.alert('Passo inválido! Considerando PASSO 1')
             p = 1
         }
         if (i < f) {
            //contagem crescente
            for(var c = i; c <= f; c += p) {
                     res.innerHTML += `${c} `
              } 
           }   else {
            for(var c = i; c >= f; c -= p) {
                     res.innerHTML += `${c} `
            }
        }
            res.innerHTML += `\u{1F6A9}`
        
    }         

}