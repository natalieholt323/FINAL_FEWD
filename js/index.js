$(document).ready(function () {
function submit () (

	)	

$('button').on('click', submit);

var total = 0;
function submit (){
	var newEntry = $('.new-entry').val();
	$('.items ul').append ('<li class='item-num'>)'+newEntry+'</li>');

total = newEntry + total;
$('total-num').html (total);
}

$('form').on('submit', function(event){
	event.preventDefault();
	submit();
})