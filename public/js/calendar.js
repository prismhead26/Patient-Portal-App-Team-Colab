const user = JSON.parse(document.getElementById('calendar').dataset.user);
// console.log(user);
// user['appointments'].forEach((element) => console.log('time ...',element.time));
// user['patients'].forEach((element) => console.log('patients ...',element.name));

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
