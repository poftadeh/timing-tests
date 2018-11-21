const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const Test = require('./Test');
const faker = require('faker');
const driver = new Builder().forBrowser('firefox').build();
const PORT = require('../config/port');
const CRM_URL = `http://localhost:${PORT}`;

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), seconds * 1000))
}

const seleniumStartup = async () => {
  await driver.manage().window().maximize();
  await driver.get(CRM_URL);
}

const testLogin = async () => {
  await driver.findElement(By.css('.login-window'));
  const usernameField = await driver.findElement(By.css('input[placeholder="Username"]'));
  await sleep(1);
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
    await sleep(.12);
    await field.sendKeys(text[i]);
  }
}

const testContactSearch = async () => {
  await sleep(3);
  const searchInput = await driver.findElement(By.css('.search-input'));
  const findContactButton = await driver.findElement(By.css('input[value="Find Contact"'));
  await findContactButton.click();
  await sleep(3);
  await type(searchInput, faker.name.findName());
  await findContactButton.click();
  await sleep(2);
}

const clickProjections = async () => {
  const projectionButton = await driver.findElement(By.css('#projections'));
  await projectionButton.click();
  await sleep(4);
}

const clickStats = async () => {
  const statsButton = await driver.findElement(By.css('#stats'));
  await statsButton.click();
  await sleep(3);
}

const logout = async () => {
  const logoutButton = await driver.findElement(By.css('#logout'));
  await logoutButton.click();
  await sleep(1);
}

const conductTests = async () => {
  await testLogin();
  await testContactSearch();
  await clickProjections();
  await clickStats();
  await logout();
}

const loopTests = async () => {
  while (true) {
    await conductTests();
  }
}

seleniumStartup().then(() => {
  loopTests()
    .then(() => driver.quit())
    .catch(error => console.error("Error:", error));
})
  .catch(error => console.error("Error:", error));