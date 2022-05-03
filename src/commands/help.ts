import { ICommand } from 'wokcommands';
import { convertMsToHM } from '../time';


export default {
    category: "Utility",
    description: "List all the available commands",

    slash: 'both', // Create both a slash and legacy command


    callback: ({ args }) => {
        const commands = "**/resin <resin>** - Calculate when your resin will be full\n**/server** - Tells Genshin Server Time and Daiy Reset\n/**fifty** - 50/50 chance"

        return commands;
    }

} as ICommand;