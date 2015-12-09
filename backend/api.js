var Events = require('./Events.js');

exports.events = function (req, res) {
  res.json(Events);
};

exports.event = function (req, res) {
  res.json(Events[req.param.eventId]);
};