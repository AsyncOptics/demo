const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoURI = 'mongodb://alektest:nnn123@ds249798.mlab.com:49798/iteration_deep';
mongoose.connect(mongoURI);

const taskSchema = new Schema({
	task: { type: String, required: true},
	createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Task', taskSchema);