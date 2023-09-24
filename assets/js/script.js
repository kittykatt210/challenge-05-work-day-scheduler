$(function () {
  // Listener for click events on the save button. 
  $(".saveBtn").on("click", function(){
     
    var message = $(this).siblings(".description").val();
    var hour =$(this).parent().attr("id");
    
    localStorage.setItem(hour, message);
  });

  // Apply the past, present, or future class to each time block
  $('.time-block').each(function(){
    var hours = (parseInt($(this).attr('id').split('-')[1]));
    var now = dayjs().hour();
    if (hours < now) {
      $(this).addClass('past');
    } else if (hours > now) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }
  });

  // Code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-21 .description").val(localStorage.getItem("hour-21"));
  
  // Code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, D MMMM YYYY'))
});
