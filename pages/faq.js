import Layout from "../components/layout";

export default function Faq() {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h1 className="section-heading">FAQ</h1>
          <hr />
          <div className="row">
            <div className="one-half column">
              <h4>Can you fly in built up areas?</h4>
              <p>
                Generally we're allowed to fly in built up areas. However in
                locations near restricted fly zones such as airports there may
                be an additional waiting period as we apply for permissions with
                the relevant authorities. Most areas will have no delay and work
                can commence immediately.
              </p>
            </div>
            <div className="one-half column">
              <h4>Do you need a license and insurance?</h4>
              <p>
                We're licensed by the Civil Aviation Authority, and hold a
                Standard Permission with them. Our drone operators have
                undergone Remote Pilot Competency Certification and hold a valid
                permission for commercial operations (PfCO). RM Aerial is fully
                insured, including public liability.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="one-half column">
              <h4>How much do your services cost?</h4>
              <p>
                Each job is priced individually to cater for your needs. We
                offer packages with different levels of services based on the
                type of job. We provide more details on application.
              </p>
            </div>
            <div className="one-half column">
              <h4>Do you offer on-site consultations?</h4>
              <p>
                We're happy to visit your site before the job and consult with
                you in person. We can assess the site to identify flight risks
                so the job will run smoothly.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="one-half column">
              <h4>Do you offer a discount for multiple plots?</h4>
              <p>
                Yes, we're happy to offer a multi-plot discount based on the
                number of plots.
              </p>
            </div>
            <div className="one-half column">
              <h4>Do you travel outside of Cambridgeshire?</h4>
              <p>
                We're not limited to the Cambridgeshire area, and are happy to provide a
                quote for any job in the UK.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
