const router = require("express").Router();
const { Patient, Doctor } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a patient
router.post("/", withAuth, async (req, res) => {
  try {
    const patientData = await Patient.create({
      ...req.body,
      doctor_id: req.session.user_id,
    });
    res.status(200).json(patientData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

// Update a patient
router.put("/:id", withAuth, async (req, res) => {
  try {
    const patientData = await Patient.update(
      {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        birthday: req.body.birthday,
      },
      {
        where: {
          id: req.params.id,
          doctor_id: req.session.user_id,
        },
      }
    );
    res.status(200).json(patientData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

// Delete a patient
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const patientData = await Patient.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(patientData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const patientData = await Patient.findByPk(req.params.id);

    const patient = patientData.get({ plain: true });
    res.render("patient", {
      patient,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
