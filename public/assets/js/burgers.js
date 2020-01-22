$(function(){

    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
    
        var newDevouredState = {
          devoured: newDevoured
        };
    
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("changed devoured status to", newDevoured);
            location.reload();
          }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burg").val().trim(),
          devoured: $("[name=devoured]:checked").val().trim()
        };
    
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            location.reload();
          }
        );
      });

      $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        $.ajax("/api/burgers/" + id, {
          type: "DELETE",
        }).then(
          function() {
            console.log("deleted burger", id);
            location.reload();
          }
        );
      });























})