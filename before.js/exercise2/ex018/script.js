function GerarTabuada() {
    var num = document.getElementById('txtn')
    var n = Number(num.value)
    var tab = document.getElementById('sel')
        if (num.value.length == 0) {
            alert('Por favor, digite um número!')
        } else {
            let c = 1
            tab.innerHTML = ''
            while (c <= 10) {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                tab.appendChild(item)
                c++
            }
        }
}
