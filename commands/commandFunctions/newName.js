const clc = require("cli-color");
const Discord = require('discord.js');
const fs = require('fs');

function newName(data){

    // on initialise les données
    const error  = data.error;
    const prefix = data.prefix;
    const name = data.arguments[0];
    let returning = "";


    /**
     * ici c'est la fonction qui est chargée de faire
     * ce que la commande fait. normalement, la commande
     * et ses arguments sont correctement configurés
     * pour faire ce dont on a besoin, avec le returning
     * qui renvoie au fichier index.js l'indication de ce
     * qu'il doit faire
     */

    if(error === 1){
        returning = `vous avez rentré un mauvais nom, probablement un espace en trop entre la commande et le nom (⊙.☉)7`
    }else if(data.arguments.length > 1){
        returning = `vous avez entré trop de noms ლ(｀ー´ლ)`
    }else if(name === ""){
        returning = `Vous n'avez pas entré de nom, essayez : ${prefix}NewName Michel (ง'̀-'́)ง`
    }else{
        returning = `Bonjour ${name}, me voilà enchanté de faire votre connaissance ☜(⌒▽⌒)☞`;

        data.dataFromJson.table.push({
            "name" : name
        })

        fs.writeFile("data.json", JSON.stringify(newName), (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
                console.log("The written has the following contents:");
                console.log(fs.readFileSync("data.json", "utf8"));
            }
        });
    }

    return returning

}


module.exports = {
    newName: newName
};