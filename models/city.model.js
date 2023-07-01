const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // [true, "Name is required"],
    trim: true,
    minlength: 2,
    maxlength: 20,
  },
  population: {
    type: Number,
    default: 0,
    enum: [0, 1, 2, 3, 4, 5],
  },
  area: {
    type: Number,
    default: 0,
  },
  img: {
    type: String,
    default:
      "https://media.istockphoto.com/id/514769480/es/foto/madrid-en-gran-a-trav%C3%A9s-de-espa%C3%B1a.jpg?s=1024x1024&w=is&k=20&c=xNXfkMIKZVeK59VghUyFd9Gu0mSQ5ZrI4Fx2jkBAzIs=",
  },
});

const City = mongoose.model("City", citySchema);
module.exports = City;
