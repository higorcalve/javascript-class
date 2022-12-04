function calcular() {

    let res = document.querySelector('div#resultado')
    let produto = prompt('Qual o produto que você está comprando?')
    let preço = Number(prompt(`Qual o preço de ${produto}`))
    let desconto = preço*0.1
    let preçofinal = preço - desconto

    res.innerHTML = (`<p><strong>Calculando o desconto de 10% para ${produto}:</strong></p>`)
    res.innerHTML += (`<p>O preço original de ${produto} era ${preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`)
    res.innerHTML += (`<p>Você acaba de ganhar ${desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de desconto (-10%).</p>`)
    res.innerHTML += (`<p>No fim, você irá pagar ${preçofinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no produto ${produto}.</p>`)
}