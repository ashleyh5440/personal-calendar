$(function () {
  const currentHour = new Date().getHours(); //defines current hour
  console.log(currentHour);
  
  const saveBtnEl = $(".saveBtn")

  saveBtnEl.on("click", function(){ //clicking save button saves content in textarea to local storage
    let time = $(this).parent().attr("id")
    let task = $(this).siblings(".description").val()//getting value out of button's sibling with the class of description
    localStorage.setItem(time, task); //sets in local storage
  })
 
//displays the current date/time  
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
  //split turns string into array, loops through the array 
  //hour becomes index 0, the number becomes 1

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

  //retrieves items from local storage
  for (let i = 9; i < 17; i++){ //uses for loop instead of writing out code for each timeblock
  $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))}
  
});
