const router = require("express").Router();
const doctorRoutes = require("./doctorRoutes");
const appointmentRoutes = require("./appointmentRoutes");
const patientRoutes = require("./patientRoutes");
const noteRoutes = require("./noteRoutes");

router.use("/doctors", doctorRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/patients", patientRoutes);
router.use("/notes", noteRoutes);

module.exports = router;
