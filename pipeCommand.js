const clc = require("cli-color");

function pipeCommand(input, prefix, channelName){

    // traitement du contenu du message
    const message = input.content;
    const commande = message.substr(prefix.length).split(" ")[0]
    const arguments = message.substr(prefix.length).substr(commande.length + 1).split(" ")

    //déclaration de variables
    const INVALID = [];
    let errors = "";
    let returning = "";

    console.log(clc.blue(commande))
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] === ""){
            console.log(clc.red(`argument n°${i} : INVALIDE`))
            INVALID.push([i])
            errors = errors + `${i}, `
            console.log(errors)
        }else{
            console.log(clc.green(`argument n°${i} : ${arguments[i]}`))
        }
    }

    if(INVALID.length > 1){
        returning = `ERREUR : arguments n° : ${errors}`
    }else{
        returning = `tout est bon :)`
    }

    return returning
}


module.exports = {
    pipeCommand: pipeCommand
};