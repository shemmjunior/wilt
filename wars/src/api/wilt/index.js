const Wilt = require("../../models/wilt.model");
exports.create = (req, res) => {
  Wilt.create({
    title: req.body.title,
    description: req.body.description,
    ref_link_one: req.body.ref_link_one,
    ref_link_two: req.body.ref_link_two,
  })
    .then(() => {
      res.send({ message: "Wilt Successfully Posted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.index = (req, res) => {
  Wilt.find()
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
      if (!data) res.status(404).send({ message: "Wilt not Found" });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Getting Wilt" });
    });
};

exports.userWilts = (req, res) => {
  const user_id = req.query.user_id;
  
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
      res.status(500).send(err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Wilt.findByIdAndDelete(id)
    .then(() => {
      res.send({ message: "Wilt Successfully Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
