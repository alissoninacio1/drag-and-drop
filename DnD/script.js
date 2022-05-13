
/** app */ 
const cards = document.querySelectorAll('.card') 
const dropzones = document.querySelectorAll('.dropzone')



/* our cards */

//The forEach() method executes a provided function once for each array element.
//to all card elements (array list of .card classes) execute a function called card

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    // card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
});

function dragstart() {
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    //this = card
    this.classList.add('is-dragging')
}

// function drag() {
//     //nothin will be here for this program
// }


function dragend() {
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

/*-----Local to drop the cards-----*/ 
dropzones.forEach(dropzone => {
    // dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})


function dragover() {
    //this  = dropzone
    this.classList.add('over')

    //get dragging card 
    const cardBeingDragged = document.querySelector('.is-dragging')

    //The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.
    this.appendChild(cardBeingDragged)
}

function dragleave() {
    this.classList.remove('over')
}

function drop() {
    this.classList.remove('over')
}



/** Ghost images and tips - advanced drag and drop*/