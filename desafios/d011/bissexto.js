function verificar() {
    let res = document.querySelector('div#resultado')
    let ano = Number(prompt('Qual o ano que você gostaria de verificar?'))
    
    // Verifica se o resto da divisão por 4 é igual a 0
    if (ano % 4 === 0) {
        res.innerHTML = (`<p>O ano de <mark id="sim"><strong>${ano} é bissexto &#x2714</strong></mark></p>`)
    } else {
        res.innerHTML = (`<p>O ano de <mark id="nao"><strong>${ano} não é bissexto &#x274C </strong></mark></p>`)
    }

    /* Verificando se a divisão retorna número inteiro:

    if (Number.isInteger(ano/4)) { 
        res.innerHTML = (`O ano de ${ano} é bissexto`)
    } else {
        res.innerHTML = (`O ano de ${ano} não é bissexto`)
    }
    */
}