const banco = require("../banco");
const opcoes = require("../opcoes");

function execute(user,msg){
    if (banco.db[user].itens == 1){
        banco.db[user].stage = 0;
        return ["Ok! O Raphael irar mandar mensagens em alguns instantes"]
        
    }
    else if(banco.db[user].itens == 2){
        banco.db[user].stage = 3;
        return ["Por favor, pode insirar o horario que deseja?"]
        
    }
    else if(banco.db[user].itens == 3){
        banco.db[user].stage = 0;
        return ["Só se for agora, ja entro"]
        
    }
    else if(banco.db[user].itens == 4){
        banco.db[user].stage = 3;
        return ["Pode enviar o recado, meu chefe ira ver assim que possivel :)"]
        
    }

}

exports.execute = execute;
