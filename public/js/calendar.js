function createApp(data) {
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2024-03-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: data
    });

    calendar.render();
  });
}

module.exports = { createApp }

/**
 * createApp(data.map(obj => {
 * return {
 * title:
 * start:
 * }
 * }))
 */
