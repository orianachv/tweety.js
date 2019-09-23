const express = require('express');
const morgan = require('morgan');

const app = express();

app.use((req, res, next) => {
  res.send('entre a una ruta');
  next();
});
app.use(morgan('tiny'));

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
