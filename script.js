const inputBox = window.document.querySelector(`input#input-box`)
const btn = window.document.querySelector(`button`)
const listContainer = window.document.querySelector(`ul#list-container`)

function addTarefa(){
    //Input vazia
    if(inputBox.value === ''){
        alert("Escreva algo...")
    }

    //Criando li depois que adicionar tarefa
    let li = window.document.createElement(`li`)
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)

    let span = window.document.createElement(`span`)
    span.innerHTML = `\u00d7`
    li.appendChild(span)

    inputBox.value = ""
    salvarDados()

}

//Salvando no localStorege
function salvarDados(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function mostrarTarefa(){
    listContainer.innerHTML = localStorage.getItem("data")
}

    //Criando efeito de tarefa
listContainer.addEventListener('click', function(e){
    //Clica na tarefa para concluida
    if(e.target.tagName === "LI"){
        e.target.classList.toggle(`checked`)
        salvarDados()
    }
    //Clica na tarefa para concluida
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        salvarDados()
    }
}, false)

btn.addEventListener('click', function(){
    addTarefa()
})

mostrarTarefa()