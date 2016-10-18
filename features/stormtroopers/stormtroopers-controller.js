module.exports = {


  list: function (req, res, next) {

    var data = {

      metadata: {
        title: 'Death Star - Stormtroopers list'
      },

      text: {
        title: 'Stormtroopers list'
      },

      partials: {
        content: '../features/stormtroopers/stormtroopers-list.html'
      }

    };

    res.format({
      json: function() {
        res.json({
          data: data,
          stormtroopers: ['st1', 'st2', 'st3', 'st4']
        });
      },
      html: function() {
        res.render('layouts/default.html', data);
      }
    });

  },


  add: function (req, res, next) {

    var data = {

      metadata: {
        title: 'Death Star - Add stormtrooper'
      },

      text: {
        title: 'Add stormtrooper'
      },

      partials: {
        content: '../features/stormtroopers/stormtroopers-form.html'
      }

    };

    return res.render('layouts/default.html', data);

  },


  save: function(io) {
    return function(req, res, next){

      console.log(req.body);

      io.sockets.emit('stormtrooper:added', {
          status: 'green',
          title: 'New stormtrooper added! His name is ' + req.body.name + '!',
          message: 'A new badass stormtrooper was successfuly hired to the Death Star taskforce! Contact him via ' + req.body.email + '.'
      });

    };
  },


  edit: function(req, res, next) {
    res.send('Edit stormtrooper ' + req.params.id);
  },


  update: function(req, res, next) {
    res.send('Changes saved for stormtrooper ' + req.params.id + '!');
  },


  delete: function(req, res, next) {
    res.send('Stormtrooper ' + req.params.id  + ' was deleted!');
  }

};
