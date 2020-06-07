
let user = cookie.get('user');

// If no username is stored inside cookies
if (!user) {

    // Ask for username 
    user = prompt("Choose a username:");

    if (!user) {
        alert('Please enter a valid, non-blank name. Refresh and try again.');
    } else {

        // Prevent JS injection by displaying HTML tags as plain text
        user = user.replace(/</g, '&lt;').replace(/>/g, '&gt;');

        cookie.set('user', user)

    }
} else {

    user = prompt("Welcome back, " + user + "! You can change your username below. Enter to keep.");

    if (user) {

        user = user.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        cookie.set('user', user);
    }
}

// Connect to server-side websocket.
let socket = io();

// Take in a count and define a function that updates the html of the count
socket.on('count', function(data) {

    // Replace all .user-count elements with data
    // i.e. update the count of users
    $('.user-count').html(data);

});

// Take in a meesage and define a function that updates the html to write the message
socket.on('message', function(data) {

    // Prevent JS injections in a similar manner as before
    const msg = data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Append user's username and message to the existing html chat class.
    // i.e. write the message to the chat.
    $('.chat').append('<p><strong style="color: #6DFFE7">' + data.user + 
                      ': </strong>' + msg + '</p>');

});

socket.on('join', function(data) {

    // Message the chat when a new user joins
    $('.chat').append('<p style="color: #6DFFE7; text-align: center"><i>' + data.user + 
                      ' has joined the chat.' + '</i></p>');

})

socket.on('leave', function(data) {

    // Message the chat when a new user joins
    $('.chat').append('<p style="color: #6DFFE7; text-align: center"><i>' + cookie.get('user') + 
                      ' has left the chat.' + '</i></p>');

})

socket.emit('join', {
    user: cookie.get('user') || 'Anonymous',
});

socket.emit('leave', {
    user: cookie.get('user') || 'Anonymous',
});

// Runs after an event has taken place, but before submission.
$('form').submit(function (e) {

    // Prevent the form from being submitted through HTTP.
    e.preventDefault();

    // Get message from user
    let message = $(e.target).find('input').val();

    // Send the message to the server
    // 'emit' - send to the client
    socket.emit('message', {
        user: cookie.get('user') || 'Anonymous',
        message: message
    });

    // Clear the input and focus for a new message
    // 'focus' - return to default behavior.
    e.target.reset();
    $(e.target).find('input').focus();
});