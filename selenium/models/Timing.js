const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimingSchema = new Schema({
  testName: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  dateRecorded: {
    type: String,
  },
  memoryUsage: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('timing', TimingSchema, 'timings');