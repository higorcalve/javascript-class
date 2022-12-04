let cotação = Number(prompt('Primeiramente, informe a cotação atual do dólar:'))
let res = document.querySelector('div#resultado')

function converter() {
    let reais = Number(prompt('Quantos Reais (R$) você possui?'))
    let dolar = reais / cotação

    res.innerHTML = (`<p>Você consegue comprar <strong> ${dolar} dólares</strong> com seus R$ ${reais.toFixed(2).replace('.',',')} de acordo com a cotação atual (que é de R$ ${cotação.toFixed(2).replace('.',',')}).</p>`)
}