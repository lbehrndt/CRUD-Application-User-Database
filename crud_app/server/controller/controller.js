const { request } = require("express");
let Userdb = require("../model/model");

// create and save new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user in database
  user
    .save(user)
    .then((data) => {
      //res.send(data);
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while creating a create operation.",
      });
    });
};

// retieve and return all users / retrieve and return a single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.params.id;
    
    Userdb.findbyId(id)
    .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Not found user with id: ${id}.`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error retrieving user with id: ${id}.`,
        });
      });
  }
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a find operation.",
      });
    });
};

// update a new identifier user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty",
    });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, {
    useAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error Update user information",
      });
    });
};

// delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with ${id}. Maybe id is wrong!`,
        });
      } else {
        res.send({
          message: "User was deleted successfully.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete user with id: ${id}.`,
      });
    });
};
