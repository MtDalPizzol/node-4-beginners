const express = require('express');
const controller = require('./stormtroopers-controller');

var router = module.exports = express.Router();

router.get('/stormtroopers', controller.list);

router
  .route('/stormtrooper/:id')
  .get(controller.edit)
  .put(controller.update)
  .delete(controller.delete);

router
  .route('/stormtrooper')
  .get(controller.add)
  .post(controller.save);
