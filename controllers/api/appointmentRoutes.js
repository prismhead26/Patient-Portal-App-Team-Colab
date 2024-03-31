const router = require("express").Router();
const { Appointment, Patient, Doctor } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a appointment
router.post("/", withAuth, async (req, res) => {
  try {
    const appointmentData = await Appointment.create({
        ...req.body,
        doctor_id: req.session.user_id,
    });
    res.status(200).json(appointmentData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

// Update a appointment
router.put("/:id", withAuth, async (req, res) => {
  try {
    const appointmentData = await Appointment.update(
      {
        title: req.body.title,
        time: req.body.time,
        patient_id: req.body.patient_id,
      },
      {
        where: {
          id: req.params.id,
          doctor_id: req.session.user_id,
        },
      }
    );
    res.status(200).json(appointmentData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

// Delete a appointment
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const appointmentData = await Appointment.destroy({
      where: {
        id: req.params.id,
        doctor_id: req.session.user_id
      },
    });
    res.status(200).json(appointmentData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const appointmentData = await Appointment.findByPk(req.params.id);

    const appointment = appointmentData.get({ plain: true });
    res.render("appointment", {
      appointment,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
