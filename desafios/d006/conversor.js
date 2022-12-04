function converter() {
    let Celsius = Number(prompt('Digite uma temperatura em graus Celsius (°C)'))
    let res = document.querySelector('div#resultado')
    let Kelvin = (Celsius + 273)
    let Fahrenheit = (Celsius * 1.8) + 32

    res.innerHTML = (`<p><strong>A temperatura de ${Celsius.toFixed(1).replace('.',',')}°C corresponde à...</strong></p>`)
    res.innerHTML += (`<p>${Kelvin.toFixed(2).replace('.',',')}°K (Kelvin)</p>` )
    res.innerHTML += (`<p>${Fahrenheit.toFixed(2).replace('.',',')}°F (Fahrenheit)</p>`)
}