import { Client } from 'discord.js'
import { ICommand } from 'wokcommands'

const setStatus = (client: Client, status: string) => {
    client.user?.setPresence({
        status: 'online',
        activities: [
            {
                name: status,
            },
        ],
    })
}

export default {
    // Best practice for the built-in help menu
    category: 'Configuration',
    description: 'Updates the status for the bot',

    slash: 'both',
    // We need at least 1 word for the status.
    // maxArgs is -1 by default which means no limit.
    minArgs: 1,
    expectedArgs: '<status>',

    // Make this command owner only.
    // We will set the owner ID(s) in the next code snippet.
    hidden: true,
    ownerOnly: true,

    // This method is invoked only once whenever the command is registered
    init: (client: Client) => {
        // TODO: Load the status from the database
        const status = "Running on Raspberry Pi" // Would come from the database
        setStatus(client, status)
    },

    // This method is invoked anytime the command is ran
    callback: ({ client, text }) => {
        setStatus(client, text)

        return "Status Set!";
    },
} as ICommand