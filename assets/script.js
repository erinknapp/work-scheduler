// Using moment.js to help format and display current time
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));


let currentTime = moment().hour();
$('.description').each(function(){
    var hourId = parseInt($(this).prop('id'));
    console.log(hourId + " is hourId value");
    if (hourId > currentTime) {
        $(this).addClass('future');
    } else if (hourId < currentTime) {
        $(this).addClass('past');
    } else if(hourId === currentTime) {
        $(this).addClass('present');
    }
});

if (moment().isAfter(currentTime)){
    // add class for tasks that are nearly due
    // add class for tasks that have a lot of time before due
}

// logic for button clicks
$('.saveBtn').on("click", function(){
    var thisBtn = $(this);
    var mainDiv = thisBtn.parent();
    var textarea = mainDiv.find("textarea");
    var text = textarea.val();
    var key = textarea.attr("id");
    localStorage.setItem(key, text);
    console.log(text);
})

for(var hour = 9; hour<18; hour++) {
    $("#" + hour).val(localStorage.getItem(hour));
}

    
