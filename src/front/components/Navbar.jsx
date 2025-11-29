import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm starwars-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
  <img
    src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
    alt="Star Wars Logo"
    className="sw-logo"
  />
</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/characters">Characters</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/starships">Starships</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planets">Planets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacts</Link>
            </li>

          </ul>

          <form className="d-flex">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
          </form>

        </div>
      </div>
    </nav>
  );
};
