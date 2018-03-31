require('../../alpha/async_perf_hooks.js');
const path = require('path');
const {pkgMonitor} = require('../../alpha/packageMonitor.js');
pkgMonitor(path.join(__dirname, '../package.json'));

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskController = require('../testDB/taskController.js');

const fs = require('fs');

app.set('view engine', 'ejs');

app.use( (req, res, next) => {
  // process._rawDebug(req.method, req.url);
  next();
})
// app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', taskController.findTasks, (req, res) => {
	res.render(path.join(__dirname, '../views/index.ejs'), {
    tasks: res.locals.tasks
  });
})

app.post('/task', taskController.createTask, taskController.writeToFile, (req, res) => {
	res.redirect('/')
});

app.listen(8888, () => {
  process._rawDebug(`Demo Server setup, listening to PORT 8888`);
});


//
// fs.writeFile(path.join(__dirname, '../testWrite.json'),'hello world!!!', (err) => {
//   if (err) console.log('ERR');
//   process._rawDebug('write done');
// })
// fs.readFile(path.join(__dirname, '../testWrite.json'), (err, data) => {
//   process._rawDebug(__dirname);
//   process._rawDebug(data.toString());
// })
