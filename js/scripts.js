// messaging section

$(document).ready(function(){
  $("form#contact-us").submit(function(event){
    var name = $("input#Name").val();
    var email = $("input#Email").val();
    var message = $("textarea#message").val();
    if ($("input#name").val() && $("input#email").val()){
      alert ("Hello, we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }

    event.preventDefault();
    
  });

});


// toggle section

$(document).ready(function(){
  $("#design").click(function(){
    $("#p_design").toggle(50);
  });
  });
$(document).ready(function(){
    $("#development").click(function(){
      $("#p_development").toggle(50);
    });
    });
$(document).ready(function(){
      $("#production").click(function(){
        $("#p_production").toggle(50);
      });
      });
