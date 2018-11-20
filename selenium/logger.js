const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const mongoose = require('mongoose');
const Timing = require('./models/Timing');
const MongoURI = 'mongodb://poftadeh:foobar322@ds159993.mlab.com:59993/timing'
const CRM_URL = 'http://localhost:8080';
const driver = new Builder().forBrowser('chrome').build();
const Test = require('./Test');

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), seconds * 1000))
}
const startup = async () => {
  await driver.manage().window().maximize();
  await driver.get(CRM_URL);
  await driver.findElement(By.css('.login-window'));
  testLogin();
}

const testLogin = async () => {
  const test = new Test("Login");
  const usernameField = await driver.findElement(By.css('input[placeholder="Username"]'));
  sleep(2);
  await usernameField.sendKeys('John Doe');
  sleep(1);
  const passwordField = await driver.findElement(By.css('input[placeholder="Password"]'));
  await passwordField.sendKeys('1234');
  sleep(1);
  await driver.findElement(By.css('.login-button')).click();
  await driver.findElement(By.css('.title'));
  test.end();
}

const conductTest = async () => {

}

startup().then(() => driver.quit);