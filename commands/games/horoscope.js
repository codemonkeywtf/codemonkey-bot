const Chariot = require('chariot.js');
const fetch = require('node-fetch');
const signs = ['aquarius', 'aries', 'capricorn', 'cancer', 'gemini', 'leo', 'libra', 'pisces', 'sagittarius', 'scorpio', 'taurus', 'virgo'];

class Horoscope extends Chariot.Command {
  constructor() {
    super();

    this.name = 'horoscope';
    this.aliases = [];
    this.allowDMs = false;
    this.cooldown = 30;
    this.help = {
      message: 'Returns your horoscope for today.',
      usage: 'horoscope <zodiac sign>',
      example: ['available signs: aquarius, aries, capricorn, cancer, gemini, leo, libra, pisces, sagittarius, scorpio, taurus, virgo'],
      inline: true,
      visible: true
    }
  }

  async getHoroscope(sign){
    let data = await fetch(`https://horoscopeapi.netlify.app/.netlify/functions/horoscope?sign=${sign}`);
    let horoscope = await data.json();
    return horoscope;
  }

  async runPreconditions(message, args, chariot, next) {
    if (signs.includes(args[0])){
      console.log(args[0])
      next();
    } else {
      return message.channel.createMessage(`Only valid zodiac: ${signs}`);
    }
  }

  async execute(message, args, chariot) {
    let {sign, description, mood, color, date} = await this.getHoroscope(args[0]);
    message.channel.createEmbed(new Chariot.RichEmbed()
      .setColor('#adebad')
      .setTitle(`${sign.name} ${sign.start} to ${sign.end}`)
      .setDescription(`${sign.name} here is your horoscope for ${date}.`)
      .addField('Reading: ', `${description}`, true)
      .addField('Mood:', `${mood}`, false)
      .addField('Color:', `${color}`, false))
  }
}

module.exports = new Horoscope();
