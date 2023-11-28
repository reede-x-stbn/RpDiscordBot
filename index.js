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
    const message = msg.content.toLowerCase() // lowercase the user message
    const channel = msg.channel.name; // set the channel name
    let reply = ""; // set the reply variable

    function messageSent(reply, channel) {

        /*
            on log le nom du gars qui a envoyé un nouveau message,
            on log le contenu, puis on log le résultat (ce qu'on a
            fait / envoyé a des fins de debug)
         */

        console.log(clc.green(`\nNouveau message de : ${msg.author.username}\n  Contenu : ${message}`))

        if(reply === "itsMe"){
            console.log(clc.green(' C\'est bon, c\'est moi! :D'));
        }else if(reply === "nothingToDo"){
            console.log(clc.green('  Résultat : rien du tout :)'))
        }else if(reply !== null){
            console.log(clc.green(`  Résultat :\n    J'ai envoyé : ${reply}\n    Dans le salon : #${channel}`))
        }else{
            console.log(clc.red(`\tPas de message :( JE SUIS TOUT BUGGED (╥﹏╥)`))
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
                case "test":
                    reply = "test is ok"
                    messageSent(reply, channel)
                    msg.reply(reply)
                    break;
                case "nullTest":
                    reply = ""
                    messageSent(reply, channel)
                    msg.reply(reply)
                    break;
                default:
                    messageSent("nothingToDo", channel)
            }
            break;
    }
});

client.login(process.env.CLIENT_TOKEN).then(); //login bot using token