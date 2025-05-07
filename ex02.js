let res = document.getElementById('res')

function converter(){
    let celsius = Number(document.getElementById('celsius').value)

    let far = (celsius*(9/5))+32
    res.innerHTML=''
    res.innerHTML+=`A conversão de ${celsius}ºC para Fahrenheit é: ${far.toFixed(2)}ºF`
}