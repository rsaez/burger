// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {

    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    // console.log("----------------------");
    // console.log(id);
    // console.log(newDevoured);
    // console.log();

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });  // end of change-devoured

  //Create form section of index handlebars
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
      console.log("I am in create form");
    event.preventDefault();

    var newBurger = {
      burger: $("#bu").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // console.log("Hello----------------------");
    // console.log(newBurger);
    // console.log("end");

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
