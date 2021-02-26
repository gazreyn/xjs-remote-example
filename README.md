# XJS Remote Example
For further documentation, please see https://xjsframework.github.io/tutorials.html#/remotexjs

# Usage
- Run `npm install` and then `npm start`
- Once the server has started, Add http://localhost:3000/extension as an extension in XSplit Broadcaster and then make sure it's open/running
- Open http://localhost:3000 in your browser

You should now be able to see the scene name updating as you change scene in XSplit Broadcaster. Any normal XJS call can be made from index.html and will be sent through the proxy.

# Structure
**proxy-extension.html** - You shouldn't have to touch this file as it's sole job is to recieve remote XJS calls and emit responses to the remote.

**xjs-remote.html** - This is where you edit and handle all of your xjs code. You code here like you are actually doing it as an extension.
