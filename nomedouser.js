const name = sessionStorage.getItem('nomeuser');
const frase = `Seja bem vindo, ${name}!`
document.getElementById('nomeuser').innerHTML = frase;