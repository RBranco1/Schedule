const banco = require("../banco");
const stages = require("../stages");

function execute(msg, user) {
    if(msg == "*"){
        banco.db[user].stage = 0;
        return["retornando"]
    }

    if(msg == "#"){
        banco.db[user].stage = 4;
        return stages.step[4].obj.execute(user, "");
    }

    return ["Certo! Uma mensagem sera anexada na agenda como: \n" + `${msg}`, "```Para confirmar a mensagem digite # se quiser mandar outra digite * ```" ]
}

exports.execute = execute;