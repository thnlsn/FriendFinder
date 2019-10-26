console.log('apiRoutes working')

const friends = require('../data/friends');

module.exports = function (app) {
  //Get friends data
  app.get('/api/friends', function(req, res) {
      res.json(friends);
  });
}