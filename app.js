var express = require('express');
var app = express();


var customersRouter = require('./routes/customers');
app.use(express.json());

//Default Routes
app.use('/customers', customersRouter);

//specifying the version
app.use('/v1/customers', customersRouter);

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello Bunlong!"
  });
});

/*app.post('/', function(req, res) {
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
