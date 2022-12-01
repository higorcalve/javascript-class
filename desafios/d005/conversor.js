function converter() {
    let res = document.querySelector('div#resultado')
    let distancia = prompt('Informe uma distância (em metros):')

    res.innerHTML = (`<p>A distância de ${distancia} metros corresponde à...</p>`)

    let km = distancia * 0.001
    res.innerHTML += (`<p>${km.toFixed(3).replace('.',',')} quilômetros (Km)</p>`)
    
    let hm = distancia * 0.01
    res.innerHTML += (`<p>${hm.toFixed(3).replace('.',',')} hectômetros (Hm)</p>`)
    
    let dam = distancia * 0.1
    res.innerHTML += (`<p>${dam.toFixed(3).replace('.',',')} decâmetros (Dam)</p>`)
    
    let dm = distancia * 10
    res.innerHTML += (`<p>${dm.toFixed(3).replace('.',',')} decímetros (dm)</p>`)

    let cm = distancia * 100
    res.innerHTML += (`<p>${cm.toFixed(3).replace('.',',')} centímetros (cm)</p>`)

    let mm = distancia * 1000
    res.innerHTML += (`<p>${mm.toFixed(3).replace('.',',')} milímetros (mm)</p>`)
    
}