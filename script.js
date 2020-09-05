function sort() {
  // get check box
  var html = document.getElementById("check_html").checked;
  var js = document.getElementById("check_js").checked;
  var py = document.getElementById("check_py").checked;
  var sql = document.getElementById("check_sql").checked;


  if (html == false) {
    var x = document.getElementsByClassName("html");
    for(var i=0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
  else{
    var x = document.getElementsByClassName("html");
    for(var i=0; i < x.length; i++) {
      x[i].style.display = "flex";
    }
  }

  if (js == false) {
    var x = document.getElementsByClassName("js");
    for(var i=0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
  else{
    var x = document.getElementsByClassName("js");
    for(var i=0; i < x.length; i++) {
      x[i].style.display = "flex";
    }
  }

  if (py == false) {
    var x = document.getElementsByClassName("py");
    for(var i=0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
  else{
    var x = document.getElementsByClassName("py");
    for(var i=0; i < x.length; i++) {
      x[i].style.display = "flex";
    }
  }

  if (sql == false) {
    var x = document.getElementsByClassName("sql");
    for(var i=0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
  else{
    var x = document.getElementsByClassName("sql");
    for(var i=0; i < x.length; i++) {
      x[i].style.display = "flex";
    }
  }
}
