import { ICommand } from 'wokcommands';
import { convertMsToHM } from '../time';

export default {
    category: "Utility",
    description: "Calculate time until your resin is full",

    slash: 'both', // Create both a slash and legacy command

    expectedArgs: '<resin>',
    minArgs: 1,
    maxArgs: 1,

    callback: ({ args }) => {
        const resin = parseInt(args[0])

        const hours = Math.floor(((160 - resin) * 8) / 60)
        const mins = ((160 - resin) * 8) % 60

        const now = new Date();
        const thenDate = new Date(now.getTime() + ((160 - resin) * 8) * 60 * 1000).toDateString();
        const thenTime = new Date(now.getTime() + ((160 - resin) * 8) * 60 * 1000).getTime();

        return `Resin full in **${hours}** hours **${mins}** minutes\nTime: **${thenDate}** | **${convertMsToHM(thenTime)}**`;
    }

} as ICommand;