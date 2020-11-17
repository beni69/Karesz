module.exports = {
    aliases: ['vote'],
    run: (message, args, text, client, prefix, instance) => {
        const upvote = message.guild.emojis.cache.find(emoji => emoji.name === 'upvote');
        message.react(upvote);
        setTimeout(() => {
            const downvote = message.guild.emojis.cache.find(emoji => emoji.name === 'downvote');
            message.react(downvote);
        })

        const channel = message.guild.channels.cache.get(config.logChannel)
        channel.send(`<@${message.member.id}> ran: ${message.content}`)
    }
}
