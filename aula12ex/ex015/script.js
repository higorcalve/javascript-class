function verificar() {
    var data = new Date() // recebe data e hora do sistema
    var ano = data.getFullYear() // recebe o ano do sistema (4 dígitos)
    var fano = document.querySelector('#txtano') // ano do formulário (input#txtano)
    var res = document.querySelector('#res') // receve da <div id="res">

    fano = Number(fano.value)

    if (fano < 1 || fano > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex') // sexo do formulário
        var idade = ano - fano

        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // cria um <img id="foto">

        // cálculo da idade
        var genero = ''
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) { // criança
                img.setAttribute('src', 'bebe-homem.png')
            } else if (idade < 21) { // jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) { // adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else { // idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){ // criança
                img.setAttribute('src', 'bebe-mulher-png')
            } else if (idade < 21) { // jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) { // adulto
                img.setAttribute('src', 'adulto-mulher.png')
            } else { // idoso
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.innerHTML = `<p>Você é ${genero} e tem ${idade} anos</p></br>`
        res.appendChild(img)
    }
}