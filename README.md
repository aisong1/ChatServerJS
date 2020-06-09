# Chat Server 

A simple chat server where users can communicate with other users. Announces when a user enters and leaves, and keeps an updated count of how many users are in the chat.

Built with JavaScript, HTML, CSS, and Heroku. 

The setup code for this project comes from server.js' [chat tutorial](https://serverjs.io/tutorials/chat/); the rest of the code is my own. 

Main differences + improvements:
- Added "user joined" and "user left" announcements.
- Runs on Heroku.
- XSS protection.
- Original color scheme. 

Check it out [here](https://glacial-oasis-25368.herokuapp.com/)!

# Project Status

In progress - fixing bugs. Available as of June 7th, 2020.

Possible future update would be to implement a 'users list' where other users can see who else is in the chat.

# Setup and Installation 

## Running Locally
To get started locally, begin by cloning the repo in a work folder of your choosing.
```shell
$ git clone git@github.com:aisong1/ChatServerJS.git
```
Next, follow server.js' [getting started](https://serverjs.io/tutorials/getting-started/) guide.
Your local server will now be up and running.

Open https://localhost:3000 to check it out!

## Running on Heroku
You can run the project on Heroku if you get bored of chatting with yourself. 

First, make a Heroku [account](https://signup.heroku.com/) and make sure you have Heroku [installed](https://devcenter.heroku.com/articles/heroku-cli).

Next, follow Heroku's [guide](https://devcenter.heroku.com/articles/deploying-nodejs#deploy-your-application-to-heroku) on deploying Node.js apps. 

# Screenshots

Screenshots to come.

# Reflection

I dove into this project having just finished an online course on JavaScript. In light of the ongoing global pandemic, I wanted to build an application that emphasized communication between two parties. Creating a chat server taught me more about JS and a ton about WebSockets and their implementation. It also acted as a refresher for Heroku and version control.

# Licensing 

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © [Andrew Song](https://www.linkedin/in/andrewisong)

