function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')

    var data = new Date() // carrega a data atual
    var hora = data.getHours() // carrega a hora pela variável data

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha-web.png'
        document.body.style.background = '#F2BA52'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde-web.png'
        document.body.style.background = '#F27A5E'
    } else if (hora >18) {
        img.src = 'noite-web.png'
        document.body.style.background = '#282828'
    }
}