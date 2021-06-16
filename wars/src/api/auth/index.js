const User = require("../../models/user.model");
const bcrypt = require('bcrypt')
exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }, (err, withSameMail) => {
        if (err || withSameMail) {
          res.send({ message: 'User Already Exists' })
        }
  
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return callback(err);
          }
  
          user.password = hash;

          User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            avatar: req.body.avatar
          })
            .then(() => {
              res.send({ success: "Account Created Successfully" });
            })
            .catch((err) => {
              res.status(500).send(err);
            });
        
        });

      });
 
};

exports.signin = (req, res) => {
    
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err || !user) {
          return res.send({ message: 'Sorry Wrong Credentials' });
        }
  
        bcrypt.compare(req.body.password, user.password, (err, isValid) => {
  
          if (err || !isValid) return res.send({ message: 'Invalid Passwords'});

          return res.send(user)
  
         
        });
      });

  };