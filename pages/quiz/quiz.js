import {verificarTema, trocarTema} from"../../helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")

let quiz = {}
let pontos = 0
let pergunta = 1

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})


verificarTema(body, botaoTema)


function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone")
    const iconeimg = domunet.querySelector("assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")


    divIcone.classList.add(assunto.toLocaleLowerCase())
    iconeimg.setAttrubute("src", '../../assets/images/icon-${assunto.tolowerCase()}.svg')
    assuntoTitulo.innerText = assunto
}

alterarAssunto()

async function buscarPerguntas() {
    const urlDados = "../../data.json"
    
    await fetch(url).then(resposta => resposta.json().then(dados => {
        dados.quizzes.forEach(dado => {
            if (dado.title === assunto) {
                quiz = dado
            }
        })
    }))
}
buscarPerguntas()


function montarPergunta() {
    const main = document.querySelector("main")

    main.innerHTML = 'não foi possivel colar o html'
}