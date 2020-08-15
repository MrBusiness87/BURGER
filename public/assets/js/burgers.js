$(function () {
  $(".change-devoured").on("click", (event) => {
    const id = $(this).data("id");
    const newDevour = $(this).data("newdevour");
    const newDevourState = {
      devour: newDevour
    };
    $.ajax("/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      () => {
        console.log("changed devour to", newDevour);
        location.reload();
      }
    );
  });
  $(".form-group button").on("click", (event) => {
    event.preventDefault();
    const newBurger = {
      name: $("#burger").val().trim(),
    };
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      () => {
        console.log("created new burger");
        location.reload();
      }
    );
  });
  $(".delete").on("click", () => {
    const id = $(this).data("id");
    console.log("In Delete the id - " + id);
    $.ajax("/" + id, {
      type: "DELETE"
    }).then(
      () => {
        console.log("deleted burger");
        location.reload();
      }
    );
  });
});