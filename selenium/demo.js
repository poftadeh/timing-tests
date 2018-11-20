const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const Test = require('./Test');
const faker = require('faker');
const mongoose = require('mongoose');
const database = require('../config/keys').mongoURI;
const driver = new Builder().forBrowser('chrome').build();
const PORT = require('../config/port');
const CRM_URL = `http://localhost:${PORT}`;

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), seconds * 1000))
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
  await type(usernameField, faker.name.findName());
  await sleep(2);
  const passwordField = await driver.findElement(By.css('input[placeholder="Password"]'));
  await type(passwordField, faker.name.findName());
  await sleep(2);
  await driver.findElement(By.css('.login-button')).click();
  await driver.findElement(By.css('.title'));
}

const type = async (field, text) => {
  for (let i = 0; i < text.length; i++) {
    await sleep(.25);
    await field.sendKeys(text[i]);
  }
}

testContactSearch = async () => {
  const test = new Test("contactSearch");
  test.start();
  const searchInput = await driver.findElement(By.css('.search-input'));
  await sleep(2);
  await type(searchInput, faker.name.findName());
  const findContactButton = await driver.findElement(By.css('input[value="Find Contact"'));
  await findContactButton.click();
  await sleep(2);
  test.end();
  test.uploadToDatabase();
}

const conductTests = async () => {
  await seleniumStartup();
  await testLogin();
  await testContactSearch();
}

conductTests()
  .then(() => driver.quit())
  .then(() => mongoose.connection.close())
  .catch(error => console.error("Error:", error));