// ROUTES FOR HTML TEMPLATES

const router = require("express").Router();
const { Patient, Doctor, Appointment } = require("../models");
const withAuth = require("../utils/auth");

// Route to get main HTML page
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
  res.render("login");
});


router.get("/dashboard", withAuth, async (req, res) => {
    try {
      const doctor = await Doctor.findByPk(req.session.id, {
        include: [
          {
            model: Appointment,
            attributes: ['time'],
          },
          {
            model: Patient,
            attributes: ['name'],
          },
        ],
      });
/*
function utilizing script file (calendar.js) where appointment/patient 
info will be implemented 
*/
      res.render('dashboard');
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: 'Oops, a server error!'
      })
    }
});


router.get("/profile", withAuth, async (req, res) => {
  try {
    const doctorData = await Doctor.findByPk(req.session.id, {
      include: [
        { 
          model: Patient,
          attributes: ['name', 'address', 'birthday'],
        },
      ],
    });

    const doctors = doctorData.map((doctor) => doctor.get({ plain: true }));

    res.render("profile", {
      patients,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json({ status: "error", message: "Oops, a server error!" });
  }
});


module.exports = router;
