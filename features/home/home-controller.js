module.exports = {

  dashboard: function(req, res, next) {
    // res.send('Welcome to the Death Star, Modafoca!');

    var data = {

      metadata: {
        title: 'Death Star - Dashboard'
      },

      text: {
        title: 'Welcome to the Death Star Dashboard!'
      },

      partials: {
        content: '../features/home/dashboard'
      }

    };

    return res.render('layouts/default', data);

  }

};
