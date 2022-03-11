$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

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
console.log(currentTime);
    
