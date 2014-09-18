var viewport_height = $(document).height();

$('.page').css('height',viewport_height);

$(document).ready(function(){

    var $windows = $('.page');

    $windows.windows({
        snapping: true,
        snapSpeed: 3000,
        snapInterval: 1100,
        onScroll: function(s){},
        onSnapComplete: function($el){},
        onWindowEnter: function($el){}
    });


});