// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. 
  const saveBtnEl = $(".saveBtn")

  saveBtnEl.on("click", function(){ //clicking save button saves content in textarea to local storage
    
  })
 
//display the current time  
function updateCurrentTime() { //gets current time
  let currentTime = dayjs();
  let formattedTime = currentTime.format("h:mm A");
  let formattedDate = currentTime.format("dddd, MMMM D, YYYY");
  document.getElementById('currentTime').textContent = "Current Time: " + formattedTime;
  document.getElementById('currentDay').textContent = "Date: " + formattedDate;
}

updateCurrentTime();

setInterval(updateCurrentTime, 60000); //update every 60 sec
  
//comparing current time to time-block for past present future class
$(".time-block").each(function () { //selects all elements with time-block class
  const blockHour = parseInt($(this).attr("id").split("-")[1]); //get hour from block's id

  // Day.js object for block's time
  const blockTime = currentTime.set("hour", blockHour);
  console.log(currentTime);

  // Compare block's time with current time
  if (blockTime.isBefore(currentTime, "hour")) {
      $(this).removeClass("present future")
  } else if (blockTime.isSame(currentTime, "hour")) {
      $(this).removeClass("past future")
  } else {
      $(this).removeClass("past present")
  }
});


  // HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  
  
  
  
  
  // HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
