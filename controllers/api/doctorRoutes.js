const router = require("express").Router();
const { Doctor } = require("../../models");

// Create new Doctor
router.post("/", async (req, res) => {
  try {
    const doctorData = await Doctor.create(req.body);

    req.session.save(() => {
      req.session.user_id = doctorData.id;
      req.session.logged_in = true;

      res.status(200).json(doctorData);
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Oops, a server error",
    });
  }
});

// Login Doctor

router.post("/login", async (req, res) => {
  try {
    const doctorData = await Doctor.findOne({
      where: { username: req.body.username },
    });

    if (!doctorData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = doctorData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = doctorData.id;
      req.session.logged_in = true;

      res.json({ user: doctorData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout Doctor
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).json({
      status: "error",
      message: "Oops, a server error",
    });
  }
});

module.exports = router;
