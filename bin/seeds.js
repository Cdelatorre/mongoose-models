const mongoose = require("mongoose");
const City = require("./../models/city.model");

require("./../config/db.config");

const cities = [
  {
    population: 3223334,
    area: 604.3,
    img: "https://media.istockphoto.com/id/514769480/es/foto/madrid-en-gran-a-trav%C3%A9s-de-espa%C3%B1a.jpg?s=1024x1024&w=is&k=20&c=xNXfkMIKZVeK59VghUyFd9Gu0mSQ5ZrI4Fx2jkBAzIs=",
    name: "Madrid",
  },
  {
    population: 2141000,
    area: 105.4,
    img: "https://media.istockphoto.com/id/514769480/es/foto/madrid-en-gran-a-trav%C3%A9s-de-espa%C3%B1a.jpg?s=1024x1024&w=is&k=20&c=xNXfkMIKZVeK59VghUyFd9Gu0mSQ5ZrI4Fx2jkBAzIs=",
    name: "Paris",
  },
  {
    population: 3748000,
    area: 891.7,
    img: "https://media.istockphoto.com/id/514769480/es/foto/madrid-en-gran-a-trav%C3%A9s-de-espa%C3%B1a.jpg?s=1024x1024&w=is&k=20&c=xNXfkMIKZVeK59VghUyFd9Gu0mSQ5ZrI4Fx2jkBAzIs=",
    name: "Berlin",
  },
];

City.collection
  .drop()
  .then(() => {
    City.create(cities).then((citiesFromDB) => {
      console.log(`Created ${citiesFromDB.length} cities`);
      mongoose.connection.close();
    });
  })
  .catch((err) => console.log(err));
