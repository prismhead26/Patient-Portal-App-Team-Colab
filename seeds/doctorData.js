const { Doctor } = require("../models");

const doctorData = [
  {
    name: "Brock Hart",
    username: "hart2heart",
    password: "hart1234",
    clinic: "Cardiology",
  },
  {
    name: "Ronald Weezer",
    username: "mouthbreather",
    password: "weezer12",
    clinic: "Respiratory",
  },
  {
    name: "Jacob Bender",
    username: "bendomatic",
    password: "bender12",
    clinic: "Orthopedics",
  },
  {
    name: "Frank Skinner",
    username: "smoothskinner",
    password: "skinner1",
    clinic: "Dermatology",
  },
  {
    name: "Shelly Kidd",
    username: "kidd4ever",
    password: "kidd1234",
    clinic: "Pediatrics",
  },
  {
    name: "Xander Raymond",
    username: "xray",
    password: "raymond1",
    clinic: "Radiology",
  },
  {
    name: "Natalie Knight",
    username: "knightnight",
    password: "knight12",
    clinic: "Anesthesiology",
  },
  {
    name: "Samantha Whitecell",
    username: "redorwhite",
    password: "whitecell",
    clinic: "Hematology",
  },
  {
    name: "Robyn Sprinkles",
    username: "rsprink",
    password: "sprinkles",
    clinic: "Urology",
  },
  {
    name: "Wendy Daigh",
    username: "wdaigh",
    password: "daigh123",
    clinic: "Pulmonology",
  },
  {
    name: "Lucinda Crain-Eyumm",
    username: "brainchild",
    password: "crain123",
    clinic: "Neurology",
  },
];

const seedDoctor = () =>
  Doctor.bulkCreate(doctorData, { individualHooks: true });
module.exports = seedDoctor;
