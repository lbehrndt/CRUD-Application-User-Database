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

exports.update_user = async (req, res) => {
  const user = req.query.id;
  await axios
    .get("http://localhost:3000/api/users", {params: {id: user}}) //BUG
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      res.send(err);
    });
};
