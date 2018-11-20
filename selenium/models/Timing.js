const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimingSchema = new Schema({
  testName: {
    type: String,
    required: true
  },
  duration: {  // in seconds
    type: String,
    required: true
  },
  dateRecorded: {
    type: String,
  },
  memoryUsage: {  // in MBs
    type: String,
  }
});

module.exports = mongoose.model('timing', TimingSchema, 'timings');