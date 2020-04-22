const passport = require('passport');


module.exports = app => {
  //we never setup the link to the string 'google', passport associates this for us with the new GoogleStrategy()
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));


  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  //test auth route
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
