require('dotenv').config();
const Discord = require('discord.js');
const prefix = '|';
const clc = require("cli-color");

const client = new Discord.Client(); //create new client

client.on('ready', () => {
    // dire a la console qu'on est log
    console.log(clc.blue(`\nJe suis réveillé! mon nom : ${client.user.tag}`));
    // const channel = client.channels.cache.get('1159537874711105630');
    // channel.send('bonjour :) Je suis Jarvis, comment puis-je vous aider?');
});

client.on('message', msg => {
    const message = msg.content // set variable `message` that contains message content
    const channel = msg.channel.name; // set the channel name
    let reply = ""; // set the reply variable

    function messageSent(messageType, channel) {

        /*
            on log le nom du gars qui a envoyé un nouveau message,
            on log le contenu, puis on log le résultat (ce qu'on a
            fait / envoyé a des fins de debug)
         */

        console.log(clc.green(`\nNouveau message de : ${msg.author.username}\n  Contenu : ${message}`))

        if(messageType !== null){

        }else{
            console.log(clc.red(`\tPas de message :( JE SUIS TOUT BUGGED (╥﹏╥)`))
        }

        if(messageType === "itsMe"){
            console.log(clc.green(' C\'est bon, c\'est moi! :D'));
        }else if(messageType === "nothingToDo"){
            console.log(clc.green('  Résultat : rien du tout :)'))
        }else if(messageType === "nullTest"){
            console.log(clc.red(`  Pas de message :O JE SUIS TOUT BUGGED (╥﹏╥)`))
        }else if(messageType !== null){
            console.log(clc.green(`  Résultat :\n    J'ai envoyé : ${messageType}\n    Dans le salon : #${channel}`))
        }
    }

    switch (msg.author.bot) {

        /*
            d'abord, on vérifie si c'est pas un message envoyé par
            le bot, auquel cas on ne le traite pas, ensuite si ce
            n'est pas le bot qui a envoyé le message, on traite le
            contenu de ce dernier:
                - on appelle nos fonctions (ou pas)
                - on set la réponse dans la variable reply
                - on appelle la fonction messageSent pour display en console
                - on envoie le message de réponse avec msg.reply()

            par défaut, si le message n'est pas reconnu par le bot
            comme étant une requâte pour lui, on appelle la
            fonction messageSent en mettant nothingToDo en réponse,
            pour qu'il dise en console qu'il a rien a faire.
         */

        case true:
            break;
        case false:
            switch (message) {
                case "bonjour jarvis":
                    messageSent("bonjour", channel)
                    msg.reply(`bojour ${msg.author.username} :) je suis Jarvis, je viens de naître donc je ne peut pas`
                        + `répondre a grand chose, mais j'ai hâte d'en apprendre plus sur le monde :D`)
                    break;
                case "test":
                    messageSent("test", channel)
                    msg.reply("test is ok")
                    break;
                case "nullTest":
                    messageSent("nullTest", channel)
                    break;
                default:
                    messageSent("nothingToDo", channel)
            }
            break;
    }
});

client.login(process.env.CLIENT_TOKEN).then(); //login bot using token