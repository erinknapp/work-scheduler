
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
    
