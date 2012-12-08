#!/usr/bin/env node
'use strict';
var irc = require('irc');
var config = require('./config');

var chans   = config.chans.split("/, */");
var server  = config.server;
var botName = config.botName;
var friends = config.friends.split(/, */);
var master  = config.master.toLowerCase();

var version = "0.1";

// lowercase all friend nicks
// 
friends.forEach(function(entry, index, aref) { aref[index] = entry.toLowerCase() })

setInterval(function() { config.modules_to_reload.forEach(function(module) { console.log('removing module cache for module: ' + module); delete(require.cache[require.resolve(module)]); global[module] = require(module); }); }, config.module_reload_interval_ms);

var bot = new irc.Client(server,botName, {
  channels: chans
});


var handlers = require('handlers');

var eventname;

for(eventname in handlers.handlersByEventname) {
    var handler = handlers.handlersByEventname[eventname];
    console.log('eventname: ');
    console.log(eventname);
    console.log('handler: ');
    console.log(handler);
    bot.addListener(eventname, function() { handler = require('handlers').handlersByEventname[eventname]; var args = arguments; console.log('length 1: ' + args.length); Array.prototype.unshift.call(args,bot); console.log('length 2: ' + args.length); handler.apply(null,args); });
}


