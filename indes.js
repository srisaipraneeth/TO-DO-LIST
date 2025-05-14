

console.log("Hello, World!");

input=document.querySelector("#input");

add=document.querySelector(".addtasks");





// add.addEventListener('click', () => {
//     const inputValue = input.value; // removes extra spaces
//     if (inputValue) {
//         let task=document.createElement("div");
//         let radio=document.createElement("input");
//         radio.type="radio";
//         let tk=document.createElement("p")
//         tk.innerText=inputValue;
//         task.appendChild(radio); 
//         task.appendChild(tk);
//         task.className="tsks";
//          radio.id="abcd";
//        let qwerty=document.getElementsByClassName("qwerty");
//         qwerty.appendChild(task);

//      } else {
//         alert("Please enter something!");
//     }
// });

add.addEventListener("click", () => {
    const inputValue = input.value.trim(); // removes extra spaces
  
    if (inputValue) {
      let task = document.createElement("div");
      let radio = document.createElement("input");
      radio.type = "checkbox";
    //   radio.id = "radio_" + Date.now(); // unique ID
  
      let tk = document.createElement("p");
      let trash=document.createElement("i");
      tk.innerText = inputValue;
        radio.id = "abcd";
      task.appendChild(radio);
      task.appendChild(tk);
      task.appendChild(trash);
      trash.className="fa-solid fa-trash";
      trash.classList.add("trash");
      task.className= "tsks";

      let taskContainer = document.querySelector(".qwerty");
      taskContainer.appendChild(task);
  
      input.value = ""; // Clear input after adding



    
      radio.addEventListener(('change'),()=>{
        if(radio.checked){
            tk.style.textDecoration = "line-through";
        }
        else{
            tk.style.textDecoration = "none";
        }
      });

     

      trash.addEventListener("click", () => {
        task.remove();
      });






    } else {
      alert("Please enter something!");
    }
  });


  























































































































































































































































































































































































































































































