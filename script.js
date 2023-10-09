let gridSize = 16;
const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');

const getRandomColorR = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColorG = () => {
  return Math.floor(Math.random() * 255);
}

const getRandomColorB = () => {
  return ;
}

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
      grid.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}
      )`;
    });
  });
};

function removeGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  };
};

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    removeGrid(container);
    gridSize = parseInt(btn.id);
    createGrid(gridSize);
  })
})

createGrid(gridSize)