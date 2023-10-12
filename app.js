var express = require('express');
var cookieParser = require('cookie-parser');

var usersRouter = require('./routes/users');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log('New Request : ', req.method, ' ', req.path)
  next()
})

app.use('/users', usersRouter);

app.listen(8080, () => {
  console.log('listening at port 8080')
})
module.exports = app;
