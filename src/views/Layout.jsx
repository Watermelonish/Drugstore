const React = require("react");

module.exports = function Layout({ children, newUser, theUser }) {
  console.log(theUser, "asassssssssss");
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          defer
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <link defer rel="stylesheet" href="/css/application.css" />
        <script defer src="/js/mainShop.js" />

        <title>pharmacy</title>
      </head>

      <body>
        <header role="banner">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  defer
                  src="/img/logo.jpg"
                  alt="logo"
                  width="30"
                  height="24"
                ></img>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {newUser ? (
                    <li className="nav-item">
                      <a defer href="/user" className="navbar-brand active">
                        Личный кабинет{" "}
                      </a>
                    </li>
                  ) : (
                    <div>
                      <a defer href="/login" className="navbar-brand">
                        Вход/Регистрация{" "}
                      </a>
                    </div>
                  )}
                  <li className="nav-item">
                    <a
                      className="navbar-brand active"
                      aria-current="page"
                      href="/main"
                    >
                      Главная
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="navbar-brand active position-relative"
                      aria-current="page"
                      href="/drug"
                    >
                      Корзина
                      <span class="position-absolute top-0 start-110 translate-middle badge  bg-success">
                        {typeof theUser != "undefined"
                          ? theUser[0]["Drugs.id"] != null
                            ? `${theUser.length}`
                            : null
                          : null}
                      </span>
                    </a>
                  </li>
                  {newUser ? (
                    <li className="nav-item">
                      <a className="navbar-brand" href="/logout">
                        Выйти
                      </a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </nav>
        </header>

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
