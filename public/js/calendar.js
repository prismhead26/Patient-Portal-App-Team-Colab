const user = JSON.parse(document.getElementById('calendar').dataset.user);

function createCalendar(data) {
    document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        height: 'auto',
        initialDate: '2024-03-12',
        businessHours: true,
        initialView: 'timeGridDay',
        events: data
    });
  calendar.render();
});
}

if (user['appointments'].length === 0 ) {
} else {
  createCalendar(user['appointments'].map(obj => {
  return {
  title: obj.title,
  start: obj.time
  }
  }))
}
