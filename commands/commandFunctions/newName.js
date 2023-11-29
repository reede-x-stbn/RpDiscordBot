const clc = require("cli-color");
const Discord = require('discord.js');

function newName(data){

    // on initialise les données
    const error  = data.error;
    const arguments = data.arguments;
    let returning = "";

    console.log(error)
    /**
     * ici c'est la fonction qui est chargée de faire
     * ce que la commande fait. normalement, la commande
     * et ses arguments sont correctement configurés
     * pour faire ce dont on a besoin, avec le returning
     * qui renvoie au fichier index.js l'indication de ce
     * qu'il doit faire
     */

    if(error){
        returning = `il y a une erreur dans votre nom :/`
    }else{
        returning = `Bonjour ${arguments[0]}, me voilà enchanté de faire votre connaissance`;
    }

    return returning

}


module.exports = {
    newName: newName
};