module.exports = app => {
    const restaurants = require("../controllers/restraurants.controller");
  
    var router = require("express").Router();
  
    // Retrieve all restaurants
    router.get("/", restaurants.findAll);
    app.use('/api/restaurants', router);
  };