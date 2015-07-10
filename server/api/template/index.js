'use strict';

var express = require('express');
var controller = require('./template.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/project/:id', controller.projectIndex);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/upload/:id', controller.upload);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;