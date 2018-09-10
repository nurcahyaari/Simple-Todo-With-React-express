'use strict'

const express = require('express');
const router = express.Router();

let controller = require('../app/controller');

/* GET home page. */
router.post('/', controller.home.postTodo);
router.get('/', controller.home.getTodo);

router.delete('/', controller.home.removeTodo);

module.exports = router;
