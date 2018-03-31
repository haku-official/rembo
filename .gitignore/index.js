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
            message.channel.send("Yo!")
            message.author.createDM().then(channel => {
                channel.send('test');
            });
        }
    }
});



clientDiscord.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue' + member.displayName);
    }).catch(console.error);
}),

// Connection
bot.login(process.env.NDI5NTg1NzEwOTU0MzE1Nzk4.DaFR5w.qtuBWU87q7gTPv5abHumYeMlhnE);
