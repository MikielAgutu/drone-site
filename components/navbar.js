import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <div className="topnav" id="topnav">
          <Link href="/"><a>Home</a></Link>
          <Link href="our-services"><a>Our Services</a></Link>
          <Link href="portfolio"><a>Portfolio</a></Link>
          <Link href="contact"><a>Contact</a></Link>
          <Link href="about"><a>About</a></Link>
          <Link href="faq"><a>FAQ</a></Link>
          <a className="icon" onClick={() => responsiveToggle()}>
            <i className="fa fa-bars"></i>
          </a>
      </div>
    </div>
    );
}

function responsiveToggle() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
