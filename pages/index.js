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
                <img className="logo-image" src="images/logo.png" />
                <br/>
                <h4>
                  Practical
                  <br/>
                  Bespoke
                  <br />
                  First-Class Aerial Imaging
                </h4>
                <Link href="contact">
                  <a className="button button-primary">Enquire</a>
                </Link>
                {" "}
                <Link href="portfolio">
                  <a className="button button-secondary">Portfolio</a>
                </Link>
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
              <p className="elevator-pitch-description">
                Aerial imaging for projects of all kinds. Building surveys, real estate, promotional videos, weddings, and more.
              </p>
            </div>
            <div className="one-third column elevator-pitch">
              <h2 className="elevator-pitch-multiplier">⌛</h2>
              <h4 className="elevator-pitch-heading">Fast & Cost Effective</h4>
              <p className="elevator-pitch-description">
              With drone technology we provide a fast and cost effective service. Our work is uncomplicated and can be tailored to suit your budget.
              </p>
            </div>
            <div className="one-third column elevator-pitch">
              <h2 className="elevator-pitch-multiplier">✔️</h2>
              <h4 className="elevator-pitch-heading">Quality & Professionalism</h4>
              <p className="elevator-pitch-description">
                Our operators are licensed by the Civil Aviation Authority, and fully insured.
              </p>
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
                We offer high quality aerial photos and videos for projects of all kinds
              </p>
              <strong>
              Building Surveys |
              Advertising |
              Estate Agents |
              Parties & Weddings |
              And More...
              </strong>
              <br/>
              <br/>
              <p>Whatever the project, we'll work with you to provide a bespoke service that suits your needs</p>
            </div>
            <div className="one-half column">
              <h3>
              Based in Cambridgeshire
              </h3>
              <p>
                We primarily travel to sites throughout Cambridgeshire. However we are happy to provide a
                quote for any job in the UK.
              </p>
              <Link href="contact">
                <a className="button button-primary button-large">Enquire</a>
              </Link>
              {" "}
              <Link href="our-services">
                <a className="button button-secondary button-large">Our Services</a>
              </Link>
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
              <img className="u-max-full-width" src="images/portfolio-1.jpg" />
            </div>
            <div className="one-half column category">
              <img className="u-max-full-width" src="images/portfolio-3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
    );
}
