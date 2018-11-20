const Timing = require('./models/Timing');

class Test {
  constructor(testName) {
    this.testName = testName;
  }

  start() {
    this.startTime = Date.now();
    console.log(`Test '${this.testName}' started.`)
  }

  end() {
    this.endTime = Date.now();
    console.log(`Test '${this.testName}' ended in ${(this.endTime - this.startTime) / 1000} seconds.`)
  }

  calculateRamUsage() {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    return Math.round(used * 100) / 100;
  }

  uploadToDatabase() {
    const newTiming= new Timing({
      testName: this.testName,
      duration: (this.endTime - this.startTime) / 1000,
      dateRecorded: new Date(Date.now()).toLocaleDateString(),
      memoryUsage: this.calculateRamUsage()
    });
  
    newTiming.save()
      .then(result => console.log(result))
      .catch(error => console.error("Error uploading: ", error))
  }
}

module.exports = Test;