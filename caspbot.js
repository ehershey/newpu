#!/usr/bin/env node
var irc = require('irc');
var config = require('./config');

var chans   = config.chans.split("/, */");
var server  = config.server;
var botName = config.botName;
var friends = config.friends.split(/, */);
var master  = config.master.toLowerCase();

// lowercase all friend nicks
// 
friends.forEach(function(entry, index, aref) { aref[index] = entry.toLowerCase() })


var bot = new irc.Client(server,botName, {
  channels: chans
});

var handlers = require('handlers');

handlers.init({ bot: bot });

var eventname;

for(eventname in handlers.handlersByEventname) {
    var handler = handlers.handlersByEventname[eventname];
    console.log('eventname: ');
    console.log(eventname);
    console.log('handler: ');
    console.log(handler);
    bot.addListener(eventname, handler);
}


