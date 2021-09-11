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

      exports.findOne = (req, res) => {
        const id = req.params.id;

        Restaurant.findById(id)
        .then(data => {
          if(!data){
            res.status(404).send({message:"Not found restaurant with id: " + id});
          }else{
            res.send(data);
          }
        })
        .catch(err => {
          res
          .status(500)
          .send({message: "Error retrieving restaurant with id:= " + id});
        })
      };

      exports.deleteOne = (req, res) => {
        const id = req.params.id;

        Restaurant.findByIdAndDelete(id)
        .then(data => {
          if(!data){
            res.status(404).send({
              message:"Cannot delete restaurant with id."
            })
          }else{
            res.send({
              message: "Restaurant deleted successfully!"
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not found restaurant with id"
          });
        })
      };