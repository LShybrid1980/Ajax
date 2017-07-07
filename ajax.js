$(function() {
  $("#submit-button").submit(function(e) {
    e.preventDefault();
    $(this).attr('disabled','disabled'); // Switch to default grey
    $(this).html("Sending"); // Change text of button
    $.ajax({
      async: true,
      type: 'POST',
      url: "http://putsreq.com/un8KOGwo2oexjpngr9NM",
      data: $('#registration-form').serialize(),
      dataType: 'text',
      crossDomain: true,
      complete: function() {
        $("#submit-button").removeAttr('disabled'); // Change back text of button
      },
      error: function(request, errorType, errorMessage) {
        $("#status").text("Comment failed. Error: " + errorType + " " + errorMessage);
      },
      success: function(response) {
        $("#status").text("Form Submitted.");
        $('#submit-button').html("Submit");
      }
    });
  });
});