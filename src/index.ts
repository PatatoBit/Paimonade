import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import configJson from '../config.json'

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

// Sync commands
const synchronizeSlashCommands = require('discord-sync-commands');
synchronizeSlashCommands(client, [
  {
    name: 'fifty',
    description: 'Take your chance to 50/50'
  },
  {
    name: 'help',
    description: 'List all the available commands',
  },
  {
    name: 'ping',
    description: 'Replies with pong',
  },
  {
    name: 'resin',
    description: 'Calculate time until your resin is full'
  },
  {
    name: 'server',
    description: 'Tells Genshin Impact Server Status'
  },
  {
    name: 'status',
    description: 'Updates the status for the bot'
  }
], {
  debug: true,
});


client.on('ready', () => {

  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
    // Allow importing of .ts files if you are using ts-node
    typeScript: true,
    botOwners: '779322127454306325'
  })

})

client.login(configJson.token)