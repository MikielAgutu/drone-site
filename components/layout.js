import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a className="icon" onClick={() => responsiveToggle()}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      {children}
    </>
    );
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveToggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
