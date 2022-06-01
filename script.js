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

  function timeColor (){
      var currentHour = moment().hours()
      console.log(currentHour)
      $(".timeBlock").each(function (){
          //string value conversion //
          var hourBlock = parseInt ($(this).attr("id"))
          if (hourBLock < currentHour){
              $(this).addClass("past")
          } else if (hourBlock === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
          } else { 
              $(this).removeClass("past")
              $(this).removeClass("present")
              $(this).addClass("future")

          }
      })
  } 
  timeColor()


});
