const container = document.getElementById('container');

container.style.gridTemplateColumns = "epeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('item');
    container.appendChild(div);
}

container.onmouseover = (event) => {
    event.target.classList.add('hover');
};

// container.onmouseout = (event) => {
//     event.target.classList.remove('hover');
// };