require('dotenv').config();
require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const express = require('express');
const app = express()
const { PORT, SESSION_SECRET } = process.env;

const logger = require('morgan');
const path = require('path');

//!!!!routes
const loginRouter = require('./src/routes/user')
const MainRouter = require('./src/routes/drug')


//!!!!!!!middlewares
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//!!cookie session прописать



//!!!!!!!!!!!!!! app.use()
app.use('/', loginRouter);
app.use('/', MainRouter)





app.listen(PORT, () => {
   console.log(`server started PORT: ${PORT}`);
 });
 