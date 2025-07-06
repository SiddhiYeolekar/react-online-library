import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Sun = () => <span>🌞</span>;
const Moon = () => <span>🌙</span>;

function NavBar() {
  const [dark, setDark] = React.useState(
    () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  const navClass = ({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`;

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="brand">Online Library</Link>
        <nav className="nav-links">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/books" className={navClass}>Browse Books</NavLink>
          <NavLink to="/add-book" className={navClass}>Add Book</NavLink>
          <button
            aria-label="Toggle theme"
            className="theme-toggle"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;