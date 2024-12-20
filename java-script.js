let gridSize = 16
let gridContainer = document.querySelector('#grid-container')
const gridMaxSize = 100

function createGrid(){
    
    for (y = 0; y < gridSize; y++){
        //create row container div inside grid container
        let rowContainer = document.createElement('div')
        rowContainer.classList.add('row')
        gridContainer.appendChild(rowContainer)
        
        for(x = 0; x < gridSize; x++){
            // create a single box
            let box = document.createElement('div')
            box.classList.add('cube')
            rowContainer.appendChild(box)
        }
    }
}

createGrid()
const resetButton = document.querySelector("#reset-button")

resetButton.addEventListener("click", () => {
    let newGridSize
    //Prompt user for grid size
    do{
    
        newGridSize = parseInt(prompt("Please enter the new size of the grid. Max size = " + gridMaxSize))
    
        
    }while(newGridSize > gridMaxSize)
    gridSize = newGridSize
    
    //Clear Grid
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild)
    }
    //Create new Grid
    // createGrid()
})

