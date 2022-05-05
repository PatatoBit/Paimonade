import { ICommand } from 'wokcommands'

export default {
  category: 'Testing',
  description: 'Replies with pong', // Required for slash commands

  slash: 'both', // Create both a slash and legacy command

  callback: ({ }) => {
    return "Pong!"
  },
} as ICommand