const { Command } = require('../../structures/Command');

module.exports = class _Command extends Command {
  constructor(registry) {
    super(registry, {
      id: 'help',
      name: 'Help',
      description: 'Shows a list of commands',
    });
  }

  async run(message) {
    const { author } = message;
    let help = '';
    [...this.registry.commandGroups.values()].forEach((group) => {
      help += `__${typeof group.name === 'string' ? `**${group.name}**` : ''}${typeof group.description === 'string' ? `: ${group.description}` : ''}__\n`;
      [...group.commands.values()].forEach((command) => {
        help += `\`${command.id}\` ${command.description}\n`;
      });
    });
    author.send(help);
  }
};
