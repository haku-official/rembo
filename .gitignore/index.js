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


    // Connection
    clientDiscord.login("NDI5NTg1NzEwOTU0MzE1Nzk4.DaFwBA.jYU-rRZgf13Xef_itOM_nREGAk8");
