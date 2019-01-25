$(document).on("turbolinks:load", function () {
  if ($("meta[name='push_notifications']").length >0) {
    App.notifications = App.cable.subscriptions.create("NotificationsChannel", {
      received: function(data) {
        if($(data.id).length) {

          var el = '#notification-'+data.id;

          var selected = $(el).has("input:checked");
          $(el)[0].outerHTML = data.notification;
          if (selected.length) {
            $(el).find("input[type=checkbox]").prop('checked', true);
          }
       
          if($('#notification-thread').attr('data-id') == data.id){
            $('#thread-subject').html(data.subject);
          }
        }
      }
    });
  }
});
