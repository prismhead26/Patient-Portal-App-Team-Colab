const router = require("express").Router();
const { Patient, Doctor } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a patient
router.post('/', withAuth, async (req, res) => {
    try {
        const patientData = await Patient.create(req.body);
        res.status(200).json(patientData);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Oops, an error has occured'
        });
    }
});

// Delete a patient
router.delete('/:id', withAuth, async (req, res) => {
    
});

// Update a patient
router.put('/:id', withAuth, async (req, res) => {
    
});


module.exports = router;
