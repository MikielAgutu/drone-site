import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="section hero hero-background">
        <div className="container hero-container">
          <div className="row">
            <div className="one-half column">
              <div className="hero-content">
                <h1 className="hero-title">
                  RM Aerial
                </h1>
                <p>
                  Bespoke aerial drone photography
                  <br/>
                  Simple
                  <br/>
                  Convenient
                  <br/>
                  Affordable
                </p>
                <Link href="contact"><a className="button button-primary">Enquire</a></Link>
                <Link href="portfolio"><a className="button button-secondary">Portfolio</a></Link>
              </div>
            </div>
            <div className="one-half column"></div>
          </div>
        </div>
      </div>
      <div className="section elevator-pitches">
        <div className="container">
          <div className="row">
            <div className="one-third column elevator-pitch">
              <h2 className="elevator-pitch-multiplier">📷</h2>
              <h4 className="elevator-pitch-heading">Aerial Photos & Videos</h4>
              <p className="elevator-pitch-description">Photography and videos, commercial and non-commercial - we work closely with our clients to understand and meet their needs.</p>
            </div>
            <div className="one-third column elevator-pitch">
              <h2 className="elevator-pitch-multiplier">⌛</h2>
              <h4 className="elevator-pitch-heading">Fast & Cost Effective</h4>
              <p className="elevator-pitch-description">We pride ourselves on a quick turnaround. Our solutions are simple and can be tailored to suit any budget.</p>
            </div>
            <div className="one-third column elevator-pitch">
              <h2 className="elevator-pitch-multiplier">✔️</h2>
              <h4 className="elevator-pitch-heading">Quality & Professionalism</h4>
              <p className="elevator-pitch-description">Our operators are qualified by the Civil Aviation Authority, and fully insured.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section border-content">
        <div className="container">
        <div className="row">
          <div className="one-half column">
              <h3>
                Our services
              </h3>
              <p>
                RM Aerial produces high quality aerial photography and videography for a variety of purposes
              </p>
              <strong>
              Commercial Property |
              Construction Sites |
              Estate Agents |
              Parties & Weddings
              </strong>
              <br/>
              <br/>
              <p>Whatever the requirements, we're happy to work with clients to meet their needs</p>
            </div>
            <div className="one-half column">
              <h3>
              Based in Cambridgeshire
              </h3>
              <p>
                We're based in Cambridge, and we work with clients throughout Cambridgeshire
              </p>
              <Link href="contact"><a className="button button-primary button-large">Enquire</a></Link>
                <Link href="portfolio"><a className="button button-secondary button-large">Our Services</a></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="section categories">
        <div className="container">
          <div className="row">
            <h3 className="section-heading">Portfolio</h3>
            <p>See examples of our work</p>
            <Link href="portfolio"><a className="button button-secondary">See more</a></Link>
          </div>
          <div className="row">
            <div className="one-half column category">
              <img className="u-max-full-width" src="images/cambridge.jpg" />
            </div>
            <div className="one-half column category">
              <img className="u-max-full-width" src="images/london.jpg" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
    );
}
