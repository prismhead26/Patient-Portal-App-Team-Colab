// ROUTES FOR HTML TEMPLATES
const router = require("express").Router();
const { Patient, Doctor, Appointment } = require("../models");
const withAuth = require("../utils/auth");
const jsonUtils = require("../utils/json_utils");

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

const array = [1, 2, 3, 4, 5]

router.get("/dashboard", withAuth, async (req, res) => {
    try {
      const doctorData = await Doctor.findByPk(req.session.user_id, {
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
      const doct = doctorData.get({ plain: true })

      res.render('dashboard', {
        "data": jsonUtils.encodeJSON(doct),
        ...doct
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: 'Oops, a server error!'
      })
    }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const doctorData = await Doctor.findByPk(req.session.user_id, {
      include: [
        { 
          model: Patient,
          attributes: ['name', 'address', 'birthday'],
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

module.exports = router;
