var viewport_height = $(document).height();

$('.page').css('height',viewport_height);

$('.text-area').css('marginTop',viewport_height/3)
$(document).ready(function(){

	$('#main-container').removeClass('wait');
	$('#preload').animate({
		opacity : 'hide'
	},3000, 'linear');

	$('.slave-text').typetype(
		'==============================' ,
		{
			e: 0.01,
			t: 100,
			keypress: function (){
			},
			callback: function (){
			}
		}
	)


});