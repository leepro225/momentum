const toDoform  = document.querySelector(".js-toDoForm"),
      toDoInput = toDoform.querySelector("input"),
      toDoList  = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
    const btn = event.target,
          li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li     = document.createElement("li"),
          delBtn = document.createElement("button"),
          span   = document.createElement("span"),
          newId  = toDos.length + 1;

    delBtn.innerText = "x";   
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {

    // prevent submit value
    event.preventDefault();

    const currentValue = toDoInput.value;

    // call Fn with to do
    paintToDo(currentValue);

    // remove inner input
    toDoInput.value = "";
}

function loadToDos() {

    // save to do from user
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null) {
        const parsedToDos =  JSON.parse(loadedToDos);

        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();

    // listener for preventing submit 
    toDoform.addEventListener("submit", handleSubmit);
}

init();