function somar() {
    let numerosUm = document.getElementsByName("numero1")
    let numeroUm = numerosUm[0].value

    let numerosDois = document.getElementsByName("numero2")
    let numeroDois = numerosDois[0].value

    console.log(numeroDois)
    let resultadoSoma = document.getElementById("resultado-soma")
    
    resultadoSoma.innerHTML = parseInt(numeroUm) + parseInt(numeroDois)
}