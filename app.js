const express = require("express");
const hbs = require("hbs");
const morgan = require("morgan");
const City = require("./models/city.model");

const app = express();
app.use(morgan("dev"));

require("./config/db.config");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("misc/home");
});

app.get("/cities", (req, res) => {
  City.find()
    .then((cities) => {
      res.render("cities/cities-list", { cities });
    })
    .catch((err) => console.log(err));
});

app.get("/cities/:cityId", (req, res) => {
  const id = req.params.cityId;

  City.findById(id)
    .then((city) => {
      res.render("cities/city-detail", { city });
    })
    .catch((err) => console.log(err));
});

app.post("/cities/:cityId/delete", (req, res) => {
  const id = req.params.cityId;

  City.findByIdAndDelete(id)
    .then((e) => {
      res.redirect("/cities");
    })
    .catch((err) => console.log(err));
});

app.get("/cities/:cityId/edit", (req, res) => {
  const id = req.params.cityId;

  City.findById(id)
    .then((city) => {
      res.render("cities/city-edit", { city });
    })
    .catch((err) => console.log(err));
});

app.post("/cities/:cityId/edit", (req, res) => {
  const id = req.params.cityId;
  const dataEdit = { population: 1928361982367, name: "Frankfur" };

  City.findByIdAndUpdate(id, dataEdit)
    .then((e) => {
      res.redirect("/cities");
    })
    .catch((err) => console.log(err));
});

app.post("/cities", (req, res) => {
  const data = {
    name: "Juan",
    population: 19823619823769,
    area: Math.random(),
    img: "https://media.istockphoto.com/id/514769480/es/foto/madrid-en-gran-a-trav%C3%A9s-de-espa%C3%B1a.jpg?s=1024x1024&w=is&k=20&c=xNXfkMIKZVeK59VghUyFd9Gu0mSQ5ZrI4Fx2jkBAzIs=",
  };

  City.create(data)
    .then((e) => {
      res.redirect("/cities");
    })
    .catch((err) => console.log(err));
});

app.listen(3000, () => console.log("App listening on port 3000!"));
