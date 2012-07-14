/* Author: ulv8888@gmail.com
 */
(function($) {
	var h = $(window).height();
	var w = $(window).width();
	
	$('#elements li').css('height', h + 'px');
	$('#elements li').css('width', w-100 + 'px');
	$('#elements').css('width', (w+5)*3 + 'px');
	
	/*$('#elements li').each(function () {
        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
        $(this).css("background-color", hue);
        
    });*/
	
	
		$('#nav a').click(function() {
			
			$.scrollTo( 'li:eq('+$(this).attr('title')+')', 800 );
		});
	
/*
$('#my_elem').mousewheel(function(event, delta) {
    console.log(delta);
});*/
/*
$(window).scroll(function(event, delta){ 
	console.log(delta);
});

	$('a.panel').click(function () {
	//$('#mask').mousewheel(function (event, delta) {
	//$(window).scroll(function () { 
		$('a.panel').removeClass('selected');
		$(this).addClass('selected');
		
		current = $(this);
		
		$('#wrapper').scrollTo($(this).attr('href'), 800);		
		
		return false;
	});
*/
	$(window).resize(function () {
		resizePanel();
	});
	//$.scrollTo(...);
	

})(jQuery);



function resizePanel() {
	var h = $(window).height();
	var w = $(window).width();
	
	
	$('#elements li').css('height', h + 'px');
	$('#elements li').css('width', w-100 + 'px');
	$('#elements').css('width', (w+5)*3 + 'px');
	
}	

/*
function resizePanel() {

	width = $(window).width();
	height = $(window).height();

	mask_width = width * $('.item').length;
		
	$('#debug').html(width  + ' ' + height + ' ' + mask_width);
		
	$('#wrapper, .item').css({width: width, height: height});
	$('#mask').css({width: mask_width, height: height});
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);
}	


*/