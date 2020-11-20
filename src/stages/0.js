const opcoes = require("../opcoes");
const banco = require("../banco");

function execute(user,msg){
    let menu = " *Do que gostaria de tratar?* \n ";

    Object.keys(opcoes.menu).forEach((value) => {
        let element = opcoes.menu[value];
        menu += `${value} - ${element.descricao}`
    })

    banco.db[user].stage = 1;

    return ["Ola! Sou um assistente virtual, para falar com o *Rapha* basta inserir o numero de um dos itens a seguir <@", menu]
}

exports.execute = execute;
