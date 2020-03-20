function createGrid(size){
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++){
        let div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
}

function setSize(){
    size = prompt('I only make squares, how many blocks across or down?');
    let filled = document.querySelectorAll('.fill');
    console.log(filled.length)
    for (let x = 0; x < filled.length; x++){
        let changeFill = document.querySelector('.fill')
        changeFill.classList.replace('fill', 'cell');
    }
    createGrid(size);
    }

function changeColor(){
    this.classList.replace('cell', 'fill')
}

let btns = document.querySelectorAll('button');
btns.forEach( button => button.addEventListener('click', setSize))


