// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. 
  const saveBtnEl = $(".saveBtn")
  
  saveBtnEl.on("click", function(){ //clicking save button saves content in textarea to local storage
    
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  
  function updateCurrentTime() { //gets current time
    var currentTime = dayjs();
    var formattedTime = currentTime.format("h:mm A");
    document.getElementById('currentTime').textContent = "Current Time: " + formattedTime;
}

updateCurrentTime();

setInterval(updateCurrentTime, 60000); //update every 60 sec
  
  // HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
