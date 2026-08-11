import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  const year = new Date().getFullYear()

  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="brand">
          Astraion&nbsp;Labs
        </Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand small">Astraion Labs</span>
            <span className="footer-legal">Astraion Core LLP</span>
          </div>

          <nav className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <a href="mailto:connect@astraionlabs.com">connect@astraionlabs.com</a>
          </nav>

          <div className="footer-copy">
            © {year} Astraion Core LLP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
