const banco = require("../banco")

function execute(user,msg) {
    banco.db[user].stage = 0;
    return ["Obrigado pela conversa! Se quiser saber mais sobre mim acesse esse link: \n https://github.com/RBranco1/Schedule "]
}