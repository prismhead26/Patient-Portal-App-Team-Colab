require("dotenv").config();
const sequelize = require("../config/connection");

const seedDoctor = require("./doctorData");
const seedPatient = require("./patientData");
const seedAppointment = require("./appointmentData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedDoctor();

  await seedPatient();

  await seedAppointment();

  process.exit(0);
};

seedDatabase();
