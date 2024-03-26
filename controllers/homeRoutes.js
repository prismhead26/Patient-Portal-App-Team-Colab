const router = require("express").Router();
const { Patient, Doctor } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    return res.redirect("/");
  }
  res.render("/login");
});

router.get("/profile", async (req, res) => {});

router.get("/patients", withAuth, async (req, res) => {
  try {
    const patientData = await Patient.findAll({
      attributes: ["name"],
      include: [{ model: Doctor }],
      order: [["name", "ASC"]],
    });

    const patients = patientData.map((patient) => patient.get({ plain: true }));

    res.render("/profile", {
      patients,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ status: err, message: 'Oops, a server error!' })
  }
});

module.exports = router;
