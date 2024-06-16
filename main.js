const btRules = document.getElementById('rules--button');
const modalRules = document.getElementById('rules--modal');

btRules.addEventListener('click', function() {
    modalRules.classList.remove('modal--invisible');
    modalRules.classList.add('modal--visible');
});

const btClose = document.getElementById('close--modal');
btClose.addEventListener('click', function() {
    modalRules.classList.remove('modal--visible');
    modalRules.classList.add('modal--invisible');
});