const formulario = document.querySelector('form'); //Recupera o form(formulário)
const nome = document.querySelector('#nome');//Recupera a classe nome
const sobrenome = document.querySelector('#sobrenome');//Pega o sobrenome
const login = document.querySelector('#login');//Login
const senha = document.querySelector('#senha');//Senha
const confirmaSenha = document.querySelector('#confirma-senha');//Confirma a senha

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();//Impede o envio dos dados.

    //Entra na condição de validação.
    if(senha.value!== confirmaSenha.value){
        alert('As senha não coincidem!');
        return;
    }
    const usuario = {//Definição de um objeto usuário.
        nome: nome.value,
        sobrenome: sobrenome.value, 
        login: login.value,
        senha: senha.value

    };

    //Armazena no navegador Indexed DB
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
    
    
    alert('Cadastro realizado com sucesso!');


}); //Fim de instrução