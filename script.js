
const container = document.querySelector("#container");

function createGrid(columns, gridElements){
    for(let i = 0; i < columns; i++){
        let column = document.createElement("div");
        container.appendChild(column);

        column.classList.add("column");

        //document.getElementsByClassName("column")[i].style.border = "2px black solid";

        

        for(let x = 0; x < gridElements; x++){
            let gridElement = document.createElement("div");
            column.appendChild(gridElement);
            
            
            gridElement.classList.add("grid");
            
            
            
            gridElement.style.height = "60px";
            gridElement.style.width = "60px";

            //document.getElementsByClassName("grid")[x].style.border = "2px black solid";
            gridElement.addEventListener("mouseenter", (event) =>
            {event.target.style.backgroundColor = "black"})
        }
        
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    createGrid(16,16);
    
})

const dimensionButton = document.querySelector("#canvas");

dimensionButton.addEventListener("click", ()=>{
    containerClearance();
    
    let size = prompt("Enter a number: ");

    createGrid(size, size);

    let size2 = 960/size;
    console.log(`Dimensions are ${size2}px by ${size2}px`)
})

function containerClearance(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}