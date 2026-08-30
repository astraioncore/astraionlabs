import { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout() {
  const year = new Date().getFullYear()
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [hash, pathname])

  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="brand">
          Astraion&nbsp;Core
        </Link>

        <nav className="site-nav">
          <Link to="/#company">About</Link>
          <Link to="/#products">Products</Link>
          <a href="mailto:connect@astraionlabs.com">Contact</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand small">Astraion Labs</span>
            <span className="footer-legal">
              Astraion Core LLP · LLPIN ADA-7410 · Incorporated 2026 · India
            </span>
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
