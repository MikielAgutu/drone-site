import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="section hero">
        <div className="container hero-container">
          <div className="row">
            <div className="one-half column">
              <h1 className="hero-title">RM Aerial</h1>
              <h4 className="hero-heading">
                Bespoke aerial drone photography
                <br/>
                Simple
                <br/>
                Convenient
                <br/>
                Affordable
              </h4>
              <Link href="contact"><a className="button button-primary">Enquire</a></Link>
              <Link href="portfolio"><a className="button">Portfolio</a></Link>
            </div>
            <div className="one-half column hero-images">
              <img className="hero-image" src="./images/drone.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="section elevator-pitches">
        <div className="container">
          <div className="row">
            <div className="one-third column elevator-pitch">
              <h2 className="elevator-pitch-multiplier">🚁</h2>
              <h4 className="elevator-pitch-heading">Bespoke Drone Photography</h4>
              <p className="elevator-pitch-description">Photography and videos, commercial and non-commercial - we work closely with our clients to understand and meet their needs.</p>
            </div>
            <div className="one-third column elevator-pitch">
              <h2 className="elevator-pitch-multiplier">⌛</h2>
              <h4 className="elevator-pitch-heading">Fast & Cost Effective</h4>
              <p className="elevator-pitch-description">We pride ourselves on a quick turnaround. Our solutions are simple and can be tailored to suit any budget.</p>
            </div>
            <div className="one-third column elevator-pitch">
              <h2 className="elevator-pitch-multiplier">❤️</h2>
              <h4 className="elevator-pitch-heading">100% Customer Satisfaction</h4>
              <p className="elevator-pitch-description">Check our portfolio and reviews for more</p>
            </div>
          </div>
          <div className="row">
            <h4>
            <strong>Tailored to suit your needs</strong><br />
            </h4>
            <h5>
            Commercial Property |
            Construction Sites |
            Estate Agents |
            Parties & Weddings
            <br/>
            <i>Bespoke arrangements based on your needs</i>
            </h5>
          </div>
          <div className="row">
            <h4>
            <strong>Based in Cambridgeshire</strong><br />
            </h4>
            <h5>
            Cambridge |
            Peterborough |
            Bury St Edmunds |
            St Neot's
            <br/>
            <i>Providing services to all of Cambridgeshire</i>
            </h5>
          </div>
        </div>
      </div>
      <div className="section border-content">
        <div className="container">
          <h3 className="section-heading">Testimonials</h3>
          <p className="section-description">
            <i>'RM Aerial is a great company'</i> - Joe Bloggs <br/>
            <i>'Amazing work!'</i> - Alice Aardvark
          </p>
          <a className="button button-primary" href="#">Enquire</a>
        </div>
      </div>
      <div className="section categories">
        <div className="container">
          <h3 className="section-heading">Portfolio</h3>
          <p className="section-description">See samples of our work</p>
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
