function calcular() {
    let produto = prompt('Que produto você está comprando?')
    let preço = prompt(`Quanto custa ${produto} que você está comprando?`)
    let dinheiro = prompt(`Qual foi o valor que você deu para pagar ${produto}?`)
    let troco = Number(dinheiro) - Number(preço)

    alert(`Você está adquirindo ${produto} por R$ ${preço},00. \nSeu troco é de R$ ${troco},00.\nConfira o valor e volte sempre :D`)
}