const DiscordJS = require('discord.js');
const Commands = require('./../index');

const discord = new DiscordJS.Client();

const client = new Commands.Client(discord);

discord.login(process.env.DISCORD_BOT_TOKEN_DEV);
