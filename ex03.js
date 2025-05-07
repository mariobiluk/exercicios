
function calcular(){
    let res = document.getElementById('res')

    let x = Number(document.getElementById('x').value)

    res.innerHTML=``

if(x<0 || x>10){
    res.innerHTML+=`O valor de x ${x} está fora da faixa de cálculo
    permitida`
    return
}
    let fx = (5*x+4)/(2*x+1)
    res.innerHTML+=`O valor de Fx para x = ${x} é: ${fx.toFixed(2)}`
    
}