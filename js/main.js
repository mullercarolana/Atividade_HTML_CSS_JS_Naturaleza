const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome: Insira no mínimo 3 caracteres.'
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
    }
})

email.addEventListener('keyup', () => {
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf(".") - email.value.indexOf("@") == 1) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'E-mail: Insira um e-mail válido.'
    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-mail'
    }
})

telefone.addEventListener('keyup', () => {
    if (telefone.value.length < 11) {
        labelTelefone.setAttribute('style', 'color: red')
        labelTelefone.innerHTML = 'Telefone: Insira um telefone válido.'
    } else {
        labelTelefone.setAttribute('style', 'color: green')
        labelTelefone.innerHTML = 'Telefone'
    }
})

function cadastrar(){
    if(validNome || validEmail || validTelefone) {

    } else {
        alert('Insira os campos corretamente!')
    }
}
