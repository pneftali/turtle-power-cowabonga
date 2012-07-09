$(document).ready(function(){


/*---------------------------
 Validate Email before sending the message
----------------------------*/ 	
	function validateEmail(email) 
	{ 
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}


/*---------------------------
 
----------------------------*/	
	$( '#recover-htn' ).on('click', function(){
		var email = $( '#recover-email' ).val();

		if(!validateEmail(email)) {
			showError('Invalid email format!');
			return false;
		}

		

		$.ajax({
			url: '/login/check-for-email',
			type: 'POST',
			dataType: 'JSON',
			data: {email : email},
			beforeSend: function(){
				$( '#recover-box' ).css('height', '145px');
				showLoading('Checking your account');
			},
			success: function(d){
				
				if(d.count == 0){					
					window.setTimeout(function () {							
						$( '#recover-loading' ).remove();
					    showResultAfterLoading('Email is not registered.');
					}, 2000);	
				} else{
					$.ajax({
						url: '/recover/send-mail',
						type: 'POST',
						data: {email : email},
						beforeSend: function(){
							window.setTimeout(function () {
								$( '#recover-loading' ).remove();
								showLoading('Resetting your password');
							}, 1000);							
						},
						success: function(d){		
							window.setTimeout(function () {
								$( '#recover-loading' ).remove();
								$( '#recover-box' ).css('height', '');	
								showSuccess('Your new password was sent to your email '+email+'.');
								/*					
								$( '.recover-msg-div' ).css({
									'border' : '1px solid #ABD4B3',
									'background' : '#F1FEFA'
								});
								$( '#recover-email' ).val('');
								$( '.recover-error-box div span' ).html('Your new password was sent to your email '+email+'.');
								$( '.recover-error-box' ).show();
								$( '#recover-box-main').fadeIn(100);
								*/
							}, 500);
						}
					})
				}
			}
		})
	})
	
	function showLoading(msg)
	{
		var structure 	= 	"<div class='recover-loading' id='recover-loading'>";
		structure 		+= 	"	<div class=''>";
		structure 		+= 	"		"+msg+"...<img src='/images/loader/loading_circle.gif' />";		
		structure 		+= 	"	</div>";
		structure 		+= 	"</div>";
		
		$( '#recover-box-main' ).fadeOut(500, function(){
			$( '#recover-box' ).append(structure).fadeIn(800);				
		})		
	}


	function showError(msg)
	{		
		$( '.recover-msg-div span' ).html(msg);
		$( '#recover-error-box' ).show();
		$( '#recover-email' ).val('');		
	}

	function showSuccess(msg)
	{
		$( '#recover-box' ).css('height', '');
		
		var structure 	= 	"<div id='recover-error-box'>";
		structure 		+= 	"	<div class='recover-msg-div' style='border: 1px solid #ABD4B3; background: #F1FEFA; top:0;'>";
		structure 		+= 	"		<span>"+msg+"<span/>";
		structure 		+= 	"		<a href='#' class='recover-error-close'>&#215;</a>";		
		structure 		+= 	"	</div>";
		structure 		+= 	"</div>";
		structure 		+= 	"<div style='margin-top: 20px; text-align:center'>";
		structure 		+= 	"	<a href='/login' style=''>Login now!</a>";
		structure 		+= 	"</div>";

		$( '#recover-box-main' ).html(structure).fadeIn(300);
		$( '#recover-email' ).val('');
	}

	function showResultAfterLoading(msg)
	{
		$( '#recover-box' ).css('height', '');
		
		showError('Email is not registered.');
		$( '#recover-box-main').fadeIn(100);
		
		
		$( '#recover-email' ).val('');
		return false;
	}

/*---------------------------
	Close Login error box
----------------------------*/

	$( '#recover-box-main' ).delegate('a.recover-error-close', 'click', function(){
		$( '#recover-error-box' ).hide();
	});

});




