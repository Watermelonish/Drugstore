router.get('/login', (req, res) => {
    const logPage = React.createElement(Login, {})
    const html = ReactDOMServer.renderToStaticMarkup(logPage);
    res.write('<!DOCTYPE html>');
    res.end(html)
  }).post('/login', async (req, res) => {
    const {login, password} = req.body;
    console.log(login, password)
    try{
      const user = await User.findOne({where:{ login }});
      console.log('THE USEEEEER',user)
      const passCheck = await bcrypt.compare(password, user.password);
     if (passCheck){
       req.session.newUser = user.login;
       req.session.save(() => {
         res.redirect('/');
       });
     }else{
     res.redirect('/login')
    }
   }catch(error){
     const message = "User not found."
     const source = '/login'
     const logPage = React.createElement(Error, {source, message, error})
     const html = ReactDOMServer.renderToStaticMarkup(logPage);
     res.write('<!DOCTYPE html>');
     res.end(html)
    }
  })
  router.get('/logout', (req, res) => {
   try {
     if (req.session.newUser) {
       // * 20 убийство куки если она есть и сессии тоже
       // * аналогия с req.session.save
       req.session.destroy(() => {
         res.clearCookie('newUser');
         res.redirect('/');
       });
     } else {
       // ! Защита ручки от вхождения в неё
       // * 21 см в loginControllers
       res.redirect('/login');
     }
   } catch (error) {
     res.send(`Error ------> ${error}`);
   }
 });