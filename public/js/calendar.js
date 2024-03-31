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

createCalendar(user['appointments'].map(obj => {
return {
title: obj.title,
start: obj.time
}
}))
