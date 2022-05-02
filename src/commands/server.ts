import { MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';
import { convertMsToHM } from '../time';

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function toTime(date) {
    return padTo2Digits(date.getHours()) + ':' + padTo2Digits(date.getMinutes());
}

export default {
    category: 'Utility',
    description: 'Tells Genshin Impact Server Status',

    slash: 'both',

    callback: ({ message, text }) => {
        // GMT + 7 - Current Local Time
        const local = new Date();


        // Date object
        const asia = new Date(local.getTime() + 1 * 60 * 60 * 1000);
        const sar = new Date(local.getTime() + 1 * 60 * 60 * 1000);
        const eu = new Date(local.getTime() - 6 * 60 * 60 * 1000);
        const na = new Date(local.getTime() - 12 * 60 * 60 * 1000);

        // Time string
        const asiaTime = "```" + toTime(asia) + "```\n• Server Reset in _h _mins";
        const sarTime = "```" + toTime(sar) + "```\n• Server Reset in _h _mins";
        const euTime = "```" + toTime(eu) + "```\n• Server Reset in _h _mins";
        const naTime = "```" + toTime(na) + "```\n• Server Reset in _h _mins";



        const embed = new MessageEmbed()
            .setColor("#05d86e")
            .setAuthor("Server Status")
            .setFooter("Realtime update editing WIP")
            .setDescription("Genshin Impact Server Time")
            .addFields([
                {
                    name: "ASIA",
                    value: asiaTime,
                },
                {
                    name: "EU",
                    value: euTime,
                },
                {
                    name: "NA",
                    value: naTime,
                },
                {
                    name: "SAR",
                    value: sarTime,
                },

            ])
        return embed
    }

} as ICommand