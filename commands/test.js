const { CommandInteraction, Client } = require("discord.js");

module.exports = {
  name: 'test',
  description: 'Just a simple test command',
  slash: true,
  options: [],
  executeI(client = new Client(), interaction = new CommandInteraction()) {
    if (interaction.member.roles.cache.has('830496065366130709')) {
      client.guilds.cache.get('887122531050479666').invites.create('887122531050479669').then((invite) => {
        interaction.reply(invite.code);
      });
    } else interaction.reply('No perms');
  }
}