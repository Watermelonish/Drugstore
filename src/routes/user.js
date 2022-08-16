// const ReactDOMServer = require('react-dom/server');
// const React = require('react');
const renderTemplate = require('../../lib/renderTemplate');

const router = require('express').Router();
const bcrypt = require('bcrypt');

const Login = require('../views/Login')


router.get('/login', (req, res) => {
 renderTemplate(Login, {}, res)
 })



 module.exports = router;
