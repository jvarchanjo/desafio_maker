const name = sessionStorage.getItem('nomeuser');
const frase = `Seja bem vindo, ${name}! <br> Escolha qual sala deseja saber mais informações.`
document.getElementById('nome').innerHTML = frase;