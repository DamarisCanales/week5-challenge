$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    // console.log("click")

    // var textContent = $(this).siblings(".description").val();
    // var timeStamp = $(this).parent().attr("id");

    var textContent = $(this).siblings(".description").val();

    var timeStamp = $(this).parent().attr("id");

    localStorage.setItem(timeStamp, textContent);
  });

  // Time Block Coloring Loop//

  function timeColor() {
    var currentHour = moment().hours();
    console.log(currentHour)

    $(".timeBlock").each(function () {
      //string value conversion //
      var hourBlock = parseInt($(this).attr("id"));

      if (hourBlock < currentHour) {
        $(this).addClass("past");
      } else if (hourBlock === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  timeColor();

$("#9 .description").val(localStorage.getItem("9"))

$("#10 .description").val(localStorage.getItem("10"))

$("#11 .description").val(localStorage.getItem("11"))

$("#12 .description").val(localStorage.getItem("12"))

$("#13 .description").val(localStorage.getItem("13"))

$("#14 .description").val(localStorage.getItem("14"))

$("#15 .description").val(localStorage.getItem("15"))

$("#16 .description").val(localStorage.getItem("16"))

$("#17 .description").val(localStorage.getItem("17"))



});
