const db = require("../models");
const Restaurant = db.restaurants;
// Retrieve all Restaurants from the database.
    exports.findAll = (req, res) => {
        Restaurant.find()
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving Restaurants."
            });
          });
      };