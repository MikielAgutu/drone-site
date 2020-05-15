
export default function Navbar() {
  return (
    <div class="topnav" id="topnav">
      <a href="#home" class="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a className="icon" onClick={() => responsiveToggle()}>
        <i className="fa fa-bars"></i>
      </a>
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