let amigo = {
    nome:'José',
    peso: 85,
    sexo:'M',
    engordar(p=0){
        console.log(`${amigo.nome} engordou ${p}`)
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)