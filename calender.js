document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {

      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listYear'
      },

      displayEventTime: false, // don't show the time column in list view

      // http://fullcalendar.io/docs/google_calendar/
      googleCalendarApiKey: 'AIzaSyCbAVyKABz0EMUk45hd88AgTxuxbN4wv8E',

      // US Holidays
      events: {
    googleCalendarId: 'labseagle@gmail.com'
    },

      eventClick: function(arg) {
        // opens events in a popup window
        window.open(arg.event.url, 'google-calendar-event', 'width=700,height=600');

        arg.jsEvent.preventDefault() // don't navigate in main tab
      },

      loading: function(bool) {
        document.getElementById('loading').style.display =
          bool ? 'block' : 'none';
      }

    });

    calendar.render();
  });


  let calendar = new Calendar(calendarEl, {
  plugins: [ googleCalendarPlugin ],
  googleCalendarApiKey: 'AIzaSyCbAVyKABz0EMUk45hd88AgTxuxbN4wv8E',
  events: {
    googleCalendarId: 'yitzhaknjenga@gmail.com',
    event:'en.usa#holiday@group.v.calendar.google.com'
  }
});
