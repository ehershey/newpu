var handlers = {};

var config = require('./config');

console.log('handlers.js loading');

var init_options;

handlers.init = function(options) { init_options = options} ;

handlers.handlersByEventname = {
  join: function (channel, who) {
    who = who.toLowerCase();
    console.log(who);
    console.log(config.friends.indexOf(who));
    console.log(config.friends);
    if(config.friends.indexOf(who) >=0){
      init_options.bot.say(master,who + " joined "+channel); 
    } 
  }

}
handlers.eventnames = Object.keys(handlers.handlersByEventname);

module.exports = handlers;
