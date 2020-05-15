import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="section hero">
        <div className="container hero-container">
          <div className="row">
            <div className="one-half column">
              <h1 className="hero-heading">RM Ariel Photography</h1>
              <h4 className="hero-heading">Professional photography based in Cambridgeshire</h4>
              <a className="button button-primary" href="#">Enquire</a>
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
              <h5 className="elevator-pitch-heading">Drone Photography</h5>
              <p className="elevator-pitch-description">Utilize our drone photography services</p>
            </div>
            <div className="one-third column elevator-pitch">
              <h2 className="elevator-pitch-multiplier">⌛</h2>
              <h5 className="elevator-pitch-heading">Fast & Cost Effective</h5>
              <p className="elevator-pitch-description">Our services have a quick turnaround, and are more affordable than alternative ariel photography solutions</p>
            </div>
            <div className="one-third column elevator-pitch">
              <h2 className="elevator-pitch-multiplier">❤️</h2>
              <h5 className="elevator-pitch-heading">100% Customer Satisfaction</h5>
              <p className="elevator-pitch-description">Check our portfolio and reviews for more</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section get-help">
        <div className="container">
          <h3 className="section-heading">Need help getting started?</h3>
          <p className="section-description">Skeleton is an amazingly easy place to start with responsive development. If you want to learn more, just visit the documentation!</p>
          <a className="button button-primary" href="http://getskeleton.com">View Skeleton Docs</a>
        </div>
      </div>
      <div className="section categories">
        <div className="container">
          <h3 className="section-heading">Responsive Images</h3>
          <p className="section-description">Skeleton images sit easily in grid with .u-max-full-width class. I suggest exploring solution to serving different images based on device size.</p>
          <div className="row">
            <div className="one-half column category">
              <img className="u-max-full-width" src="images/placeholder.png" />
            </div>
            <div className="one-half column category">
              <img className="u-max-full-width" src="images/placeholder.png" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
    );
}
