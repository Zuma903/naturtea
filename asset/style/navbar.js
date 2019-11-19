window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    document.getElementById("navbar").style.padding = "10px";
    document.getElementById("nav-brand").style.fontSize = "30px";
    document.getElementById("navItem").style.color = "white";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("navbar").style.padding = "30px";
    document.getElementById("nav-brand").style.fontSize = "50px";
    document.getElementById("navItem").style.color = "white";
  }
}