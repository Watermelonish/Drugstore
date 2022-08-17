require("dotenv").config();
require("@babel/register");

const ReactDOMServer = require("react-dom/server");
const React = require("react");

const express = require('express');
const session = require('express-session');

const app = express()
const { PORT, SESSION_SECRET } = process.env;
const logger = require("morgan");
const path = require("path");


//!!!!routes
const loginRouter = require('./src/routes/user')
const MainRouter = require('./src/routes/drug')
const logoutRouter = require('./src/routes/logout')
const setWidth = require('./src/routes/setWidth')

const FileStore = require('session-file-store')(session);


//!!!!!!!middlewares
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//!!cookie session прописать
const sessionConfig = {
  name: 'newUser', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'shamil', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};

app.use(session(sessionConfig));
//!!!!!!!!!!!!!! app.use()
app.use('/', loginRouter);
app.use('/', MainRouter)
app.use('/', logoutRouter)
app.use('/', setWidth)


//! !!!routes
const registerRouter = require("./src/routes/user");


//! !!!!!!middlewares
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! !cookie session прописать

//! !!!!!!!!!!!!! app.use()




app.use("/", registerRouter);






app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
