module.exports = app => {
    const restaurants = require("../controllers/restraurants.controller");
  
    var router = require("express").Router();
  
    // Retrieve all restaurants
    router.get("/", restaurants.findAll);
    router.get("/:id", restaurants.findOne);
    router.delete("/:id", restaurants.deleteOne);
    app.use('/api/restaurants', router);
  };