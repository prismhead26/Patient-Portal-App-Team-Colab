const user = JSON.parse(document.getElementById('calendar').dataset.user);
console.log(user);
user['appointments'].forEach((element) => console.log('time ...',element.time));
user['patients'].forEach((element) => console.log('patients ...',element.name));

function createCalendar(data) {
    document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: '2024-03-12',
        initialView: 'timeGridDay',
        events: data
    });
  calendar.render();
});
}

createCalendar(user['patients'].map(obj => {
return {
title: obj.name,
start: obj.appointment.time
}
}))
