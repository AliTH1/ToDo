let inputToDo = document.getElementById("input-toDo");
let btnToDo = document.getElementsByClassName("btn-to-do");
let toDo = document.getElementsByClassName("to-do")[0];
let doing = document.getElementsByClassName("doing")[0];
let btnDoing = document.getElementsByClassName("btn-doing")[0];
let btnDone = document.getElementsByClassName("btn-done")[0];

let count = 0;

inputToDo.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        btnToDo[count].innerText = inputToDo.value;
        count++;
        toDo.innerHTML += '<button class="btn-to-do text-start my-2"></button>'
    }
})

let addButton = document.getElementsByClassName("add-button")[0];
addButton.addEventListener("click", function(){
    btnToDo[count].innerText = inputToDo.value;
    count++;
    toDo.innerHTML += '<button class="btn-to-do text-start my-2"></button>'
})

btnToDo.addEventListener("click", function(){
    btnDoing.innerText = btnToDo[count].textContent;
    btnToDo.remove();
    toDo.innerHTML += '<button class="btn-to-do text-start my-2"></button>'
})