var config = {

  chans  : "#telerama", 
  server : "irc.slashnet.org",
  botName: "pu",
  friends: "ryan1, gnome, thejesus, cygnus, vertigo, fthnchs",
  master : "thejesus",
  modules_to_reload: [ "handlers", "commands", "config" ],
  module_reload_interval_ms: 2000,
  COMMAND_DELIMITER: ".",
}

module.exports = config;
