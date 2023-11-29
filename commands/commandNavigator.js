const clc = require("cli-color");
const Discord = require('discord.js');
const {newName} = require("./commandFunctions/newName");

function commandNavigator(data) {

    // on initialise les données
    const command = data.commande;
    let returning = "";

    /**
     * on navigue, en fonction de la commande appelée,
     * puis une fois qu'on trouve la bonne, on appelle
     * la fonction contenue dans le fichier du même
     * nom, dans le dossier "commandFunctions"
     * puis on fait ce qu'on a a faire, avec le returning
     * qui renvoie au fichier index.js l'indication de ce
     * qu'il doit faire
     */
    switch (command) {
        case "newName":
            returning = newName(data)
            break;
        default:
            returning = `:/ je ne conais pas la commande : **${command}**`
    }

    return returning

}


module.exports = {
    commandNavigator: commandNavigator
};