const React = require('react');

module.exports = function Layout({ children, newUser }) {
  return (
    <html lang="en">

      <head>
      <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/css/application.css" />

        {/* <script defer src="/js/application.js" /> */}

        <title>pharmacy</title>
      </head>

      <body>
         <></>
        {/* <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
          <div className="max-w-700 center wrap-float">
            <nav className="clearfix mar-b-1">
              {newUser? (<div><a href = '/logout'> 
                Log out
              </a>
              </div>
              ):
              (<div><a defer href = '/login' >Log In        </a>
                
                            
                <a defer href = '/registration'>       Sign Up</a> 
                </div>)
                }
                
                
      
            
              <ul className="no-bullets no-margin no-padding right">

                <li className="pipe-separate t-light-green left"><a href="/">home</a></li>
              </ul>
            </nav>

            <div className="logo-container">
              <img className="logo center block" src="/images/logo.png" alt="logo" />
              <h1>Broccoli Blog</h1>
            </div>
          </div>
        </header> */}
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">
            {children}
          </div>
        </div>
      </body>

    </html>
  );
};
