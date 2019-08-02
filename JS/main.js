function validate()
{
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["quali"].value;
    var z = document.forms["myForm"]["date"].value;
    var a = document.forms["myForm"]["dept"].value;
    
    if (x == "") {
    document.getElementById("validate_name").innerHTML = "<h3>Name Can't Be Empty</h3>"
    return false;
  }
}