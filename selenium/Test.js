class Test {
  constructor(testName) {
    this.testName = testName;
    this.start();
  }

  start() {
    this.startTime = Date.now();
    console.log(`Test '${this.testName}' started.`)
  }

  end() {
    this.endTime = Date.now();
    console.log(`Test '${this.testName}' ended in ${(this.endTime - this.startTime) / 1000} seconds.`)
  }

  uploadToDatabase(model, mongoURI) {
    
  }
}

module.exports = Test;