
function validateForm(){
    var x = document.forms["myForm"]["fEmail"].value;
    if(x == ""){
        alert("Please enter email")
    } else {
        alert("Thank you");
    }
}