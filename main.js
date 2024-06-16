const btRules = document.getElementById('rules--button');
const modalRules = document.getElementById('rules--modal');

btRules.addEventListener('click', function() {
    modalRules.classList.remove('invisible');
    modalRules.classList.add('modal--visible');
});

const btClose = document.getElementById('close--modal');
btClose.addEventListener('click', function() {
    modalRules.classList.remove('modal--visible');
    modalRules.classList.add('invisible');
});

const scissor = document.getElementById('option--scissor');
const paper = document.getElementById('option--paper');
const rock = document.getElementById('option--rock');
const triangle = document.querySelector('.main--triangle');
const userOption = document.getElementById('user--option');
const computerOption = document.getElementById('computer--option');
const options = [scissor, paper, rock];
const cpOption = options[Math.floor(Math.random() * options.length)];
const result = document.getElementById('result');

scissor.addEventListener('click', () => {
    triangle.style.backgroundImage = 'none';
    paper.classList.add('invisible');
    paper.classList.remove('option--border');
    rock.classList.add('invisible');
    rock.classList.remove('option--border');
    userOption.appendChild(scissor);
    computerOption.appendChild(cpOption);
    if (cpOption === scissor) {
        userOption.appendChild(scissor.cloneNode(true));
    }
    cpOption.classList.remove('invisible');
    cpOption.classList.add('option--border');
    if(cpOption == rock) {
        result.textContent = 'YOU LOSE';
    } else if (cpOption == scissor) {
        result.textContent = 'DRAW';
    } else {
        result.textContent = 'YOU WIN';
    }
});

paper.addEventListener('click', () => {
    triangle.style.backgroundImage = 'none';
    scissor.classList.add('invisible');
    scissor.classList.remove('option--border');
    rock.classList.add('invisible');
    rock.classList.remove('option--border');
    userOption.appendChild(paper);
    computerOption.appendChild(cpOption);
    if (cpOption === paper) {
        userOption.appendChild(paper.cloneNode(true));
    }
    cpOption.classList.remove('invisible');
    cpOption.classList.add('option--border');
    if(cpOption == scissor) {
        result.textContent = 'YOU LOSE';
    } else if (cpOption == paper) {
        result.textContent = 'DRAW';
    } else {
        result.textContent = 'YOU WIN';
    }
});

rock.addEventListener('click', () => {
    triangle.style.backgroundImage = 'none';
    scissor.classList.add('invisible');
    scissor.classList.remove('option--border');
    paper.classList.add('invisible');
    paper.classList.remove('option--border');
    userOption.appendChild(rock);
    computerOption.appendChild(cpOption);
    if (cpOption === rock) {
        userOption.appendChild(rock.cloneNode(true));
    }
    cpOption.classList.remove('invisible');
    cpOption.classList.add('option--border');
    if(cpOption == paper) {
        result.textContent = 'YOU LOSE';
    } else if (cpOption == rock) {
        result.textContent = 'DRAW';
    } else {
        result.textContent = 'YOU WIN';
    }
});