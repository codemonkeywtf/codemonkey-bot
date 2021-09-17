# codemonkey-bot

Welcome to codemonkey-bot repository.
Please read DEV notes and follow guidelines on how to use this bot.

This project is currently:

- [x] Under Development
- [ ] Production

Current phase of the project:

- [x] Alpha
- [ ] Beta
- [ ] Testing (Public beta)
- [ ] Production

## DEV notes

- This bot is currently being made with [Chariot.js](https://chariot.js.org/), unopinionated, robust and secure extensible [Eris client](https://abal.moe/Eris/) framework.
- This bot is currently in development and is not intended to be used as production bot on a server!

# How to test or contribute to this bot during development

For smooth testing and developing a discord bot in a team, it is best for each team member to have unique discord bot API key. That way no one will interfere in other developer code or testing while developing the bot simoltaniously.

## Phase 1 - Create discord application

- Log in to [Discord developer portal](https://discord.com/developers/applications)
- In the top right corner click on **New Application** button to create new discord application. You can name it however you want, but for simplicity let's just call it `Monkey Dev bot`
- After you enter your new application, on the left side, in a side menu click on `Bot`
- After that, on the right side click on `Add bot` button
  - It will create a bot and open it
  - In front of you, in the center of the screen you will see a section with a bot Token
  - Click `Copy` and save your token in some temporary .txt file
  - In the same section rename bot to `codemonkey_bot_yourDIscordUsername`
  - Eg: `codemonkey_bot_jbrocket`

### With that, you are done with phase one of creating a bot application. But, do not close that window as you will need to go back to bot settings a little bit more.

## Phase 2 - Fork and clone this bot project

Next step is to fork and clone this project on your device.

- Fork this repository to your own Github
- Clone your newly created fork to your PC
- Open project in your code editor
- In project root create **`.env`** file
  - in env file create TOKEN variable and set its value of a bot token you copied in your temporary txt file
- Inside **`index.js`** file change bot command prefix to a combination of special sign and 2 letters.
  - For example `#jb`

NOTE: Do not push .env file on github repository, but .gitignore file is already set.

## Phase 3 - Invite bot to your private server

- First, join to this discord server: https://discord.gg/BBQNWwdkTn
- Then go back to your discord developer portal
- On your selected app settings (Monkey Dev bot) click on `OAuth2` section
- Scroll down to scopes and select **`bot`** scope
- It will generae invitation link for your bot
- Before you use the link, `BOT PERMISSIONS` section will appear under scopes
- Click on `Administrator` permissions
  - It will add bot permissions to scopes URL
- Copy URL from scopes and paste it in your browser URL (and go to that URl)
- It will promt you to add a bot to the server
  - Select `CodeMonkeyWTF_dev` server and click `Authorize`

If you did everything properly, your bot should be added to `CoodeMonkeyWTF_dev` server, but it will be offline at first. To run it, open your bot project in code editor and in terminal run **`npm run-script nodemon`** command.

After that your bot should be up and running on the server.

#### Should you have any issues or questions, feel free to reach us on our [Discord Server](https://discord.gg/S4UPTe4)

### Contribution guide you can read [here](https://github.com/codemonkeywtf/codemonkey-bot/blob/main/CONTRIBUTE.md).
