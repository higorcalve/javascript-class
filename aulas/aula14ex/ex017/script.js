function calcular (){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('[ERRO] Por favor, digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = '' // limpa o select para nova fórmula
        for (var c = 1 ; c <= 10 ; c++) {
            let item = document.createElement('option') // cria <option> e insere var item
            item.text = `${n} x ${c} = ${n*c}` // item recebe a fórmula 
            item.value = `tab${c}` // para outras linguagens saberem o item selecionado
            tab.appendChild(item) // adiciona o elemento filho item
        }
    }
}