import { ICommand } from 'wokcommands';
import { MessageEmbed } from 'discord.js';

export default {
    category: "Utility",
    description: "Take your chance to 50/50",

    slash: 'both', // Create both a slash and legacy command

    callback: ({ }) => {
        const won = new MessageEmbed()
            .setAuthor("You won the 50/50!")
            .setColor("#23b936")
            .setImage("https://media.discordapp.net/attachments/891657091008315393/970698747803738162/armweed.png")

        const lost = new MessageEmbed()
            .setAuthor({ name: "You lost the 50/50!", url: 'https://www.youtube.com/watch?v=iPsJU4XJ7vs' })
            .setColor("#FF3333")
            .setImage("https://media.discordapp.net/attachments/891657091008315393/970698832306388992/unknown.png")

        if (Math.random() < 0.5) return won
        else return lost
    }

} as ICommand;