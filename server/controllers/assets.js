const Asset = require('../models').Asset;

module.exports = {
  create(req, res) {
    return Asset.create({
      symbol: req.body.symbol,
      name: req.body.name
    })
      .then(asset => res.status(201).send(asset))
      .catch(error => res.status(400).send(error));
  }
};
