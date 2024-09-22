import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow top-0">
      <div className="container">
        <a className="navbar-brand" href="#">
          GFG DocManager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Documents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/AddDocument">
                Adicionar Novo Documento
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
