const DOM = {
    toggleModal(){
        document.querySelector(".wrapper-modal")
            .classList.toggle("on")
    },
    
    toggleModalErr(){
        document.querySelector(".wrapper-modal-err")
            .classList.toggle("on")
    }  
}


const Form = {
    main: document.querySelector('main'),
    inputURL: document.querySelector('input'),

    validatField() {
        if(Form.inputURL.value.trim() == "") {
            throw new Error ("Preeche ae doido")
        }
    },

    img(src) {
        const newIMG = document.createElement("img")
        newIMG.src = src
        
        return newIMG
    },

    addIMG() {
        let inputURL = document.querySelector('input')
        const newIMG = Form.img(Form.inputURL.value)
        Form.main.appendChild(newIMG)

        inputURL.value = ""
        DOM.toggleModal()
    }
    
}

const App = {

    submit() {

        try {
            Form.validatField()
            Form.addIMG()
        } catch (err){

            DOM.toggleModalErr()
        }
    }
}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()
    App.submit()
})

