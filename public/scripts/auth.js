$(document).ready(function(){

/*---------------------------
 Validate Email before sending the message
----------------------------*/ 	
	function validateEmail(email) { 
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

/*---------------------------
	Authentication signup
----------------------------*/	

	$( '#signup-button' ).on('click', function(){
		var fullname 	= $( '#signup-fullname' ).val();
		var email		= $( '#signup-email' ).val();
		var pass		= $( '#signup-pass' ).val();
		var dob_day		= $( '#dob_day' ).val();
		var dob_month	= $( '#dob_month' ).val();
		var country		= $( '#country' ).val();
		
		console.log(fullname);
		console.log(email);
		console.log(pass);

		

		if(fullname==='' || email==='' || pass===''){
			$( '.login-error-box div span' ).html('Required fields are missing!');
			$( '.login-error-box' ).show();
			
			$('html, body').animate({
				scrollTop: $("#header-label-two").offset().top
			}, 100, function(){
				$( '.error-msg-div' ).effect("shake", { times:1 }, 100);
			});

			//}, 100, function(){
			//	$( '#error-msg-div' ).effect("shake", { times:1 }, 100);
			//});

			//$( '#login-error-box' ).show('slow');
			return false;
		} else{

			if(!validateEmail(email)){
				$( '.login-error-box div span' ).html('Invalid email format!');
				$( '.login-error-box' ).show();
				
				$('html, body').animate({
					scrollTop: $("#header-label-two").offset().top
				}, 100, function(){
					$( '.error-msg-div' ).effect("shake", { times:1 }, 100);
				});

				return false;
			}

			$.ajax({
				url: '/login/check-for-email',
				type: 'POST',
				dataType: 'JSON',
				data: {email : email},
				success: function(d){
					console.log(d.count);
					if(d.count > 0){

						$( '.login-error-box div span' ).html('This email address is already in use.');
						$( '.login-error-box' ).show();
						
						$('html, body').animate({
							scrollTop: $("#header-label-two").offset().top
						}, 500, function(){
							$( '.error-msg-div' ).effect("shake", { times:1 }, 100);
						});

						return false;
					} else{
						$.ajax({
							url: '/login/',
							type: 'POST',
							data: {
								fullname 		: fullname, 
								email_signup	: email, 
								pass_signup		: pass, 
								dob_day			: dob_day, 
								dob_month		: dob_month, 
								country			: country,
								signup 			: 'signup' 
							},
							beforeSend: function(){
								$( '#signup-loader' ).show();
							},
							success: function(){
								window.name = 'just signed up';
								window.location.replace("/");
							}

						})
					}
				}
			});

		}


	});	
	
});









