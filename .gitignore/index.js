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

clientDiscord.on('guildMemberAdd', member => {
    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL
            },
            title: 'Nouvel arrivant',
            fields: [{
                name: 'Bienvenue ${member} sur le serveur Majiyusekai',
                value: 'Je te conseille, avant de commencer ton aventure, de faire un tour dans le salon #règle.',
            },
            {
                name: 'Bonne continuation'
            }]

        }
    }


    // Connection
    clientDiscord.login("NDI5NTg1NzEwOTU0MzE1Nzk4.DaOhqw.ldt8djWcTW7bvfQYVC4X3cJ2J7g");
