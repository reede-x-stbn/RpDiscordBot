require('dotenv').config();
const Discord = require('discord.js');
const clc = require("cli-color");
const { commandFormatter } = require("./commands/commandFormatter");
const fs = require("fs");

/**
 * token setup :
 *      - process.env.GLOBAL_TOKEN for prod bot,
 *      - process.env.REEDE_TOKEN for reede's bot,
 *      - process.env.STBN_TOKEN for stbn's bot
 */
const token = process.env.STBN_TOKEN

const prefix = '|'; // set command prefix
const client = new Discord.Client(); // create new client
let functionResponse = ""; // set function response variable
const jsonDataPath = {"users": "Data/users.json"}

    client.on('ready', () => {
        console.log(clc.xterm(5)("<<--------------------------------------------------------->>\n"));
        console.log(clc.xterm(5)("    ▄▄▄▄▄ ██   █▄▄▄▄     ▄   ▄█    ▄▄▄▄▄       █▄▄▄▄ █ ▄▄  "));
        console.log(clc.xterm(5)("  ▄▀  █   █ █  █  ▄▀      █  ██   █     ▀▄     █  ▄▀ █   █ "));
        console.log(clc.xterm(8)("      █   █▄▄█ █▀▀▌  █     █ ██ ▄  ▀▀▀▀▄       █▀▀▌  █▀▀▀  "));
        console.log(clc.xterm(8)("   ▄ █    █  █ █  █   █    █ ▐█  ▀▄▄▄▄▀        █  █  █     "));
        console.log(clc.xterm(4)("    ▀        █   █     █  █   ▐                  █    █    "));
        console.log(clc.xterm(4)("            █   ▀       █▐                      ▀      ▀   "));
        console.log(clc.xterm(4)("           ▀            ▐                                  "));
        console.log(clc.xterm(4)("\n<<--------------------------------------------------------->>"));

        console.log(`\nbienvenue ! je suis connecté en tant que : ${client.user.tag}`)


    // const welcomeChannel = client.channels.cache.get('1159537874711105630');
    // welcomeChannel.send('bonjour :) Je suis Jarvis, comment puis-je vous aider?');
});

client.on('message', input => {
    const message = input.content // set variable `message` that contains message content
    const channelName = input.channel.name; // set the channel name
    const channelId = client.channels.cache.get(input.channel.id.toString()); // set the channel id
    let returning = "";

    switch (input.author.bot) {

        /**
         *      d'abord, on vérifie si c'est pas un message envoyé par
         *      le bot, auquel cas on ne le traite pas, ensuite si ce
         *      n'est pas le bot qui a envoyé le message, on traite le
         *      contenu de ce dernier:
         *
         *      il faut vérifier si c'est une commande avec le préfixe
         *      ou pas, dans les deux cas on passe par ces étapes après
         *      avoir identifié la commande entrée:
         *          - on appelle nos fonctions (ou pas)
         *          - on set la réponse dans la variable reply
         *          - on log ce que le robot fait, soit rien, soit répondre au message
         *          - on envoie le message de réponse avec input.reply()
         *
         *      par défaut, si le message n'est pas reconnu par le bot
         *      comme étant une requête pour lui, on log ce qu'il fait,
         *      c'est a dire rien.
         */
        case true:
            break;
        case false:
            if(message.startsWith(prefix)){
                returning = commandFormatter(input, prefix, channelName, jsonDataPath);
                channelId.send(returning)
            }else{
                switch (message) {
                    case "bonjour jarvis":
                        channelId.send(`bojour @${input.author.username} :) je suis Jarvis, je viens de naître donc je ne peut pas`
                            + ` répondre a grand chose, mais j'ai hâte d'en apprendre plus sur le monde :D`
                            + `\nessaye d'écrire "|introduce [tonPrenom]" en remplaçant [tonPrenom] par ton vrai prénom pour que je te connaisse :D`)
                        console.log("j'ai dit bonjour :)")
                        break;
                    case "test":
                        input.reply("test is ok")
                        console.log("test is ok")
                        break;
                    case "nullTest":
                        console.log(clc.red('null'))
                        break;
                    default:
                        console.log(clc.green('rien a faire ¯\\_(ツ)_/¯'))
                }
            }
            break;
    }
});

client.login(token).then();