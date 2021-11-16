const input = document.querySelector("#height")
const div = document.createElement("div")
const append = (father, children) => document.querySelector(father).appendChild(children)


document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault()


    if (input.value === "" || !input.value) {
        return
    }


    if (Number(input.value) >= 1.80) {
        div.innerHTML = `Você é um jogador de basquete com altura de ${input.value}m`

        append("body", div)
    } else {
        div.innerHTML = `Você é um gnomio`
        append("body", div)
    }
})