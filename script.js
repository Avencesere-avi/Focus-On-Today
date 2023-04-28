const checkBoxList = document.querySelectorAll(".goal-select");

const containertask = document.querySelectorAll(".container-task");


const goalinput = document.querySelectorAll(".goal-input")

const error = document.querySelector(".progress-error");







checkBoxList.forEach((eachcheckbox)=>{

      eachcheckbox.addEventListener("click",(e)=>{
 
            const inputFields = [...goalinput].every((x)=>{return x.value});
           
            if(inputFields){
              eachcheckbox.parentElement.classList.toggle("completed")
            }

            else{

                  error.parentElement.classList.add("ok")

            }

            

      });
});


goalinput.forEach((e)=>{e.addEventListener("focus",(e)=>{error.parentElement.classList.remove("ok")})})





