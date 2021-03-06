module.exports = {
    aliases: ["karesz"],
    run: ({message, args, text, client, prefix, instance}) => {
        const config = require("../../config.json");
        const cmdlog = require("../../features/commandLog.js");

        const ownerPFP = client.users.cache
            .find(user => user.id == config.owner.id)
            .displayAvatarURL({format: "png", dynamic: true});

        const embed = {
            color: "BLURPLE",
            title: "Karesz",
            author: {
                name: "Karesz by Beni#7999",
                // eslint-disable-next-line camelcase
                icon_url: ownerPFP,
            },
            description: "**Command**\n*Usage*",
            thumbnail: {url: config.karesz.pfp},

            fields: [
                // {name: 'Command name', value: 'usage\n\n'},
                {name: "ping", value: "ping"},
                {name: "Clear", value: "clear <amount>"},
                {name: "Poll", value: "poll <message>"},
                {name: "Kill", value: "kill <@someone>"},
                {name: "Orbi", value: "orbi"},
                {name: "move", value: "move [@someone] <channel>"},
                {name: "brazil", value: "brazil [@someone] *or* brazil all"},
                {name: "snake", value: "snake"},
                {name: "op", value: "op <@someone>"},
                {name: "deop", value: "deop <@someone>"},
                {name: "Profilepic", value: "pfp [@someone]"},
                {name: "Serverinfo", value: "info"},
            ],
            timestamp: new Date(),
            footer: {
                text: message.author.tag,
            },
        };
        message.channel.send({embed: embed});

        cmdlog.Log(client, message);
    },
};
