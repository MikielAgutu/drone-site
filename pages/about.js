import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h1 className="section-heading">About</h1>
          <p className="section-description">
            RM Aerial was founded in 2020 by two entrepreneurs who saw an opportunity to offer a new way of capturing imagery.<br/>
            Using drone technology, we envisioned a way of providing practical, fast, and low-risk aerial imagery services.<br/>
            With drones we can capture images with a level of speed and efficiency traditional methods like helicopters and scaffolding rigs cannot match.
          </p>
          <div className="row services-row">
            <div className="one-half column">
            <img className="u-max-full-width" src="images/headshot.jpg" />
              <h3>Rhys Jones</h3>
              <p>With a background in building control, Rhys knows building sites like the back of his hand</p>

            </div>
            <div className="one-half column">
            <img className="u-max-full-width" src="images/headshot.jpg" />
              <h3>Mikiel Agutu</h3>
              <p>A software engineer who is comfortable with all things tech.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}