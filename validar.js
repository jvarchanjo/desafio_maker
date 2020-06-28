function validar(){
    const name = document.getElementById('nomeuser').value;
    console.log(name);

    if(!name){
        alert('Preencha o campo nome');
    } else{
        sessionStorage.setItem('nomeuser', name);
        window.location.replace('paginas.html');
    }
};