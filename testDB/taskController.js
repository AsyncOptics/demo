const Task = require('./TestModel.js');
const fs = require('fs');

const taskController = {};

taskController.createTask = function(req, res, next) {
	Task.create({
		task: req.body.task
	}, (err, task) => {
		if (err) console.log(err);
		res.locals.newTask = task
		next();
	});
};

taskController.writeToFile = function(req, res, next) {
	fs.writeFile('testWrite.json', JSON.stringify(res.locals.newTask), (err) => {
  	if (err) console.log('ERR');
  	process._rawDebug('write done');
  	next()
	})
}

taskController.findTasks = function(req, res, next) {
	Task.find({}, (err, task) => {
		if (err) console.log(err);
		else {
			res.locals.tasks = task;
			next();
		}
	});
};

module.exports = taskController;
