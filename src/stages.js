var stages = {
    0:{
        descricao:"Boas Vindas",
        obj: require("./stages/0")
    },
    1:{
        descricao:"Cadastro",
        obj: require("./stages/1")
    },
    2:{
        descricao:"Resumo",
        obj: "arquivo2.js"
    },
    3:{
        descricao:"Perguntas",
        obj: "arquivo3.js"
    },
    4:{
        descricao:"Encerramento",
        obj: "arquivo4.js"
    },
}

exports.step = stages;