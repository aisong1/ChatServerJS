
const server = require('server');
const { get, socket } = server.router;
const { render } = server.reply;

// Update counter for all chats
const updateCounter = ctx => {
    ctx.io.emit('count', Object.keys(ctx.io.sockets.sockets).length);
}

// Send messgae to the chat
const sendMessage = ctx => {
    ctx.io.emit('message', ctx.data);
}

// Announce when a user has joined the chat
const userConnect = ctx => {
    ctx.io.emit('join', ctx.data);
}

// Announce when a user has left the chat.
const userDisconnect = ctx => {
    ctx.io.emit('leave', ctx.data);
}

server([
    get('/', ctx => render('index.html')),
    socket('join', userConnect),
    socket('connect', updateCounter),
    socket('message', sendMessage),
    socket('disconnecting', userDisconnect), 
    socket('disconnect', updateCounter),
]);

