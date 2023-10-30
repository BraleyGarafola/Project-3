// JS scripts placed here
function myFunction() {
    var x = document.getElementById("BGtopnav");
    if (x.className === "BG-Nav") {
      x.className += " responsive";
    } else {
      x.className = "BG-Nav";
    }
  }