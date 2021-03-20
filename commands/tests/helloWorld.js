const Chariot = require('chariot.js');

class HelloWorld extends Chariot.Command {
    constructor() {
        super(); 

        this.name = 'helloworld';
        this.aliases = ['hworld'];
        this.allowDMs = true;
        this.cooldown = 1;
        this.help = {
            message: 'Returns Hello World message.',
            usage: 'prefix helloworld',
            example: ['?helloworld'],
            inline: true,
            visible: true
        }
    }

    /**
     * Precondition testing method. This method will run BEFORE the main command logic.
     * Once every test passed, next() MUST be called, in order to run the main command logic!
     * @param {object} message An Eris.Message object emitted from Eris
     * @param {string[]} args An array containing all provided arguments
     * @param {object} chariot The main bot client.
     * @param {Function} next Marking testing as done, invoking the main command executor
     */
    async runPreconditions(message, args, chariot, next) {
        next();
    }

    /**
     * Main method running after passing preconditions
     * @param {object} message An Eris.Message object emitted from Eris
     * @param {string[]} args An array containing all provided arguments
     * @param {object} chariot The main bot client. 
     */
    async execute(message, args, chariot) {
      message.channel.createEmbed(new Chariot.RichEmbed()
      .setColor('#adebad')
      .setTitle('Hello World command')
      .setDescription('This command returns this RichEmbed object with ?helloworld command')
      .setAuthor('Runned by: '+message.author.username)
      .setTimestamp(new Date())
      );
    }
}

module.exports = new HelloWorld();
