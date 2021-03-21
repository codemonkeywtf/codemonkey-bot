const Chariot = require('chariot.js');
const fetch = require('node-fetch');

class Chuck extends Chariot.Command {
  constructor() {
    super();

    this.categories = [];
    this.name = 'chuck';
    this.aliases = ['norris'];
    this.allowDMs = false;
    this.cooldown = 5;
    this.help = {
      message: 'Returns a random Chuck Norris joke.',
      usage: 'chuck',
      example: [],
      inline: true,
      visible: true,
    };
  }

  async getCategories() {
    if (this.categories.length) {
      return this.categories;
    }
    const data = await fetch('https://api.chucknorris.io/jokes/categories');
    this.categories = await data.json();
    return this.categories;
  }

  async fetchJoke(category) {
    const data = await fetch(
      `https://api.chucknorris.io/jokes/random${
        category ? `?category=${category}` : ''
      }`
    );
    return (await data.json()).value;
  }

  async runPreconditions(message, args, chariot, next) {
    const categories = await this.getCategories();
    if (args.length === 0 || (args.length && categories.includes(args[0]))) {
      console.log(args[0]);
      next();
    } else {
      return message.channel.createMessage(
        `Enter a valid category: [${categories}]`
      );
    }
  }

  async execute(message, args, chariot) {
    let description;
    try {
      const category = args.length && args[0];
      description = await this.fetchJoke(category);
    } catch (error) {
      description = 'Fetching Chuck Norris Joke failed';
    }

    message.channel.createEmbed(
      new Chariot.RichEmbed()
        .setColor('#adebad')
        .setTitle(`Chuck Norris Joke`)
        .setDescription(`${description}`)
    );
  }
}

module.exports = new Chuck();
