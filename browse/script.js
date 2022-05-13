/*-------------THIS IS THE DRAG & DROP AREA WITH BROWSER AREA SCRIPT ------------ */

const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector("header");
const button = document.querySelector("#browse-btn");
const input = document.querySelector("input");

//this global variable will be used inside multiple functions
let file; 



function showingFile() {
    //validating files
    const fileType = file.type

    //array of some valid extensions
    const validExtensions  = ["image/jpeg", "image/jpg", "image/png"]

    if(validExtensions.includes(fileType)) {
        let fileReader = new FileReader()

        fileReader.onload = () => {
            //passing user file source in fileURL variable
            let fileURL = fileReader.result  

            //creating an img tag and passing user selected file source inside src attribute
            let imgTag = `<img src="${fileURL}" alt="image">`
            dragArea.innerHTML = imgTag; 
        }

        fileReader.readAsDataURL(file)
        
    } else {
        alert("This is not an image File")
        dragArea.classList.remove('active')
    }
}

//if the user click on the button, will also click on the input (the input will work)
// () => {}  is an Anonymous function
button.addEventListener('click', () => {
    input.click()
})

input.addEventListener('change', function() {
    ////getting user select files [0] - if user select multiple files then will be selected only the first one
    file = this.files[0]
    showingFile()
    dragArea.classList.add('active');
})




//drag file over drop area
dragArea.addEventListener('dragover', event => {

    event.preventDefault(); //preventing from default behavior

    dragArea.classList.add('active');
    dragText.textContent = "Release to Upload File";
} )

//leave dragged file from drop area
dragArea.addEventListener('dragleave', () => {

    dragArea.classList.remove('active');
    dragText.textContent = "Drag & Drop to Upload File";
} )

/**
 * ---------- drop file on drop area---------------
 * 
 * file.event - getting user select files [0] - if user select multiple files then will be selected only the first one
 * The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer
 */
dragArea.addEventListener('drop', event => {
    event.preventDefault();

    file = event.dataTransfer.files[0]
    showingFile()
} )

/** -------------THIS IS THE TOGGLE AREA SCRIPT----AN IMPLEMENTATION FROM ANOTHER CODE-------*/

const toggle = document.querySelector('#toggle-btn');
const circle = document.querySelector('.container');
const body = document.querySelector('body');

//this event will be in the button, so I can use with clicks
toggle.addEventListener('click', toggleFunction);


//now, I can toggle with the button changing the circle position and color and the body color using transitions

/**
 * The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false.
 *  If the token doesn't exist it's added and the function returns true.
 */
function toggleFunction() {
  circle.classList.toggle('containerOn');
  body.classList.toggle('body-color');
  button.classList.toggle('active');

}
