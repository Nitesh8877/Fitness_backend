const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

/**
 *  the discussion and changes to meds, what needs to be done next for the patient, etc.
in order to create a healthlog we will require the following: date of appointment
 doctor seen, clinic, visitPurpose,
 height, weight, notes
links to lab or summary printout
nextAppointment
 */

const HealthLogSchema = new Schema({
    date: {
        type: String,
        trim: true,
        required: 'Date is required',
    },
    doctor: {
        type: String,
        trim: true,
        required: 'First name is required',
    },
    visitPurpose: {
        type: String,
        trim: true,
        required: 'Specialty is Required',
    },
    notes: {
        type: String,
        trim: true,
        required: 'Specialty is Required',
    },
    heightIn: {
        type: Number,
        trim: true,
    },
    weightLb: {
        type: Number,
        trim: true,
    },
    // `date` must be of type Date. The default value is the current date
    userCreated: {
        type: Date,
        default: Date.now,
    },
});

const HealthLog=mongoose.model("HealthLog",HealthLogSchema);

module.exports=HealthLog;