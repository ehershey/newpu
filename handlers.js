var handlers = {};

var config = require('config');
var commands = require('commands');

console.log('handlers.js loading');

var init_options;
var command; 
var argv;

handlers.handlersByEventname = {
  join: function (bot,channel, who) {
    who = who.toLowerCase();
    console.log(who);
    console.log(config.friends.indexOf(who));
    console.log(config.friends);
    if(config.friends.indexOf(who) >=0){
      init_options.bot.say(master,who + " joined "+channel); 
    } 
  },
  message: function (bot,from, to, message) {
             // console.log('bot:'); console.log(bot); 
             console.log('from:'); console.log(from); 
             console.log('to:'); console.log(to); 
             console.log('message:'); console.log(message); 
    if(message && message.indexOf ) {
      console.log('message.indexOf(config.COMMAND_DELIMITER):'); console.log(message.indexOf(config.COMMAND_DELIMITER)); 
      if(message.indexOf(config.COMMAND_DELIMITER) == 0) {
        argv = message.substring(1).split(' ').filter(String);
        command = argv[0];
        if(command_handler = require('commands').handlers[command])
        {
          command_handler.apply(null,[bot,from,to,message,argv]);
        }
      }
    }
  }

}
handlers.eventnames = Object.keys(handlers.handlersByEventname);

module.exports = handlers;
