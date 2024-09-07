function validar(){
    var n = document.getElementById("nome-completo");
    var cpf = document.getElementById("cpf");
    var num = document.getElementById("cont-numero");
    var email = document.getElementById("cont-email");
    var sen = document.getElementById("cont-senha");
    var che = document.getElementById("val-termos");
    var cpfLimpo = cpf.value.replace(/\D/g, '');
    //var data = document.getElementById("data-nasc");
    //data = new Date()
    if(n.value.trim().length===0){
        window.alert('Preencha o nome corretamente');
        return false;
    }if(cpfLimpo.length !== 11 || isNaN(cpfLimpo)){
            window.alert('CPF invalido. Deve conter apenas 11 digitos.');
            return false;
        }
    if(num.value.length != 11 || isNaN(num.value)){
        window.alert('Número de telefone inválido. Deve conter exatamente 11 dígitos (incluindo o DDD).')
        return false;
    }if(!/@gmail\.com$/.test(email.value)){
        window.alert('O email deve conter apenas gmail.com');
        return false;
    }
    if(!/^[a-zA-Z0-9]{8,}$/.test(sen.value)){
        window.alert('A senha deve ter pelo menos 8 caracteres alfanuméricos.');
        return false;

    }
    if(!che.checked){
        window.alert('Não é possivel prosseguir sem aceitar os termos e condições');
        return false;
        
    }else{
        window.alert('Bem vindo');
        return true;
    }

    
}