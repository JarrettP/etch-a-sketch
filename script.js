const container = document.getElementById('container');

let size = 10

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for (let i = 0; i < (size ** size); i++) {
    const div = document.createElement('div');
    div.classList.add('item');
    container.appendChild(div);
}

const square = container.querySelectorAll('div.item');

square.forEach(() => {
    onmouseover = (event) => {
        event.target.classList.add('hover');
    };
});


// container.onmouseout = (event) => {
//     event.target.classList.remove('hover');
// };


// NEED TO FIX ALL ELEMENTS ADDING .hover CLASS.
// I ONLY WANT THE SQUARES TO DO THAT.