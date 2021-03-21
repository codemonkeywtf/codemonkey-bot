const Chariot = require('chariot.js');
require('dotenv').config()
const TOKEN = process.env.TOKEN

class ChariotTemplate extends Chariot.Client {
  constructor() {
      super(new Chariot.Config(
          TOKEN, 
          {
              prefix: ['!ct', '@mention'],
              guildPrefixes: [
                  { guildID: '698177341586800672', prefix: '?' },
              ],
              defaultHelpCommand: true,
              primaryColor: 'ORANGE',
              owner: [
                  'PUT OWNER ID HERE',
              ],
              excludeDirectories: [
                  'top_secret'
              ]
          },
          {
              messageLimit: 50,
              defaultImageFormat: 'png'
          }
      ));
  }  
}

module.exports = new ChariotTemplate();
