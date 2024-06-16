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
const match = document.getElementById('match');
const btRetry = document.createElement('button');
const scoreValue = document.getElementById('score--value');
let score = localStorage.getItem('score') ? Number(localStorage.getItem('score')) : 0;
scoreValue.textContent = score;
btRetry.innerHTML = 'PLAY AGAIN';
btRetry.classList.add('button--retry');

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
        score = 0;
        scoreValue.textContent = score;
        localStorage.setItem('score', score);
    } else if (cpOption == scissor) {
        result.textContent = 'DRAW';
    } else {
        result.textContent = 'YOU WIN';
        score++;
        localStorage.setItem('score', score);
        scoreValue.textContent = score;
    }
    match.appendChild(btRetry);
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
        score = 0;
        scoreValue.textContent = score;
        localStorage.setItem('score', score);
    } else if (cpOption == paper) {
        result.textContent = 'DRAW';
    } else {
        result.textContent = 'YOU WIN';
        score++;
        localStorage.setItem('score', score);
        scoreValue.textContent = score;
    }
    match.appendChild(btRetry);
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
        score = 0;
        scoreValue.textContent = score;
        localStorage.setItem('score', score);
    } else if (cpOption == rock) {
        result.textContent = 'DRAW';
    } else {
        result.textContent = 'YOU WIN';
        score++;
        localStorage.setItem('score', score);
        scoreValue.textContent = score;
    }
    match.appendChild(btRetry);
});

btRetry.addEventListener('click', function() {
    window.location.reload();
});