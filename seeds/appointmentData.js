const { Appointment } = require("../models");

const appointmentData = [
  {
    date: "3/25/2024",
    time: "8:00AM",
    doctor_id: 1,
    patient_id: 1,
  },
  {
    date: "3/25/2024",
    time: "8:15AM",
    doctor_id: 2,
    patient_id: 3,
  },
  {
    date: "3/25/2024",
    time: "8:30AM",
    doctor_id: 3,
    patient_id: 5,
  },
  {
    date: "3/25/2024",
    time: "8:45AM",
    doctor_id: 4,
    patient_id: 7,
  },
  {
    date: "3/26/2024",
    time: "9:00AM",
    doctor_id: 5,
    patient_id: 9,
  },
  {
    date: "3/26/2024",
    time: "9:15AM",
    doctor_id: 6,
    patient_id: 11,
  },
  {
    date: "3/26/2024",
    time: "9:30AM",
    doctor_id: 7,
    patient_id: 13,
  },
  {
    date: "3/26/2024",
    time: "9:45AM",
    doctor_id: 8,
    patient_id: 15,
  },
  {
    date: "3/27/2024",
    time: "10:00AM",
    doctor_id: 9,
    patient_id: 17,
  },
  {
    date: "3/27/2024",
    time: "10:15AM",
    doctor_id: 10,
    patient_id: 19,
  },
  {
    date: "3/27/2024",
    time: "10:30AM",
    doctor_id: 1,
    patient_id: 2,
  },
  {
    date: "3/27/2024",
    time: "10:45AM",
    doctor_id: 2,
    patient_id: 4,
  },
  {
    date: "3/28/2024",
    time: "11:00AM",
    doctor_id: 3,
    patient_id: 6,
  },
  {
    date: "3/28/2024",
    time: "11:15AM",
    doctor_id: 4,
    patient_id: 8,
  },
  {
    date: "3/28/2024",
    time: "11:30AM",
    doctor_id: 5,
    patient_id: 10,
  },
  {
    date: "3/28/2024",
    time: "11:45AM",
    doctor_id: 6,
    patient_id: 12,
  },
  {
    date: "3/29/2024",
    time: "1:00PM",
    doctor_id: 7,
    patient_id: 14,
  },
  {
    date: "3/29/2024",
    time: "1:15PM",
    doctor_id: 8,
    patient_id: 16,
  },
  {
    date: "3/29/2024",
    time: "1:30PM",
    doctor_id: 9,
    patient_id: 18,
  },
  {
    date: "3/29/2024",
    time: "1:45PM",
    doctor_id: 10,
    patient_id: 20,
  },
];

const seedAppointment = () => Appointment.bulkCreate(appointmentData);
module.exports = seedAppointment;
