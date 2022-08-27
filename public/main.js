//taking the button and adding an event listener
let button = document.querySelector('#add');
button.addEventListener('click', () => {
    addTask();
});
 let input = document.querySelector("input");
 input.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        addTask();
    }else{
        return;
    }
 })

    function addTask(){
        //take the value from the input container
        let task = document.querySelector('#task').value;
        if(task != ""){ //add task to to-do list
        let container = document.querySelector('#ciuruc');
        container.innerHTML += '<div class="relative to-do flex flex-row justify-between">' + task +'<button onclick="trash(event)" id="trash"><img class="h-6" src="./img/closed-trash-can-svgrepo-com.svg" alt="fuck"></button></div>';
        }else{
            alert("input text in the input area");
        }
    }

    let trash = (event) => {
        let entry = event.target.parentElement.parentElement;
        entry.style.transform = "translatex(-30px)";
        entry.style.display = "none";
    }

    let deleteAll = () => {
        let tasks = document.querySelectorAll(".to-do");
        for(let i = 0; i < tasks.length ; i++) {
            tasks[i].style.display = "none";
        } 
    }
