var VERSION = "0.0.3";

exports.handlers = {version: function(bot,from,to,message,argv) { console.log('version command!'); bot.say(to,"version " + VERSION) } };
