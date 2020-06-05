
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
const join = ctx => {
    ctx.io.emit('join', ctx.data);
}

server([
    get('/', ctx => render('index.html')),
    socket('connect', updateCounter),
    socket('disconnect', updateCounter),
    socket('message', sendMessage),
    socket('join', join),
]);

