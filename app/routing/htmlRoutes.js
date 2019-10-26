console.log('apiRoutes.js working')

module.exports = function (app) {
  app.get('/', function(req, res){
    res.redirect('/home.html');
  });
}