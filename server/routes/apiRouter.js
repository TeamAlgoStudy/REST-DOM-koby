const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.getItems, (req, res) => res.status(200).json(res.locals.allItems));

router.post('/addTask', tasksController.addTask, (req, res) => {
  res.status(200).send('addTask successful');
});

router.delete('/deleteTask', tasksController.deleteTask, (req, res) => {
  res.status(200).send('deleteTask successful');
});
router.put('/updateTask', tasksController.updateTask, (req, res) => {
  res.status(200).send('updateTask successful');
});

module.exports = router;
