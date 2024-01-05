const clc = require("cli-color");
const Discord = require('discord.js');
const {commandNavigator} = require("./commandNavigator");

function commandFormatter(input, prefix, channelName, jsonDataPath) {

    // traitement du contenu du message
    const message = input.content;
    const commande = message.substr(prefix.length).split(" ")[0]
    const arguments = message.substr(prefix.length).substr(commande.length + 1).split(" ")

    //déclaration de variables
    const INVALID = [];
    let errors = "";
    let results = "";
    let error = 0;

    console.log(clc.blue(`commande : ${commande}`))

    /**
     * SI le nombre d'arguments est exactement égal a 1,
     * et que cet argument est vide, alors il n'y a pas
     * d'argument alors, on ne fait rien, en revanche,
     * si le nombre d'argument est plus élevé, ou si il
     * y a qu'un seul argument, on entre dans le else
     */
    if (arguments.length === 1 && arguments[0] === '') {
    } else {
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] === "") {
                console.log(clc.red(`argument n°${i} : INVALIDE (${arguments[i]})`))
                INVALID.push([i])
                errors = errors + `${i}, `
            } else {
                console.log(clc.green(`argument n°${i} : VALIDE (${arguments[i]})`))
            }
        }
    }

    /**
     * si il y a des arguments invalides, alors on return
     * ERROR, on doit faire un vérificateur qui réagit si
     * cette fonction retourne une erreur, sinon on return
     * la commande sans son préfixe ni ses arguments, ainsi
     * que l'array contenant les arguments
     */

    if (INVALID.length >= 1) {
        error = 1;
    }

    return commandNavigator({commande, arguments, channelName, error, prefix, input, jsonDataPath})
}


module.exports = {
    commandFormatter: commandFormatter
};