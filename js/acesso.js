const passColaborador = '123';
const matColaborador = 'a1b';
const passBuddy = '456';
const matBuddy = 'c2d';
const passGestor = '789';
const matGestor = 'e3f';

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formPassword = document.querySelector('#password').value;
    const formMatricula = document.querySelector('#matricula').value;

    if(passColaborador === formPassword && matColaborador === formMatricula){
        window.location.href = '/html/home.html';
    } else {
        alert('Você errou ou senha ou login!!!')
    }
    
})