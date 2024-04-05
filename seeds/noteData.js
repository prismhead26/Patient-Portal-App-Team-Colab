const { Note } = require("../models");

const noteData = [
  {
    body: "This is a note",
    doctor_id: 1,
    patient_id: 1,
  },
  {
    body: "This is a note",
    doctor_id: 1,
    patient_id: 2,
  },
  {
    body: "This is another note",
    doctor_id: 1,
    patient_id: 2,
  },
  {
    body: "This is a note",
    doctor_id: 2,
    patient_id: 4,
  },
  {
    body: "This is a note",
    doctor_id: 3,
    patient_id: 6,
  },
  {
    body: "This is a note",
    doctor_id: 4,
    patient_id: 8,
  },
  {
    body: "This is a note",
    doctor_id: 5,
    patient_id: 10,
  },
  {
    body: "This is a note",
    doctor_id: 6,
    patient_id: 11,
  },
  {
    body: "This is a note",
    doctor_id: 6,
    patient_id: 12,
  },
  {
    body: "Fall Risk",
    doctor_id: 6,
    patient_id: 12,
  },
  {
    body: "New medicine prescribed",
    doctor_id: 6,
    patient_id: 12,
  },
  {
    body: "This is a note",
    doctor_id: 7,
    patient_id: 14,
  },
  {
    body: "This is a note",
    doctor_id: 8,
    patient_id: 16,
  },
  {
    body: "This is a note",
    doctor_id: 9,
    patient_id: 17,
  },
];

const seedNote = () => Note.bulkCreate(noteData);
module.exports = seedNote;
