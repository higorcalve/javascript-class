
function calcular () {
    let res = document.querySelector('div#resultado')

    let a = Number(prompt(`Qual o valor de "a" ?`))
    let b = Number(prompt(`Qual o valor de "b" ?`))
    let c = Number(prompt(`Qual o valor de "c" ?`))
    let Δ = (b*b)-4*(a*c)
    let x1 = ((-b)+Math.sqrt(Δ))/(2*a)
    let x2 = ((-b)-Math.sqrt(Δ))/(2*a)

    res.innerHTML = (`<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`)
    res.innerHTML += (`<p>O cálculo realizado será <strong>Δ = ${b}² - 4.${a}.${c}</strong></p>`)
    res.innerHTML += (`<p>O valor calcularo foi <strong>Δ = ${Δ}</strong></p>`)
    res.innerHTML += (`<p>O valor de <strong>x1 é ${x1}</strong></p>`)
    res.innerHTML += (`<p>O valor de <strong>x2 é ${x2}</strong></p>`)
}