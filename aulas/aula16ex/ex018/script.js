let num = document.querySelector('input#fnum') // campo
let lista = document.querySelector('select#flista') // quadro
let res = document.querySelector('div#res')
let valores = [] // vetor

function isNumero(n) { // função que valida se é um número entre 1 e 100
    if (Number(n) >=1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // função que valida se o número já está na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // validação
        valores.push(Number(num.value)) // adiciona o nº ao vetor
        let item = document.createElement('option') // criou <option>
        item.text = `Valor ${num.value} adicionado` // string em <option>
        lista.appendChild(item) // adiciona na lista
        res.innerHTML = '' // limpa o <div#res> após reinserir novos números
    } else {
        alert('Valor inválido ou já está na lista.')
    }

    num.value = '' // limpa o campo
    num.focus() // o cursor vai para o campo
}

function finalizar() {
    if (valores.length == 0) { // verifica se a lista está vazia
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // total de elementos
        
        let maior = valores[0] // até o momento o maior número é o primeiro
        let menor = valores[0] // até o momento o menor número é o primeiro
        let soma = 0 // soma inicial é 0
        let media = 0 // media inicial é 0

        for (let pos in valores) { // para cada pos em valores (laço de percurso)
            if (valores[pos] > maior) { 
                maior = valores[pos] // se o valor que estiver em valores[pos] for maior do que o inicial, este passa a ser o maior
            } if (valores[pos] < menor) {
                menor = valores[pos] // se o valor que estiver em valores[pos] for menor do que o inicial, este passa a ser o menor
            }
            soma += valores[pos] // incremento dos valores
            media = soma/tot
        }

        res.innerHTML = '' // limpa a <div#res>
        res.innerHTML += `<p>Ao todo você inseriu ${tot} números.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media}.</p>`

    }
}