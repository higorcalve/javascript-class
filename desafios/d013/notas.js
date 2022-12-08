function calcular() {
    let res = document.querySelector('div#resultado')
    let nome = prompt('Digite o nome do aluno:')
    let n1 = Number(prompt(`Qual a nota da P1 de ${nome}?`))
    let n2 = Number(prompt(`Qual a nota da P2 de ${nome}?`))
    let media = (n1 + n2)/2

    res.innerHTML = (`<p><strong>Analisando a situação de ${nome}...</strong></p>`)

    if (media < 3) {
        res.innerHTML += (`<p>Com as notas ${n1.toFixed(2).replace('.',',')} e ${n2.toFixed(2).replace('.',',')} <strong>a média é ${media.toFixed(2).replace('.',',')}</strong></p>`)
        res.innerHTML += (`Com a média abaixo de 3,00 o aluno está <mark id="reprovado">REPROVADO</mark>.`)
    } else if (media >=3 && media < 6) {
        res.innerHTML += (`<p>Com as notas ${n1.toFixed(2).replace('.',',')} e ${n2.toFixed(2).replace('.',',')} <strong>a média é ${media.toFixed(2).replace('.',',')}</strong></p>`)
        res.innerHTML += (`Com a média entre 3,00 e 6,00 o aluno está de <mark id="recuperacao">RECUPERAÇÃO</mark>.`)
    } else if (media >= 6) {
        res.innerHTML += (`<p>Com as notas ${n1.toFixed(2).replace('.',',')} e ${n2.toFixed(2).replace('.',',')} <strong>a média é ${media.toFixed(2).replace('.',',')}</strong></p>`)
        res.innerHTML += (`Com a média acima de 6,00 o aluno está <mark id="aprovado">APROVADO</mark>.`)
    }
}