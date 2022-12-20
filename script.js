const container = document.querySelector('#container');
const sizeSelector = document.querySelector('#sizeSelector');

let size = 16;

sizeSelector.addEventListener('click', () => {
    removeAllChildNodes(container);
    
    do {
        size = prompt("Please input the side length of your grid.")
    } while (size > 100);
   
    gridGenerator(size);
});

function gridGenerator(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('item');
        container.appendChild(div);
    };
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

onmouseover = (event) => {
    if (event.target.classList.contains('item')) {
        event.target.classList.add('hover');
    }    
};