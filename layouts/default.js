$(document).ready(function() {

  $(".button-collapse").sideNav();

  var $notifications = $('#notifications');

  function notification (status, title, message) {

    var html  = '<div class="card notification">';
        html += ' <div class="card-content white-text ' + status + '">';
        html += '   <span class="card-title">' + title + '</span>';
        html += '   <p>' + message + '</p>';
        html += ' </div>';
        html += '</div>';

    $notifications
      .append($(html))
      .show();

  }

  var socket = io.connect('http://localhost:8081');

  socket.on('notification', function(data) {
    notification(data.status, data.title, data.message);
  });

  socket.on('stormtrooper:added', function(data){
    notification(data.status, data.title, data.message);
  });

  $('#stormtrooper-form').on('submit', function(event) {
    event.preventDefault();
    $.post('/stormtrooper', $(this).serialize());
  });

  $(document).on('click', '.notification', function() {
    $(this).remove();
    if ($notifications.is(':empty')) {
      $notifications.hide();
    }
  });

  $notifications.hide();

});
