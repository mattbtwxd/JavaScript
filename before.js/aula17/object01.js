var amigo = {nome: 'Matheus', 
sexo: 'M',
peso: 60.0,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`O nome amigo é ${amigo.nome} e ele pesa ${amigo.peso}Kg.`)