require("dotenv").config();
const sequelize = require("../config/connection");

const seedDoctor = require("./doctorData");
const seedPatient = require("./patientData");
const seedAppointment = require("./appointmentData");
const seedNote = require("./noteData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedDoctor();

  await seedPatient();

  await seedAppointment();

  await seedNote();

  process.exit(0);
};

seedDatabase();
