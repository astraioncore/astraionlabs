import Galaxy from '../components/Galaxy/Galaxy.jsx'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-canvas">
          <Galaxy density={0.8} autoCenterRepulsion={2} mouseInteraction={true} mouseRepulsion={true} twinkleIntensity={0.4} saturation={0.2} hueShift={140} />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Astraion Labs</p>
          <h1>Building software solutions.</h1>
          <p className="subtitle">
            We design, engineer, and ship software that helps businesses and
            people work better — from concept to production.
          </p>
        </div>

        <div className="hero-fade" />
      </div>

      <section className="about" id="company">
        <div className="about-inner">
          <h2>Company</h2>
          <p>
            Astraion Labs is the software brand of Astraion Core LLP, a
            limited liability partnership incorporated in India in 2026
            (LLPIN: ADA-7410). Under this name, we design, engineer, and
            ship software products — from early concept through to
            production — for web, mobile, and cloud.
          </p>

          <div className="pillars">
            <div className="pillar">
              <h3>Product Engineering</h3>
              <p>End-to-end design and development of software products, built for scale and maintainability.</p>
            </div>
            <div className="pillar">
              <h3>Platform &amp; Infrastructure</h3>
              <p>Cloud-native architecture, APIs, and infrastructure that keep software fast and reliable.</p>
            </div>
            <div className="pillar">
              <h3>Design &amp; Experience</h3>
              <p>Interfaces and experiences crafted with the same care as the systems behind them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="products-inner">
          <h2>Products</h2>
          <p className="products-intro">Software built under the Astraion Labs brand.</p>

          <div className="product-card">
            <div className="product-card-head">
              <h3>Relay</h3>
              <span className="badge-soon">Coming soon</span>
            </div>
            <p>
              An activity-matching app that connects people with partners
              for sports and recreational activities — from tennis and
              pickleball to cycling and pilates.
            </p>

            <div className="store-badges">
              <div className="store-badge">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none">
                  <rect x="6" y="2" width="12" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="18" r="0.9" fill="currentColor" />
                </svg>
                <span>App Store</span>
              </div>
              <div className="store-badge">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M10.5 9l5 3-5 3V9z" fill="currentColor" />
                </svg>
                <span>Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
