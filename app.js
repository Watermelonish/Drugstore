require("dotenv").config();
require("@babel/register");

const ReactDOMServer = require("react-dom/server");
const React = require("react");

const express = require('express');
const app = express()
const { PORT, SESSION_SECRET } = process.env;
const logger = require("morgan");
const path = require("path");


//!!!!routes
const loginRouter = require('./src/routes/user')
const MainRouter = require('./src/routes/drug')


const session = require('express-session');
const FileStore = require('session-file-store')(session);


//!!!!!!!middlewares
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//!!cookie session прописать



//!!!!!!!!!!!!!! app.use()
//app.use('/', loginRouter);
app.use('/', MainRouter)




//! !!!routes
const registerRouter = require("./src/routes/user");


//! !!!!!!middlewares
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! !cookie session прописать

//! !!!!!!!!!!!!! app.use()

const sessionConfig = {
  name: "UserRegister", // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? "SecterPass", // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms
    httpOnly: true, // * куки только по http
  },
};

// * 7 подключение мидлвара для куки
app.use(session(sessionConfig));

//app.use("/", homeRouter);
app.use("/login", registerRouter);


// * 19 Ручка для выхода пользователя с уничтожением куки и файла сессии
app.get("/logout", async (req, res) => {
  try {
    if (req.session.newUser) {
      // * 20 убийство куки если она есть и сессии тоже
      // * аналогия с req.session.save
      req.session.destroy(() => {
        res.clearCookie("BlogCookie");
        res.redirect("/");
      });
    } else {
      // ! Защита ручки от вхождения в неё
      // * 21 см в loginControllers
      res.redirect("/");
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
