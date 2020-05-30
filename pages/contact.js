import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h1 className="section-heading">Contact</h1>
          <p>
            To enquire about our services, or for any other question, you can contact us
            via the following:
            <br />
            <strong>
              Email:{" "}
              <a href="mailto:contact.rmaerial@gmail.com">
                contact.rmaerial@gmail.com
              </a>
            </strong>
            <br />
            <strong>Mobile: 0707070</strong>
          </p>
        </div>
      </div>
    </Layout>
  );
}
