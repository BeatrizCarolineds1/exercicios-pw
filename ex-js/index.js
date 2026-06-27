let enviar = document.querySelector('#ENVIAR')
let limpar = document.querySelector('#LIMPAR')
let contador = document.querySelector('#contador')
let ul = document.querySelector("ul")
let tarefas = 0;
contador.textContent=0;

function enviarTarefa(e){
    e.preventDefault()
    let input = document.querySelector("input[type= 'text']");
    let li = document.createElement("li");
    let button = document.createElement("button");
    let text = document.createTextNode(input.value);


    if(!input.value){
        input.style.border= "1px solid red";
        return 
    }
    input.style.border = "1px solid #dee2e6";

    li.setAttribute("class", "item list-group-item d-flex justfy-content-between align-items-center");

    button.setAttribute("class", "btn btn-close");
    li.appendChild(text);
    li.appendChild(button);
    input.value= "";
    ul.appendChild(li);
    tarefas ++;
    contador.textContent = tarefas
    
    li.addEventListener('click',(event)=>{
        event.preventDefault();
        li.classList.toggle("riscar");

})
button.addEventListener('click', (event)=>{
    ul.removeChild(li);
    tarefas --;
    contador.textContent = tarefas
})
}

function limparTudo(){
    tarefas = 0;
    contador.textContent = 0;
    ul.innerHTML = " ";
}

enviar.addEventListener('click', enviarTarefa)














/*enviar.onclick = function enviarTarefa(){
    alert("enviado com sucesso");
}
*/