const User = require("../../models/user.model");
const bcrypt = require("bcrypt");
const authValidation = require('../../validations/auth.validation')

exports.signup = async (req, res) => {

  const { error } = authValidation.registerValidation(req.body);

  if (error) return res.status(400).send({ message: error.details[0].message })

  const user = await User.findOne({ email: req.body.email });
  if (user) return res.send({ message: "User Already Exists" });

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  try {
    User.create({
      email: req.body.email,
      username: req.body.username,
      password: hashedPass,
      avatar: req.body.avatar,
    })
      .then(() => {
        res.send({ message: "Account Created Successfully" });
      })
      .catch((err) => {
        res.status(500).send({ message: "Something went wrong!" });
      });
  } catch (err) {
    res.status(400).json({ err });
  }
};

exports.signin = async (req, res) => {
  const { error } = authValidation.loginValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message })

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(500).send({ message: "No User available " });

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(500).send({ message: "Wrong Credentials" });

  if (user && isValid)
    return res
      .status(200)
      .send({ username: user.username, email: user.email, user_id: user.id });
};
