const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const Test = require('./Test');
const mongoose = require('mongoose');
const database = 'mongodb://poftadeh:foobar322@ds159993.mlab.com:59993/timing'
const driver = new Builder().forBrowser('chrome').build();
const CRM_URL = 'http://localhost:8080';

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), seconds * 1000))
}

const connectToMongo = async () => {
  mongoose
    .connect(database, { useNewUrlParser: true })
    .then(() => console.log(`Mongo connected at ${database}`))
    .catch(error => console.error(error));
}

const seleniumStartup = async () => {
  await driver.manage().window().maximize();
  await driver.get(CRM_URL);
  await driver.findElement(By.css('.login-window'));
}

const testLogin = async () => {
  const test = new Test("Login");
  test.start();
  const usernameField = await driver.findElement(By.css('input[placeholder="Username"]'));
  await sleep(2);
  await usernameField.sendKeys('John Doe');
  await sleep(1);
  const passwordField = await driver.findElement(By.css('input[placeholder="Password"]'));
  await passwordField.sendKeys('1234');
  await sleep(1);
  await driver.findElement(By.css('.login-button')).click();
  await driver.findElement(By.css('.title'));
  test.end();
  test.uploadToDatabase();
}

testContactSearch = async () => {
  const test = new Test("contactSearch");
  test.start();
  const searchInput = await driver.findElement(By.css('.search-input'));
  await sleep(2);
  await searchInput.sendKeys('Leonard');
  const findContactButton = await driver.findElement(By.css('input[value="Find Contact"'));
  await findContactButton.click();
  await sleep(1);
  test.end();
  test.uploadToDatabase();
}

const conductTests = async () => {
  await connectToMongo();
  await seleniumStartup();
  await testLogin();
  await testContactSearch();
}

conductTests()
  .then(() => driver.quit())
  .catch(error => console.error("Error:", error));