function reajustar() {
    let nome = prompt('Qual o nome do funcionário?')
    let salario =  Number(prompt(`Qual o salário de ${nome}?`))
    let porcentagem = Number(prompt(`Em quantos porcento(s) será reajustado o salário de ${nome}?`))
    let aumento = salario * (porcentagem*0.01)
    let salariofinal = salario + aumento

    let res = document.querySelector('div#resultado')
    res.innerHTML = (`<strong><p>${nome} recebeu um aumento salarial!</p></strong>`)
    res.innerHTML += (`<p>O salário atual era de ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`)
    res.innerHTML += (`<p>Com um aumento de ${porcentagem}%, o salário vai aumentar em ${aumento.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} no próximo mês.</p>`)
    res.innerHTML += (`<p>A partir daí, ${nome} passa a ganhar ${salariofinal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.</p>`)
}