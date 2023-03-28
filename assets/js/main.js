let inputToDo = document.getElementById("input-toDo");
let btnToDo = document.getElementsByClassName("btn-to-do")[0];
let toDo = document.getElementsByClassName("to-do")[0];
let doing = document.getElementsByClassName("doing")[0];
let btnDoing = document.getElementsByClassName("btn-doing")[0];
let btnDone = document.getElementsByClassName("btn-done")[0];

let addButton = document.getElementsByClassName("add-button")[0];
addButton.addEventListener("click", function(){
    btnToDo.innerText = inputToDo.value;
})

inputToDo.addEventListener(InputEvent())

btnToDo.addEventListener("click", function(){
    btnDoing.innerText = btnToDo.textContent;
    btnToDo.remove();
    toDo.innerHTML += '<button class="btn-to-do text-start my-2"></button>'
})

btnDoing.addEventListener("click", function(){
    btnDone.innerText = btnDoing.textContent;
    btnDoing.remove();
    doing.innerHTML += '<button class="btn-doing text-start my-2"></button>'
})

btnDone.addEventListener("click", function(){
    btnDone.remove();
})