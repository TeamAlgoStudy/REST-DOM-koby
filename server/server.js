const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const apiRouter = require('./routes/apiRouter.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/api', apiRouter);

app.use((req, res) => {
  res.status(404).send('This is not the page you are looking for...');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log('errorObj=>', errorObj.message), err;
  return res.status(errorObj.status).json(errorObj.message);
});
app.listen(port, () => {
  console.log(`server is listening to ${port}`);
});
