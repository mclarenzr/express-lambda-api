var express = require('express');
var app = express();
var path = require('path');
var userController = require('./controllers/userControllers');
var jsonwebtoken = require('jsonwebtoken');

var customersRouter = require('./routes/customers');
app.use(express.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// JWT setup
app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    console.log(req.headers.authorization);
    
     jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'mysecretorprivatekey', (err, decode) => {       
        console.log(decode);
      if (err) req.user = undefined;
         req.user = decode;
         next();
     }); 
  } else {
      req.user = undefined;
      next();
  }
});


//Default Routes
app.use('/customers', customersRouter);

//specifying the version
app.use('/v1/customers', customersRouter);

//dummy root route
app.get('/', function(req, res) {
  res.send({
    "Output": "Hello Bunlong!!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});



app.get('/auth', userController.login);

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
