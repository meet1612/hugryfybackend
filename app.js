var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cusin=require('./routes/cusine_route');
var cusin1=require('./routes/cusine1_route');
var dish=require('./routes/dish_route');
var dish1=require('./routes/dish1_route');
var bill=require('./routes/bill_route');
var bdetail=require('./routes/bdetail_route');
var customer=require('./routes/customer_route');
var signup=require('./routes/signup_route');
var order=require('./routes/order_route');
var orderdetail=require('./routes/orderdetail_route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cusin',cusin);
app.use('/cusin1',cusin1);
app.use('/dish',dish);
app.use('/dish1',dish1);
app.use('/bill',bill);
app.use('/bdetail',bdetail);
app.use('/customer',customer);
app.use('/signup',signup);
app.use('/order',order);
app.use('/orderdetail',orderdetail);
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

module.exports = app;
