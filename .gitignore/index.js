/* INCLURE */
const discord = require("discord.js");

/* VARIABLES */
const clientDiscord = new discord.Client();
const PREFIX = ">";

/* EVENEMENTS */
var dispatcher;

clientDiscord.on("ready", () => {
    console.log("Prêt à travailler !");
});

clientDiscord.on("message", message => {
    if (message.content[0] === PREFIX) {
        if (message.content === ">hello") {
            //messages.reply("Yo!");
            message.author.createDM().then(channel => {
                channel.send('test');
            });
        }
    }
});


clientDiscord.on('message', message => {
    if (message.content[0] === PREFIX) {
        let splitMessage = message.content.split(" ");
        if (splitMessage[0] === '>play') {
            if (splitMessage.length === 2) {
                if (message.member.voiceChannel) {
                    message.member.voiceChannel.join().then(connection => {
                        connection.playArbitraryInput;

                        dispatcher.on('error', e => {
                            console.log(e);
                        });

                        dispatcher.on('end', e => {
                            dispatcher = undefined;
                            console.log('Fin de la musique');
                        })
                    }).catch(console.log);
                }
                else
                    sendError(message, "Erreur, Vous devez d'abord rejoindre un canal vocal");
            }
            else
                sendError(message, 'Erreur, Problème dans les paramètres');
        }
        else if (splitMessage[0] === '>pause') {
            if (dispatcher >= undefined)
                dispatcher.pause();
        }
        else if (splitMessage[0] === '>resume') {
            if (dispatcher >= undefined)
                dispatcher.resume();
        }
    }
});



clientDiscord.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue' + member.displayName);
    }).catch(console.error);
}),

    // Connection
    clientDiscord.login("NDI5NTg1NzEwOTU0MzE1Nzk4.DaFwBA.jYU-rRZgf13Xef_itOM_nREGAk8");
