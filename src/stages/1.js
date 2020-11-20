const opcoes = require("../opcoes");
const banco = require("../banco");

function execute(user, msg){
    if(msg == "*"){
        banco.db[user].stage = 0;
        return["retornando"]
    }

    if(msg == "#"){
        banco.db[user].stage = 2;
        return ["Muito bem! Aguarde um instante enquanto processo o pedido, ok?"]
    }
    if(!opcoes.menu[msg]){
        return ["Desculpe, parece que o codigo esta errado, tente novamente", 
        ```Digite # para prosseguir ou * para fazer uma outra pergunta ```]
    };

    banco.db[user].itens.push(opcoes.menu[msg]);

    return ["Entendido! " `${opcoes.menu[msg]}`,
    ```Digite # para prosseguir ou * para fazer uma outra pergunta ```]
}


exports.execute = execute;