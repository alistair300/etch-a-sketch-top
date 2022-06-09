const output = document.getElementById('output');
const btn = document.getElementById('new-btn');

function newSketch() {
  const size = prompt('Enter a number between 1 and 100');
  if (size >= 1 && size <= 100) {
    output.innerHTML = '';
    createGrid(size, size);
  } else {
    alert('PLease enter a number between 1 and 100');
  }
}

function createGrid(rows, cols) {
  const boxWIdth = output.clientWidth;
  const itemSize = boxWIdth / cols;

  output.style.setProperty('--grid-col', cols);
  output.style.setProperty('--grid-row', rows);

  for (let i = 0; i < rows * cols; i++) {
    const item = document.createElement('div');
    item.style.width = `${itemSize}px`;
    item.style.height = `${itemSize}px`;
    output.appendChild(item).className = 'grid-item';
  }

  changeBg(output);
}

function changeBg(e) {
  e.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid-item')) {
      e.target.style.opacity = '0';
    }
  });

  e.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('grid-item')) {
      e.target.style.opacity = '1';
    }
  });
}

btn.addEventListener('click', newSketch);
newSketch();
