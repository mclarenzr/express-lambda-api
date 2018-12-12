var express = require('express');
var app = express();


var usersRouter = require('./routes/users');
app.use(express.json());
app.use('/users', usersRouter);


/*app.get('/', function(req, res) {
  res.send({
    "Output": "Hello Bunlong!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
