module.exports = {
	execute(client) {
    const videoOnlyCh = client.channels.cache.get('831347288710316032');
    const generalCh = client.channels.cache.get('830495073430929472');
    videoOnlyCh.members.forEach(m => {
      if (!m.voice.selfVideo && !m.user.bot) {
        m.voice.setChannel(generalCh, 'Video not enabled in the video only channel');
      }
    });
    client.guilds.cache.get('830495072876494879').members.cache.forEach((member) => {
      if (member.voice.channel != null) {
        if (!member.roles.cache.has('859270541713211422')) {
          const role = client.guilds.cache.get('830495072876494879').roles.cache.get('859270541713211422');
          member.roles.add(role);
        }
      } else if (member.roles.cache.has('859270541713211422')) {
        const role = client.guilds.cache.get('830495072876494879').roles.cache.get('859270541713211422');
        member.roles.remove(role);
      }
    });
  }
};