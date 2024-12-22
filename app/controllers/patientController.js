const Patient = require('../models/Patient');

// Create a new patient
const createPatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all patients
const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a patient by ID
const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: "Patient not found" });
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a patient
const updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!patient) return res.status(404).json({ message: "Patient not found" });
        res.status(200).json(patient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a patient
const deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) return res.status(404).json({ message: "Patient not found" });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient,
};
