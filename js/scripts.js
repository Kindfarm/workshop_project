// alert("Hello World!");
// alert(2+2);
// alert(4*"2");
// alert(8+"2");


// $ (document).ready(function() {
//   // Our code goes here
// });

$ (document).ready(function() {
  $("#goal-button").click(function()  {
    $("#goal-list").append("<li class='list item'>" + $("#new-goal").val() + "</liv>");
    $("#new-goal").val("");
  });
});
