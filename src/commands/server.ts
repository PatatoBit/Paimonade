import { MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function toTime(date) {
    return padTo2Digits(date.getHours()) + ':' + padTo2Digits(date.getMinutes());
}
function msToNextHour() {
    return 3600000 - new Date().getTime() % 3600000;
}




export default {
    category: 'Utility',
    description: 'Tells Genshin Impact Server Status',

    slash: 'both',

    callback: ({ message, text }) => {
        // GMT + 7 - Current Local Time
        const now = new Date();
        // const local = new Date(now.getTime() + 7 * 60 * 60 * 1000);
        const local = new Date();

        // Server reset 4AM
        // 4AM - server hour & server min
        const reset = new Date(2000, 1, 1, 4, 0, 0, 0);
        let asiaReset
        let sarReset
        let euReset
        let naReset

        // Date object
        const asia = new Date(local.getTime() + 1 * 60 * 60 * 1000);
        const sar = new Date(local.getTime() + 1 * 60 * 60 * 1000);
        const eu = new Date(local.getTime() - 6 * 60 * 60 * 1000);
        const na = new Date(local.getTime() - 12 * 60 * 60 * 1000);

        if (asia.getHours() > reset.getHours()) {
            asiaReset = (reset.getHours() + 12) - (asia.getHours() - 12)
        } else asiaReset = reset.getHours() - asia.getHours()

        if (sar.getHours() > reset.getHours()) {
            sarReset = (reset.getHours() + 12) - (sar.getHours() - 12)
        } else sarReset = reset.getHours() - sar.getHours()

        if (eu.getHours() > reset.getHours()) {
            euReset = (reset.getHours() + 12) - (eu.getHours() - 12)
        } else euReset = reset.getHours() - eu.getHours()

        if (na.getHours() > reset.getHours()) {
            naReset = (reset.getHours() + 12) - (na.getHours() - 12)
        } else naReset = reset.getHours() - na.getHours()


        // Time string
        const asiaTime = "```" + toTime(asia) + "```\n• daily reset in **" + asiaReset + "** hours";
        const sarTime = "```" + toTime(sar) + "```\n• daily reset in **" + sarReset + "** hours";
        const euTime = "```" + toTime(eu) + "```\n• daily reset in **" + euReset + "** hours";
        const naTime = "```" + toTime(na) + "```\n• daily reset in **" + naReset + "** hours";



        const embed = new MessageEmbed()
            .setColor("#05d86e")
            .setAuthor("Server Status")
            .setFooter("Local Pi Time: " + toTime(local))
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