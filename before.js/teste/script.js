var nome = document.getElementById('txtn')
var idade = document.getElementById('txtnum')
var num = Number(idade.value)
var sel = document.getElementById('sellist')
var res = document.getElementById('res')
var valores = []

function Anotar() {
        if (Number(idade.value.length) <= 0 || nome.value.length <= 0) {
                 alert('[ERRO] Por favor, verifique os campos e tente novamente!')
       
        } else {
                var lista = document.getElementById('sellist')
                var item = document.createElement('option')
                valores.push(String(nome.value) && Number(idade.value))
                item.text = `O nome ${nome.value} e a idade ${idade.value} foram adicionadas na lista!`
                lista.appendChild(item)           
        }
                idade.value = ''
                idade.focus()
                nome.value = ''
                nome.focus()
}

function Verificar () {
        if (valores.length == 0) {
                alert('Adicione algo na lista antes de continuar!')
        } else {
                let resultado = valores.length

                res.innerHTML = ''
                res.innerHTML += `<p>Ao todo temos ${resultado} nome(s) cadastrado(s)!</p>`
        }       
}