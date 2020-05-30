import Layout from '../components/layout'
import Link from 'next/link'

export default function OurServices() {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h1 className="section-heading">Our Services</h1>
          <div className="row">
            <div className="column">
            <img className="logo-image" src="images/logo.png" />
              <p>
                We offer high quality aerial photos and videos for projects of all kinds<br/>
                Here are examples of the sort of services we offer<br/>
                Whatever the project, we'll work with you to provide a bespoke service that suits your needs
              </p>
            </div>
          </div>
          <div className="row services-row">
            <div className="one-half column">
              <h3>Parties & Weddings</h3>
              <p>An eye in the sky to capture the drama of events as they unfold</p>
              <img className="u-max-full-width" src="images/wedding.jpg" />
            </div>
            <div className="one-half column">
              <h3>Real Estate</h3>
              <p>Promotional imagery of your buildings from a unique angle</p>
              <img className="u-max-full-width" src="images/house.jpg" />
            </div>
          </div>
          <div className="row services-row">
            <div className="one-half column">
              <h3>Building Surveys</h3>
              <p>
                A fast, affordable, low risk way of inspecting hard to reach areas.
                We'll provide the imagery for your continued review
              </p>
              <img className="u-max-full-width" src="images/survey.jpg" />
            </div>
            <div className="one-half column">
              <h3>Construction</h3>
              <p>
                Monitor the construction process from commencement to completion.
                Images, videos, and time-lapse packages
              </p>
              <img className="u-max-full-width" src="images/construction.jpg" />
            </div>
          </div>
          <div className="row services-row">
            <div className="column">
              <h3>Bespoke Aerial Photography & Video</h3>
              <p>
                We're happy to work with you for all your aerial imaging needs.<br/>
                Don't hesitate to contact us, and we can discuss your requirements<br/><br/>
                <Link href="contact"><a className="button button-primary">Enquire</a></Link>
              </p>
              <img className="u-max-full-width" src="images/drone.jpg" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}