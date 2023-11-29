require('dotenv').config();
const Discord = require('discord.js');
const clc = require("cli-color");
const { pipeCommand } = require("./pipeCommand");

const prefix = '|'; // set command prefix
const client = new Discord.Client(); // create new client
let functionResponse = ""; // set function response variable

    client.on('ready', () => {
    // dire a la console qu'on est log
    console.log(clc.blue(`\nJe suis réveillé! mon nom : ${client.user.tag}`));
    // const welcomeChannel = client.channels.cache.get('1159537874711105630');
    // welcomeChannel.send('bonjour :) Je suis Jarvis, comment puis-je vous aider?');
});

client.on('message', input => {
    const message = input.content // set variable `message` that contains message content
    const channelName = input.channel.name; // set the channel name
    const channelId = client.channels.cache.get(input.channel.id.toString()); // set the channel id
    let reply = ""; // set the reply variable

    function messageSent(messageType, channel) {

        /*
            on log le nom du gars qui a envoyé un nouveau message,
            on log le contenu, puis on log le résultat (ce qu'on a
            fait / envoyé a des fins de debug)
         */

        console.log(clc.green(`\nNouveau message de : ${input.author.username}\n  Contenu : ${message}`))

        if(messageType === "itsMe"){
            console.log(clc.green(' C\'est bon, c\'est moi! :D'));
        }else if(messageType === "nothingToDo"){
            console.log(clc.green('  Résultat : rien du tout :)'))
        }else if(messageType === "nullTest"){
            console.log(clc.red(`  Pas de message :O JE SUIS TOUT BUGGED (╥﹏╥)`))
        }else if(messageType === "test prefix"){
            console.log(clc.green('  Résultat: '))
        }
    }

    switch (input.author.bot) {

        /*
            d'abord, on vérifie si c'est pas un message envoyé par
            le bot, auquel cas on ne le traite pas, ensuite si ce
            n'est pas le bot qui a envoyé le message, on traite le
            contenu de ce dernier:

            il faut vérifier si c'est une commande avec le préfixe
            ou pas, dans les deux cas on passe pas ces étapes après
            avoir identifié la commande entrée:
                - on appelle nos fonctions (ou pas)
                - on set la réponse dans la variable reply
                - on appelle la fonction messageSent pour display en console
                - on envoie le message de réponse avec input.reply()

            par défaut, si le message n'est pas reconnu par le bot
            comme étant une requâte pour lui, on appelle la
            fonction messageSent en mettant nothingToDo en réponse,
            pour qu'il dise en console qu'il a rien a faire.
         */

        case true:
            break;
        case false:
            if(message.startsWith(prefix)){
                functionResponse = pipeCommand(input, prefix, channelName);
                input.reply(functionResponse);
            }else{
                switch (message) {
                    case "bonjour jarvis":
                        messageSent("bonjour", channelName);

                        channelId.send(`bojour @${input.author.username} :) je suis Jarvis, je viens de naître donc je ne peut pas`
                            + ` répondre a grand chose, mais j'ai hâte d'en apprendre plus sur le monde :D`
                            + `\nessaye d'écrire "|introduce [tonPrenom]" en remplaçant [tonPrenom] par ton vrai prénom pour que je te connaisse :D`)

                        break;
                    case "test":
                        messageSent("test", channelName)
                        input.reply("test is ok")
                        break;
                    case "nullTest":
                        messageSent("nullTest", channelName)
                        break;
                    default:
                        messageSent("nothingToDo", channelName)
                }
            }
            break;
    }
});

client.login(process.env.CLIENT_TOKEN).then(); //login bot using token