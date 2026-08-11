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

      <section className="about">
        <div className="about-inner">
          <h2>What we do</h2>
          <p>
            Astraion Labs is a software development studio. We build
            products across web, mobile, and cloud — combining thoughtful
            design with reliable engineering to turn ideas into software
            that people can depend on.
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
    </section>
  )
}
