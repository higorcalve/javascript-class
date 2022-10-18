let num = [5,8,2,9,3]

console.log(`Estes são os valores de num: ${num}`)
console.log(`O vetor tem ${num.length} posições`)

num.sort()
console.log(`O método sort() ordena em ordem crescente.`)
console.log(`Estes são os novos valores de num: ${num}`)

console.log(`Agora, saiba o primeiro valor do Vetor usando [0]: ${num[0]}.`)

num.push(1)
console.log(`Usando o método push() acrescento o valor 1 ao final. Agora o vetor é ${num} . Repare que o 1 está no final pois o sort foi utilizado antes.`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log (`Descubro a posição do valor 8 usando num.indexOf(8). Que é: ${pos}`)
}