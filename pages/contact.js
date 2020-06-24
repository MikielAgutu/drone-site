import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h1 className="section-heading">Contact</h1>
          <hr />
          <p>
            To enquire about our services, or for any other question
            <br />
            </p>
            <h3>
            📧 {" "} <a href="mailto:contact.rmaerial@gmail.com">contact.rmaerial@gmail.com</a>
            </h3>
            <br />
            <h3>☎️ 07518123870</h3>
        </div>
      </div>
    </Layout>
  );
}
