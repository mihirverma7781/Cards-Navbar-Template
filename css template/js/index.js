function hamburger(){
    var x = document.getElementById('ul');
    var y = document.getElementById('main')
  if (x.style.display == "block") {
    x.style.display = "none";
    // y.style.position ="relative"
    y.style.marginTop = "10px";
  } else {
    x.style.display = "block";
    y.style.marginTop ="40px";
  }
}