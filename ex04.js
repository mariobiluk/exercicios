let res = document.getElementById('res')


function votar(){
    
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)

    res.innerHTML=``

if(idade>=0 && idade<=15){
    res.innerHTML +=`${nome}, seu voto é proibido, pois sua idade é: ${idade} anos`    
}else if((idade >= 16 && idade<18)||(idade>70)){
    res.innerHTML +=`${nome}, seu voto é facultativo, pois sua idade é: ${idade} anos`
}else if (idade>18&&idade<=70){
    res.innerHTML+=`${nome}, seu voto é obrigatório, pois sua idade é: ${idade} anos`
}else{
    res.innerHTML+=`${nome}, você digitou um valor errado, favor, tente novamente!`
}
   
    
}