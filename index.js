const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN, PREFIX } = require("./config.json"); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(TOKEN);