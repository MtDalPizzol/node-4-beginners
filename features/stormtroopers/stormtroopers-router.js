const express = require('express');
const controller = require('./stormtroopers-controller');

var router = express.Router();

module.exports = function(io) {

  router.get('/stormtroopers', controller.list);

  router
    .route('/stormtrooper/:id')
    .get(controller.edit)
    .put(controller.update)
    .delete(controller.delete);

  router
    .route('/stormtrooper')
    .get(controller.add)
    .post(controller.save(io));

  return router;

};
