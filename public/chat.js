var socket = io.connect('http://localhost:4000');
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    send = document.getElementById('send'),
    output = document.getElementById('output');
    feedback = document.getElementById('feedback');

send.addEventListener('click', function() {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('keypress', function() {
    socket.emit('typing', handle.value);
});

socket.on('chat', function(data) {
    output.innerHTML += '<p><strong>' + data.handle + '</strong>: ' + data.message + '[</p>';
})

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message</em></p>';
});