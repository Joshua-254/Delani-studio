$(document).ready(function(){
  $("form#contact-us").submit(function(event){
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#message").val();
    if ($("input#name").val() && $("input#email").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }

    event.preventDefault();
    
  });

});
