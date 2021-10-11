function Calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value >= ano) {
        window.alert('[ERRO] Verifique se você preencheu os dados corretamente e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 || idade < 10) {
                //criança
                img.setAttribute('src', 'fotobebem.png')
            } if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotojovemm.png')
            } if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoadultom.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosom.png')
            }
                
        } if (fsex[1].checked) {
            gênero = 'Mulher'
               if (idade >= 0 || idade < 10) {
                //criança
                img.setAttribute('src', 'fotobebef.png')
            }  if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotojovemf.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoadultof.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosof.png')
            } 
               
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)
        
        
    }
    

}