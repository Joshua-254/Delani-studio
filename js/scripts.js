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

$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('1000').hide('1000');
    $("#development").show('1000');
  });
  $("#development").click(function(){
    $("#development").slideUp('1000');
    $("#development-image").slideDown('1000');
  });
});

// toggle section

$(document).ready(function(){
  $("#design").click(function(){
    $("#p_design").toggle(250);
  });
  });
$(document).ready(function(){
    $("#development").click(function(){
      $("#p_development").toggle(200);
    });
    });
$(document).ready(function(){
      $("#production").click(function(){
        $("#p_production").toggle(150);
      });
      });
