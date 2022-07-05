
let container = document.querySelector('.container');
let numberButton = document.querySelector('#numberbutton');

const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#3715e6";

//for calculate the width and height of the items
const CONTAINER_WIDTH = container.getBoundingClientRect().width;
const CONTAINER_HEIGHT = container.getBoundingClientRect().height;

// create a table for the game
function createGrid(numberOfItems){

    for (let i = 0; i < numberOfItems*numberOfItems; i++) {
        let item = document.createElement('div');

        item.setAttribute(
            'style', 
                `width: ${CONTAINER_WIDTH / numberOfItems}px;
                 height: ${CONTAINER_HEIGHT/numberOfItems}px;
        `);

        item.classList.add('item');
        container.appendChild(item);
    }
    
    // modify the grid system
    container.setAttribute(
        'style',
            `grid-template-columns: repeat(${numberOfItems}, auto);
             grid-template-rows: repeat(${numberOfItems}, auto);
    `);
};

// make elements colorable

function colorItems(numberOfItems){

    createGrid(numberOfItems);
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.background = `${randomColor()}`;
        });
    });
}

// get the number of the squares from the user
numberButton.addEventListener('click', () => {

    let squareNumber = pargeInt(prompt("New grid size: "));
    while(squareNumber > 100) squareNumber = prompt("Too large! Max 100! New grid size: ");
    //clear container
    while(container.firstChild) container.removeChild(container.firstChild);
    colorItems(squareNumber);
});

// random color for the squares this is optional
function randomColor(){
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#"+randomColor;
}

window.onload = () => {
    colorItems(DEFAULT_SIZE);
}

