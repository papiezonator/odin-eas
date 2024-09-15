
let container = document.querySelector("#container");


document.addEventListener("DOMContentLoaded", () =>{
    for(let i = 0; i < 16; i++){
        let column = document.createElement("div");
        container.appendChild(column);

        column.classList.add("column");

        //document.getElementsByClassName("column")[i].style.border = "2px black solid";

        

        for(let x = 0; x < 16; x++){
            let gridElement = document.createElement("div");
            column.appendChild(gridElement);
            gridElement.textContent = "Mario";
            
            gridElement.classList.add("grid");

            //document.getElementsByClassName("grid")[x].style.border = "2px black solid";
            gridElement.addEventListener("mouseenter", (event) =>
            {event.target.style.color = "orange"})
        }
        
    }

   
})

