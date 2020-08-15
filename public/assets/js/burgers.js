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
  $(".create-form").on("submit", (event) => {
    event.preventDefault();
    const id = $(this).data("id");
    const newBurger = {
      name: $("#burger").val().trim(),
    };
    $.ajax("/", id, {
      type: "POST",
      data: newBurger
    }).then(
      () => {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});

$(function () {
  $(".delete").on("click", (event) => {
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