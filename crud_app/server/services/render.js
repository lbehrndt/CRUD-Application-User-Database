const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // make get request to /api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("index", {
        users: response.data,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  const id = req.query.id;
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } }) //BUG
    .then(function (userdata) {
      console.log(id);
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err + " hiii");
    });
};
