const toDoform  = document.querySelector(".js-toDoForm"),
      toDoInput = toDoform.querySelector("input"),
      toDoList  = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function paintToDo(text) {
    const li     = document.createElement("li"),
          delBtn = document.createElement("button"),
          span   = document.createElement("span"),
          newId  = toDos.toDos.length + 1;

    delBtn.innerText = "x";    
    span.innerText = text;
    
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : 
    };
    toDos.push(toDoObj);
}

function handleSubmit(event) {

    // prevent submit value
    event.preventDefault();

    const crrentValue = toDoInput.value;

    // call Fn with to do
    paintToDo(crrentValue);

    // remove inner input
    toDoInput.value = "";
}

function loadToDos() {

    // save to do from user
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null) {
        
    }
}

function init() {
    loadToDos();

    // listener for preventing submit 
    toDoform.addEventListener("submit", handleSubmit);
}

init();