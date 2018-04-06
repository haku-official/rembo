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

newFunction();

clientDiscord.on("message", message => {
    if (message.content[0] === PREFIX) {
        if (message.content == "RAINBOWROLE") {
            let role = message.guild.roles.get("304888807516405761");
            var colorchangeInt3 = setInterval(colorchange3, 1000)
            message.server.members.get("name", "Super").addRole(role).catch(console.error);
            
            }
        }
    })
})



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
