const Doctor = require("./Doctor");
const Patient = require("./Patient");
const Appointment = require("./Appointment");
const Note = require("./Note");

//Doctor has many patients
Doctor.hasMany(Patient, {
  foreignKey: "doctor_id",
  onDelete: "CASCADE",
});

//Patients belong to one doctor
Patient.belongsTo(Doctor, {
  foreignKey: "doctor_id",
});

//Patients have one appointment
Patient.hasOne(Appointment, {
  foreignKey: "patient_id",
});

//Appointments belong to one patient
Appointment.belongsTo(Patient, {
  foreignKey: "patient_id",
});

//Doctor has many appointments
Doctor.hasMany(Appointment, {
  foreignKey: "doctor_id",
});

//Appointment belongs to one doctor
Appointment.belongsTo(Doctor, {
  foreignKey: "doctor_id",
});

Patient.hasMany(Note, {
  foreignKey: "patient_id",
});

Note.belongsTo(Patient, {
  foreignKey: "patient_id",
});

module.exports = { Doctor, Patient, Appointment, Note };
