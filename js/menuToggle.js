let linksVersiculos = document.getElementById("versiculos")

let ultimoVersiculo = null

linksVersiculos.addEventListener("click", e => {
    e.preventDefault()

    console.log("Começo", ultimoVersiculo)
    let targetClick = e.target

    let idVersiculo = targetClick.getAttribute("href")

    const conteudoVersiculo = document.getElementById(idVersiculo)

    if (ultimoVersiculo == null) {
        ultimoVersiculo = conteudoVersiculo
        console.log("Se null", ultimoVersiculo)
    } else {
        // se não for null, ele renomeia com o novo valor do conteudo versiculo
        ultimoVersiculo.classList.toggle("oculto")
        ultimoVersiculo = conteudoVersiculo
        console.log("Se não", ultimoVersiculo)
    }

    conteudoVersiculo.classList.toggle("oculto")
})