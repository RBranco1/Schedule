const opcoes = require("../cardapio");

function execute(user, msg){
    if(!opcoes.menu[msg]){
        return ["Desculpe, parece que o codigo esta errado, tente novamente", 
        ```Digite # para prosseguir ou * para fazer uma outra pergunta ```]
    }
    return ["digite um dos códigos para prosseguir :)",
    ```Digite # para prosseguir ou * para fazer uma outra pergunta ```]
}

exports.execute = execute;