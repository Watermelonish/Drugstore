const React = require('react');

module.exports = function Layout({ children, newUser }) {
  return (
    <html lang="en">

      <head>
      <meta charSet="UTF-8" />
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
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

            {children}
            <script
              defer
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
              crossOrigin="anonymous"
            />
      </body>

    </html>
  );
};
