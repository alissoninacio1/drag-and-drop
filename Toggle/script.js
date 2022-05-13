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
  body.classList.toggle('body-color') 

}

