const container = document.getElementById('container');

let size = 100

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('item');
    container.appendChild(div);
}

const square = container.querySelectorAll('div.item');


onmouseover = (event) => {
    if (event.target.classList.contains('item')) {
        event.target.classList.add('hover');
    }    
};


// container.onmouseout = (event) => {
//     event.target.classList.remove('hover');
// };