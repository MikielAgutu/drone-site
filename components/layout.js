import Header from './header'
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <footer>
      <div className="container">
        <div className="row">
          Copyright RM Aerial 2020
        </div>
      </div>
      </footer>
    </>
    );
}
