const Chariot = require('chariot.js');
require('dotenv').config()
const TOKEN = process.env.TOKEN

class ChariotTemplate extends Chariot.Client {
  constructor() {
      super(new Chariot.Config(
          TOKEN, 
          {
            prefix: ['!', '@mention'],
            defaultHelpCommand: true,
            primaryColor: 'ORANGE',
            owner: [
              'PUT OWNER ID HERE',
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
