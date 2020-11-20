// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const banco = require("./banco");
const stages = require("./stages");

/* let resp = stages.step[getStage("5511984794636@c.us")].obj.execute();
for (let index = 0; index < Array(resp).length; index++) {
    const element = Array(resp)[index];
    console.log(element)
} */


    venom.create().then((client) => start(client));

    function start(client) {
    client.onMessage((message) => {
    if(message.isGroupMsg === false){
    let resp = stages.step[getStage(message.from)].obj.execute(message.from, message.body);
    for (let index = 0; index < Array(resp).length; index++) {
        const element = resp[index];
        
    }
    client.sendText(message.from, 
    
    )}});
  } 
 





function getStage(user){
    return banco.db[user].stage;
}

