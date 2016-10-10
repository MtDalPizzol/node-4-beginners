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
        content: '../features/stormtroopers/stormtroopers-list'
      }

    };

    res.render('layouts/default', data);

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
        content: '../features/stormtroopers/stormtroopers-form'
      }

    };

    return res.render('layouts/default', data);


  },


  save: function(req, res, next){
    res.send('Storm trooper added!');
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
