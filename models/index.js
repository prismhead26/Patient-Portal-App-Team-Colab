const Doctor = require("./Doctor");
const Patient = require("./Patient");
const Appointment = require("./Appointment");

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

module.exports = { Doctor, Patient, Appointment };
