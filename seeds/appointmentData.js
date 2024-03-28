const { Appointment } = require("../models");

const appointmentData = [
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 1,
    patient_id: 1,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 2,
    patient_id: 3,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 3,
    patient_id: 5,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 4,
    patient_id: 7,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 5,
    patient_id: 9,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 6,
    patient_id: 11,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 7,
    patient_id: 13,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 8,
    patient_id: 15,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 9,
    patient_id: 17,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 10,
    patient_id: 19,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 1,
    patient_id: 2,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 2,
    patient_id: 4,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 3,
    patient_id: 6,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 4,
    patient_id: 8,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 5,
    patient_id: 10,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 6,
    patient_id: 12,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 7,
    patient_id: 14,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 8,
    patient_id: 16,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 9,
    patient_id: 18,
  },
  {
    time: "2024-03-12T14:30:00",
    doctor_id: 10,
    patient_id: 20,
  },
];

const seedAppointment = () => Appointment.bulkCreate(appointmentData);
module.exports = seedAppointment;
