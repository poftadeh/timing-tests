const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Member = require('../../models/Member.js');


// @route GET api/members
// @desc Get all Members
// @access Public

router.get('/', (req, res) => {
  Member.find()
    .sort({ lastName: 1 })
    .then(members => res.json(members));
});

// @route POST api/members
// @desc Add a Member via POST
// @access Public

router.post('/add', (req, res) => {
  console.log(req.body);
  const newMember = new Member({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  newMember.save().then(member => res.json(member));
});

// @route GET api/members
// @desc Find member
// @access Public

router.post('/find', (req, res) => {
  console.log("Lastname:", req.body.lastName)
  Member.find({ lastName: new RegExp(req.body.lastName) })
    .sort({ lastName: 1 })
    .then(member => res.json(member));
});

module.exports = router;
