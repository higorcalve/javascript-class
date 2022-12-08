function verificar() {
    let res = document.querySelector('div#resultado')
    let preçoinicial = Number(prompt(`Qual era o preço anterior do produto?`))
    let preçoatual = Number(prompt(`Qual o preço atual do produto?`))
    
    res.innerHTML = (`<p><strong>Analisando os valores informados...</strong></p>`)
    
    if (preçoatual > preçoinicial) {
        let diferença = preçoatual - preçoinicial
        let percentual = (diferença / preçoinicial) * 100

        res.innerHTML += (`<p>O produto custava ${preçoinicial.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} e agora custa ${preçoatual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.</p>`)
        res.innerHTML += (`<p>O produto está mais caro.</p>`)
        res.innerHTML += (`<p>O preço subiu ${diferença.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})} em relação ao preço anterior.</p>`)
        res.innerHTML += (`<p>Uma variação de ${percentual.toFixed(2)}% para cima.</p>`)
        
    } else if (preçoinicial > preçoatual) {
        let diferença = preçoinicial - preçoatual
        let percentual = (diferença / preçoinicial) * 100
        
        res.innerHTML += (`<p>O produto custava ${preçoinicial.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} e agora custa ${preçoatual.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}.</p>`)
        res.innerHTML += (`<p>O produto está mais barato.</p>`)
        res.innerHTML += (`<p>O preço caiu ${diferença.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} em relação ao preço anterior.</p>`)
        res.innerHTML += (`<p>Uma variação de ${percentual.toFixed(2)}% para baixo</p>`)

    } else {
        res.innerHTML += (`<p>Não houve variação de preço.</p>`)
    }
    
}