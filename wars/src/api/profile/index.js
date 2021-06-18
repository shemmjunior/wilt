const Profile = require('../../models/user.model')
exports.findOne = (req, res) => {
    const id = req.query.user_id;
  
    Profile.findById(id)
      .then((data) => {
          const filtered = { 
            username: data.username,
            email: data.email,
          }
          res.send(filtered);

      })
      .catch((err) => {
        res.status(500).send({ message: "Error Getting User Data" });
      });
  };


  exports.update = (req, res) => {
    const id = req.query.user_id;

    Profile.findByIdAndUpdate(id, {
        username: req.body.username,
        bio: req.body.bio
    })
      .then(() => {
        res.send({ message: "Profile Successfully Updated" });
      })
      .catch((err) => {
        res.status(500).send({ message: err });
      });
  };

