var viewport_height = $(document).height();

$('.page').css('height',viewport_height);

$('.text-area').css('marginTop',viewport_height/2.5)
$(document).ready(function(){

	$('#main-container').removeClass('wait');
	$('#preload').animate({
		opacity : 'hide'
	},3000, 'linear');


    var $windows = $('.page');

    $windows.windows({
        snapping: true,
        snapSpeed: 3000,
        snapInterval: 1100,
        onScroll: function(s){},
        onSnapComplete: function($el){},
        onWindowEnter: function($el){}
    });

	$('.slave-text').typetype(
		'welcome to my website',
		{
			e: 0.09,
			t: 100,
			keypress: function (){
			},
			callback: function (){
			}
		}
	)


});