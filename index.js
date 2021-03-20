const Chariot = require('chariot.js');

class ChariotTemplate extends Chariot.Client {
  constructor() {
      super(new Chariot.Config(
          'PUT BOT TOKEN HERE', 
          {
              prefix: ['!ct', '@mention'],
              guildPrefixes: [
                  { guildID: 'PUT GUILD (SERVER) ID HERE', prefix: 'ADD COMMAND PREFIX FOR THAT GUILD HERE' },
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