
let container = document.querySelector("#container");


document.addEventListener("DOMContentLoaded", () =>{
    for(let i = 0; i < 16; i++){
        let breakPoint = document.createElement("div");
        container.appendChild(breakPoint);
        for(let i = 0; i < 16; i++){
            let gridElement = document.createElement("div");
            breakPoint.appendChild(gridElement);
            gridElement.textContent = "Mario";
            
        }
        
    }

})