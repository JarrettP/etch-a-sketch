const container = document.getElementById('container');
const fragment = document.createDocumentFragment();

// Div Grid
//   1 2 3 4
// a x x x x
// b x x x x
// c x x x x
// d x x x x
const squares = [
    "a1",
    "a2",
    "a3",
    "a4",
    "b1",
    "b2",
    "b3",
    "b4",
    "c1",
    "c2",
    "c3",
    "c4",
    "d1",
    "d2",
    "d3",
    "d4"
];

squares.forEach((text) => {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.textContent = text
    fragment.appendChild(div);
});

// for (let i = 0; i < divs.length; i++) {
//     docFrag.appendChild(divs[i]);
// }

container.appendChild(fragment);