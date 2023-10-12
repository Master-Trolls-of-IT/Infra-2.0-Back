var express = require('express');
var cookieParser = require('cookie-parser');

var usersRouter = require('./routes/users');

var app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log('New Request : ', req.method, ' ', req.path)
  next()
})

app.use('/users', usersRouter);

app.listen(80, () => {
  console.log('listening at port 80')
})
module.exports = app;
