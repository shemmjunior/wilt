const Wilt = require("../../models/wilt.model");
var faker = require('faker');
exports.create = (req, res) => {
  const user_id = req.query.user_id;
  Wilt.create({
    // title: req.body.title,
    // description: req.body.description,
    // ref_link_one: req.body.ref_link_one,
    // ref_link_two: req.body.ref_link_two,
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraphs(),
    ref_link_one: faker.internet.url(),
    ref_link_two: faker.internet.url(),
    user_id: user_id
    
  })
    .then(() => {
      res.send({ message: "Wilt Successfully Posted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.index = (req, res) => {
  Wilt.find().sort('-createdAt')
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Wilt.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Wilt not Found" });
      }
      else {
        const filtered = { 
          id: data._id,
          title: data.title,
          description: data.description,
          ref_link_one: data.ref_link_one,
          ref_link_two: data.ref_link_two,
        }
        res.send(filtered);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Getting Wilt" });
    });
};

exports.userWilts = (req, res) => {
  const user_id = req.query.user_id;

  Wilt.find({ user_id: user_id })
    .then((data) => {
     
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Getting Wilts" });
    });
  
}

exports.update = (req, res) => {
  const id = req.params.id;

  Wilt.findByIdAndUpdate(id, {
    title: req.body.title,
    description: req.body.description,
    ref_link_one: req.body.ref_link_one,
    ref_link_two: req.body.ref_link_two,
  })
    .then(() => {
      res.send({ message: "Wilt Successfully Updated" });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Wilt.findByIdAndDelete(id)
    .then(() => {
      res.send({ message: "Wilt Successfully Deleted" });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
