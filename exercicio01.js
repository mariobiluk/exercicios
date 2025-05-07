let res = document.getElementById('res')
console.log(res)

function calcular(){
    let volei = Number(document.getElementById('volei').value)
    let basq = Number(document.getElementById('basq').value)
    let fut = Number(document.getElementById('fut').value)
    console.log('volei =',volei)
    console.log('basquete =',basq)
    console.log('futebol =',fut)

    let totalParcial = (volei*247.58)+(basq*260.89)+(fut*179.57)
    console.log(totalParcial)

    let totalFinal = 0

    res.innerHTML='' //este comando apaga os valores antigos

    if(totalParcial >= 550){
        totalFinal=totalParcial *0.92
        res.innerHTML+=`O total da compra sem desconto foi R$ ${totalParcial.toFixed(2)}<br>`
        res.innerHTML+=`O total da compra com desconto foi R$ ${totalFinal.toFixed(2)}<br>`
    }else{
        totalFinal=totalParcial
        res.innerHTML+=`O total da compra foi R$ ${totalFinal.toFixed(2)}<br>`
    }
}