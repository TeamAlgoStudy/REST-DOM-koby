const models = require('../models/databaseModels');

const tasksController = {};

tasksController.getItems = async (req, res, next) => {
  console.log('in the getItems');

  try {
    res.locals.allItems = await models.Tasks.find();
    // console.log('res.locals.allItems', res.locals.allItems);
    return next();
  } catch (err) {
    console.error(
      'Error occurred from middleware tasksController.getItems ===>',
      err
    );
    return next(err.message);
  }
};
tasksController.deleteTask = async (req, res, next) => {
  console.log('in the deleteTask Controller');
  try {
    const taskToBeDeleted = req.body;
    console.log('Taskto be deleted in Controller', taskToBeDeleted);
    res.locals.deleteThisTask = await models.Tasks.findByIdAndDelete(
      taskToBeDeleted
    );
    return next();
  } catch (err) {
    console.error('err occurred in deleteTask controller', err);
    return next(err.message);
  }
};
tasksController.updateTask = async (req, res, next) => {
  console.log('in the UpdateTask Controller');

  console.log('udpate task REQ.BODY', req.body);

  const filter = { _id: req.body._id };
  const update = { task: req.body.task };

  try {
    const updatereq = await models.Tasks.findOneAndUpdate(filter, update, {
      new: true,
    });
    return next();
  } catch (err) {
    console.error('err occurred in deleteTask controller', err);
    return next(err.message);
  }
};
tasksController.addTask = async (req, res, next) => {
  console.log('in the addTask');
  try {
    console.log('req.body=>', req.body);
    // const test = {
    //   task: 'study',
    //   complete_status: false,
    //   target_date: '10/05/2024',
    // };
    res.locals.newTask = await models.Tasks.create(req.body);
    // console.log('res.locals.newTask===>', res.locals.newTask);
    return next();
  } catch (err) {
    console.log('from catch block!');
    console.error(
      'Error occurred from middleware tasksController.addTask ==> ',
      err
    );
    return next(err.message);
  }

  next();
};
module.exports = tasksController;
