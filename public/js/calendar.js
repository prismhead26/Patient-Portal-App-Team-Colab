const user = JSON.parse(document.getElementById('calendar').dataset.user);
console.log(user);
user['appointments'].forEach((element) => console.log('time ...',element.time));
user['patients'].forEach((element) => console.log('patients ...',element.name));

function createCalendar(data) {
    document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: data
    });
  calendar.render();
});
}

createCalendar();

// // module.exports = { createApp }

// /**
//  * createApp(data.map(obj => {
//  * return {
//  * title:
//  * start:
//  * }
//  * }))
//  */
