const router = require("express").Router();
const { Note, Patient, Doctor } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const noteData = await Note.create({
      ...req.body,
      body: req.body.body,
      doctor_id: req.session.user_id,
      patient_id: req.body.patient_id,
    });

    res.status(200).json(noteData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

// Update a Note
router.put("/:id", withAuth, async (req, res) => {
  try {
    const noteData = await Note.update(
      {
        title: req.body.title,
        time: dayjs(req.body.time).format("YYYY-MM-DDTHH:mm:ss"),
        patient_id: req.body.patient_id,
      },
      {
        where: {
          id: req.params.id,
          doctor_id: req.session.user_id,
        },
      }
    );
    res.status(200).json(noteData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

// Delete a Note
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const noteData = await Note.destroy({
      where: {
        id: req.params.id,
        doctor_id: req.session.user_id,
      },
    });
    res.status(200).json(noteData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.body);
    const noteData = await Note.findByPk(req.params.id, {});

    const Note = noteData.get({ plain: true });
    res.render("Note", {
      Note,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
