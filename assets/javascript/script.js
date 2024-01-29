const form = document.getElementById('formulario');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const resultado_imc = (peso / (altura*altura)).toFixed(2);

    const valor = document.getElementById('valor');
    
    let descricao = '';

    document.getElementById('informacoes').classList.remove('hidden')

    if (resultado_imc < 18.5){
        descricao = 'Abaixo do peso!'
    } 
    else if(resultado_imc >= 18.5 && resultado_imc <= 24.9){
        descricao = 'Peso ideal!'
    } 
    else {
        descricao = 'Acima do peso!'
    }

    valor.textContent = resultado_imc.replace('.', ',');

    document.getElementById('descricao').textContent = descricao;



});