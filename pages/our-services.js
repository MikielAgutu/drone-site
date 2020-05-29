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
              <h3>Building Surveys</h3>
              <p>Description</p>
              <img className="u-max-full-width" src="images/survey.jpg" />
            </div>
            <div className="one-half column">
              <h3>Construction</h3>
              <p>Description</p>
              <img className="u-max-full-width" src="images/construction.jpg" />
            </div>
          </div>
          <div className="row services-row">
            <div className="one-half column">
              <h3>Parites & Weddings</h3>
              <p>Description</p>
              <img className="u-max-full-width" src="images/wedding.jpg" />
            </div>
            <div className="one-half column">
              <h3>Real Estate</h3>
              <p>Description</p>
              <img className="u-max-full-width" src="images/house.jpg" />
            </div>
          </div>
          <div className="row services-row">
            <div className="column">
              <h3>Bespoke Aerial Photography & Video</h3>
              <p>Description</p>
              <img className="u-max-full-width" src="images/drone.jpg" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}