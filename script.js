// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. 
  const currentHour = new Date().getHours(); //defines current hour
  console.log(currentHour);
  
  const saveBtnEl = $(".saveBtn")

  saveBtnEl.on("click", function(){ //clicking save button saves content in textarea to local storage
    
  })
 
//display the current date/time  
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

  if (blockHour < currentHour) {
    $(this).addClass('past');
   } else if (blockHour === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
   } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
   }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.  
  
});
