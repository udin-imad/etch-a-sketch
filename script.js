const container = document.querySelector('#container');
const sizeButtons = document.querySelectorAll('.grid-size');
const colorsButton = document.querySelectorAll('.color');
const slider = document.querySelector('#my-range');

let gridSize = 16;
let colorChoice = 'black';
let darknessLevel = slider.value;

function createGrid(size) {
  container.setAttribute('style', 
  `grid-template-columns:repeat(${size}, 1fr); 
  grid-template-rows:repeat(${size}, 1fr)`
  );
  
  for (let i = 0; i < size*size; i++ ) {
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    container.appendChild(grid);
  };

  const grids = document.querySelectorAll('#grid');
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      if (colorChoice === 'black') {
        grid.style.backgroundColor = `rgb(${darknessLevel}, ${darknessLevel}, ${darknessLevel})`
      } else {
        grid.style.backgroundColor = `rgb(
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)}
        )`;
      }
    });
  });
};

function removeGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  };
};

sizeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    removeGrid(container);
    gridSize = parseInt(btn.id);
    createGrid(gridSize);
  });
});

colorsButton.forEach((color) => {
  color.addEventListener('click', () => {
    colorChoice = color.id;
  });
});

slider.oninput = function() {
  darknessLevel = parseInt(this.value);
};

createGrid(gridSize);