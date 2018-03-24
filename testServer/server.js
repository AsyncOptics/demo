const aph = require('../node_modules/alpha/async_perf_hooks.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskController = require('../testDB/taskController.js');
const path = require('path');
const fs = require('fs');


app.set('view engine', 'ejs');

app.use(bodyParser())

app.get('/', taskController.findTasks, (req, res) => {
	res.render(path.join(__dirname, '../views/index'), {
    tasks: res.locals.tasks
  });
})

app.post('/task', taskController.createTask, taskController.writeToFile, (req, res) => {
	res.redirect('/')
});



app.listen(8888);


// 
// fs.writeFile('../testWrite.json','hello world!!!', (err) => {
//   if (err) console.log('ERR');
//   process._rawDebug('write done');
// })
