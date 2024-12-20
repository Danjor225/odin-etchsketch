let gridSize = 16
let gridContainer = document.querySelector('#grid-container')

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