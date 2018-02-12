$(function () {

$('#search-box').focus();

var dt = new Date();
var time =moment().format("hh:mm");
var date = moment().format('dddd') + ', ' + moment().format("Do") + ' of ' + moment().format("MMMM");

$(".time").text(time)
$('.date').text(date)

$('.site-box').on('click', function() {
    var url = $(this).attr('data-url');
    window.location.href = url;
});

});
