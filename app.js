var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const test1 = ()=>{}
const test2 = ()=> {}
const test3 = ()=> {}
const test4 = ()=> {}
const test5 = ()=> {}
const test6 = ()=> {}
const test7 = ()=> {}
const test8 = ()=> {}
const test9 = ()=> {}
const test10 = ()=> {}
const test11 = ()=> {}
const test12 = ()=> {}
const test13 = ()=> {}
const test14 = ()=> {}
const test15 = ()=> {
const test16 = ()=> {

  console.log('hotfix console')

}

const test17 = ()=> {}
const test18 = ()=> {}
const test19 = ()=> {}
const test20 = ()=> {}
const test21 = ()=> {}
const test22 = ()=> {}
const hotfix1 = {};
const hotfix2 = {};
const hotfix3 = {};
const hotfix4 = {};
const hotfix5 = {};
const hotfix6 = {};
const hotfix7 = {};
const hotfix8 = {};
const hotfix9 = {};


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
