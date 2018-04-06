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

function newFunction() {
    const newLocal = clientDiscord.on("message", message => {
        if (message.content[0] === PREFIX) {
            if (message.content === ">entrer") {
                //messages.reply("Yo!");
                var role = message.guild.roles.find("name", "HABITANT");
                member.addRole(role);
            }
        }
    });
}

clientDiscord.on("guildMemberAdd", (member) => {
    var chBienvenue = member.guild.channels.find('id', '430789272652480512');
    if (chBienvenue != null) {
        var embed = new discord.RichEmbed()
            .setColor("#ff3399")
            .setTitle("Bienvenue " + member.user.username);

        member.user.send(embed);
        chBienvenue.send("m e s s a g e    de   b i e n v e n u e      ici");
    }
})
  

// Connection
clientDiscord.login("NDI5NTg1NzEwOTU0MzE1Nzk4.DaY_pQ.BCp9H_ufubFtW4ms7hKAIko5atM");
