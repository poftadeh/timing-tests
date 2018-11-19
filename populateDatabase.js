const Member = require('./models/Member');
const faker = require('faker');


const populate = () => {
  for (let i = 0; i < 50; i++) {
    const newMember = new Member({
      firstName: faker.name.findName().split(' ')[0].trim(),
      lastName: faker.name.findName().split(' ')[1].trim(),
      email: faker.internet.email(),
    })
    
    newMember.save().then(member => console.log(newMember));
  }
}

module.exports = populate;
