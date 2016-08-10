$(document).ready(function() {
  $("form#name").submit(function(event) {
    var blarg = $("#name1").val();
    $("#output").text(blarg);
    event.preventDefault();
  });
  var beverage = $("#beverage").val();
});
