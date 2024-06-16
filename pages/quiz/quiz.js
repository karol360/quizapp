import {verificarTema, trocarTema} from"../../helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})


verificarTema(body, botaoTema)

const assunto = localStorage.getItem("assunto")

function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone")
    const iconeimg = domunet.querySelector("assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")


    divIcone.classList.add(assunto.toLocaleLowerCase())
    iconeimg.setAttrubute("src", '../../assets/images/icon-${assunto.tolowerCase()}.svg')
    assuntoTitulo.innerText = assunto
}

alterarAssunto()