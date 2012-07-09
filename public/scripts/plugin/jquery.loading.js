(function( $ ){

  	$.fn.loading = function( settings ) {  

	    var options = $.extend( {
	    	'action'    	: 'start',
	    	'opacity' 		: '.1',
	    	'background'	: '#000'

	    }, settings);

	    return this.each(function() {

	    	switch( options.action ){
	    		case 'start':     			
	    			//$(this).append("<div class='overlay-test'><img src='/images/loader/loading.gif'></div>");	  
	    			$('.overlay-test').css({
	    				'background' 	: options.background,
	    				'opacity' 		: options.opacity	    				
	    			});
	    			break;
	    		case 'stop':
	    			$(this).find("div.overlay-test").remove();
	    			break;
	    	}   	

	    });

  	};

})( jQuery );