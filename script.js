const checkBoxList = document.querySelectorAll(".goal-select");

const containertask = document.querySelectorAll(".container-task");


const goalinput = document.querySelector(".goal-input")

checkBoxList.forEach((checkbox)=>{

    checkbox.addEventListener("click",(e)=>{

        checkbox.parentElement.classList.toggle("completed");
       
       });
});





