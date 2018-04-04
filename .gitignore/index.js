/* INCLURE */
const discord = require("discord.js");

/* VARIABLES */
const bot = new discord.Client();
const PREFIX = ">";

/* EVENEMENTS */
var dispatcher;

bot.on("ready", () => {
    console.log("Prêt à travailler !");
});

bot.on("message", message => {
    if (message.content[0] === PREFIX) {
        if (message.content === ">hello") {
            //messages.reply("Yo!");
            message.author.createDM().then(channel => {
                channel.send('test');
            });
        }
    }
});

bot.on("guildMemberAdd", (member) => {
    var chBienvenue = member.guild.channels.find('id', '430789272652480512');
            if (chBienvenue != null) {
                var embed = new Discord.RichEmbed()
                    .setColor("#ff3399")
                    .setTitle("Bienvenue " + member.user.username);
  
  member.user.send(embed);
                member.user.send(welcome);
                chBienvenue.send("m e s s a g e    de   b i e n v e n u e      ici");
    }
})

    bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue' + member.displayName);
    }).catch(console.error);
})

    // Connection
    clientDiscord.login("NDI5NTg1NzEwOTU0MzE1Nzk4.DaFwBA.jYU-rRZgf13Xef_itOM_nREGAk8");
