
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
            
            let height = 960/gridElements;
            let width = 960/columns;

            
            
            gridElement.style.height = `${height}px`;
            gridElement.style.width = `${width}px`;

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
    
    
    let size = prompt("Enter a number: ");
    if (size > 100){
        alert("Please enter a number lower than or equal to 100");
        
    } else {
        containerClearance();
        createGrid(size, size);

        let size2 = 960/size;
        console.log(`Dimensions are ${size2}px by ${size2}px`)
    }
})

function containerClearance(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}