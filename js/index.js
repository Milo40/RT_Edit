function fresh(){
  var fld_o = document.getElementById('in').value;
  document.getElementById('out').srcdoc = fld_o;  
}
function whiteng(){
  var fld = document.getElementById('in');
  fld.style.background = "white";
  fld.style.color = "black";
}

  function darkng(){
    var fld = document.getElementById('in');
    fld.style.background = "#002B36";
    fld.style.color = "white";
  }
