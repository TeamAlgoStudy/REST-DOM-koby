const mongoose = require('mongoose');

require('dotenv').config();

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to MongoDB'))
  .catch((err) => console.log('error connecting to MongoDB', err));

const Schema = mongoose.Schema;
const tasksSchema = new Schema({
  task: String,
  complete_status: Boolean,
  target_date: Date,
});

const Tasks = mongoose.model('tasks', tasksSchema);

/*
// database structure:

Task | complete_status | target_Date
homework | True | 09/05/2024
STRING | BOOLEAN | DATE

*/

module.exports = { Tasks };
