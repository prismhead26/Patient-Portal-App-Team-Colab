// ROUTES FOR HTML TEMPLATES
const router = require("express").Router();
const { Patient, Doctor, Appointment } = require("../models");
const withAuth = require("../utils/auth");
const jsonUtils = require("../utils/json_utils");

// Route to get main HTML page
router.get("/", async (req, res) => {
  try {
    const doctorData = await Doctor.findAll({
      attributes: ["name", "clinic"],
    });

    const doctors = doctorData.map((doctor) => doctor.get({ plain: true }));
    // console.log('doctor data ========', doctors)
    res.render("homepage", {
      doctors,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    return res.redirect("/");
  }
  res.render("login");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const doctorData = await Doctor.findByPk(req.session.user_id, {
      include: [
        // {
        //   model: Appointment,
        //   attributes: ["time", "title"],
        // },
        // {
        //   model: Patient,
        //   attributes: ["name"],
        //   include: [
        //     {
        //       model: Appointment,
        //     },
        //   ],
        // },
        {
          model: Appointment,
          attributes: ["time", "title", "id", "doctor_id"],
          include: [
            {
              model: Patient,
              attributes: ["name"],
            },
          ],
        },
      ],
    });
    const doct = doctorData.get({ plain: true });

    res.render("dashboard", {
      data: jsonUtils.encodeJSON(doct),
      ...doct,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, a server error!",
    });
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const doctorData = await Doctor.findByPk(req.session.user_id, {
      include: [
        {
          model: Patient,
          attributes: ["name", "address", "birthday", "id"],
        },
      ],
    });

    const doct = doctorData.get({ plain: true });

    res.render("profile", {
      ...doct,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: "Oops, a server error!" });
  }
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
