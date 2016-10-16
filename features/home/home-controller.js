module.exports = {

  dashboard: function(req, res, next) {

    var data = {

      metadata: {
        title: 'Death Star - Dashboard'
      },

      text: {
        title: 'About node4beginners'
      },

      partials: {
        content: '../features/home/dashboard.html'
      }

    };

    return res.render('layouts/default.html', data);

  }

};
