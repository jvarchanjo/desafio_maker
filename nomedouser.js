const name = sessionStorage.getItem('name');
const frase = `Seja bem vindo, ${name}!`
document.getElementById('name').innerHTML = frase;