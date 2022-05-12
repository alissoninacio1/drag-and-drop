const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector("header");
const button = document.querySelector("button");
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

//if the user click on the button, will also click on the input
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

