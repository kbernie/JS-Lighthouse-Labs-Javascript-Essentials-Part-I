var socket = io();

$('form').submit(function () {
  var initials = $('#initials').val();
  var text = $('#message').val();
  var both = initials + " says: " + text

  socket.emit('message', both);
  $('#message').val('');
  $('#initials').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
}); 