const form     = document.querySelector(".js-form"),
      input    = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_STORAGE = "currentUser",
      SHOWING_CLASS = "showing";

function saveName(text) {

    // save currentValue in local storage
    localStorage.setItem(USER_STORAGE, text);
}      

function handleSubmit(event) {
  
    // prevent submit value
    event.preventDefault();
    
    const currentValue = input.value;

    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {

    // show input area
    form.classList.add(SHOWING_CLASS);

    // listener for preventing submit
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {

    // do not show input area
    form.classList.remove(SHOWING_CLASS);

    // show greetings
    greeting.classList.add(SHOWING_CLASS);
    greeting.innerText = `Hello, ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_STORAGE);
    
    if (currentUser === null) {
        
        // she is no
         askForName();
    } else {
        
        // she is
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();