newpu
=====

IRC bot named p`u

Notes
=====

Very much a work in progress.

Updates
=====

Commands will be loaded dynamically so they can be updated without resetting the bot's IRC connection. Here is the planned workflow: 

1) Update code in working directory
2) Test code in working directory (maybe look for IRC connection mock)
3) Commit updates
4) Push updates to github
5) Something (Travis ci? Hosted Jenkins?) performs unit test on pushed codebase
6) Assuming that passes, update live bot code (location tbd)
