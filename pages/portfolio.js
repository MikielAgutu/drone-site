import Layout from '../components/layout'

export default function Portfolio() {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h1 className="section-heading">Portfolio</h1>
          <hr />
          <p className="section-description">
            You can see a selection of our work on our Instagram account
            <br/>
            <a href="https://www.instagram.com/rm_aerial/">@rm_aerial</a>
          </p>
            <script src="https://snapwidget.com/js/snapwidget.js"></script>
            <iframe src="https://snapwidget.com/embed/841032" className="snapwidget-widget"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            style={{border: "none", overflow: "hidden", width: "100%"}}>
            </iframe>
        </div>
      </div>
    </Layout>
  );
}