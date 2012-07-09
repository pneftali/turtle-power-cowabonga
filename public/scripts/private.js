$(document).ready(function(){


/*---------------------------
	
----------------------------*/	
	
	clearForms();
	function clearForms()
	{
		setTimeout(function () {
			document.getElementById("private-form").reset();
		}, 100); 		
	}
	

/*---------------------------
	
----------------------------*/	

	$( '#private-submit' ).on('click', function(){
		var fullname = $.trim($( '#fullname' ).val());
		var password = $.trim($( '#password' ).val());

		if(fullname === '' || password === ''){
			$( '.private-error-box' ).show("shake", { times:2 }, 100);
			return false;
		}

	})	

	$( '.private-error-close' ).on('click', function(){
		$( '.private-error-box' ).hide();
	})

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

	$( '#signup-tc' ).on('click', function(){
		if(this.checked){
			$( '#signup-button' ).removeClass('button-disabled').addClass('button-blue').removeAttr('disabled');
			$( '#signup-button' ).addClass('signup_span_btn');
		} else{
			$( '#signup-button' ).removeClass('button-blue').addClass('button-disabled').attr('disabled', 'disabled');
			$( '#signup-button' ).removeClass('signup_span_btn');
		}

	});

	var confirm_text = '';
	$( '#signup-button' ).on('click', function(){
		var fullname 	= $.trim($( '#signup-fullname' ).val());
		var email		= $.trim($( '#signup-email' ).val());
		var pass		= $.trim($( '#signup-pass' ).val());
		var dob_day		= $( '#dob_day' ).val();
		var dob_month	= $( '#dob_month' ).val();
		var country		= $( '#country' ).val();
		
		

		if(fullname==='' || email==='' || pass===''){
			showError('Required fields are missing!');
			return false;
		} else{

			if(!validateEmail(email)){
				showError('Invalid email format!');
				return false;
			}

			$.ajax({
				url: '/login/check-for-email',
				type: 'POST',
				dataType: 'JSON',
				data: {email : email},
				success: function(d){
					if(d.count > 0){
						showError('This email address is already in use.');
						return false;
					} else {
						$.ajax({
							url: '/signup/do-sign-up',
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
								$( '#submit-box' ).fadeOut();
								$( '#public-box' ).animate({
									height: '240px'
								}, 500, 'linear', function(){
									showLoading('Creating your account');
								})
							},
							success: function(d){
								d = $.parseJSON(d);
								confirm_text = d.confirm;
								showSuccess("We have sent you an email confirmation at <span style='font-weight: bold;'>"+email+".</span> Please check your email to access your ThxBox.");
							}
						})
					}
				}
			});

		}
	});	


	$( '#public-box' ).delegate('#resend-confirm-btn', 'click', function(){

		var confirmation = $( '#resend-confirm-btn' ).data('confirm');		
		$.ajax({
			url: '/signup/resend-confirmation',
			type: 'POST',
			data: {
				confirmation:confirmation 				
			},
			beforeSend: function(){
				$(".signup-success-div").hide();
				showLoading('Re-sending your confirmation');
			},
			success: function(d){
				d = $.parseJSON(d);
				confirm_text = d.confirmation;
				showSuccess("We have re-sent you an email confirmation at <span style='font-weight: bold;'>"+confirm_text+".</span> Please check your email to access your ThxBox.");				
			}
		})
		
	});

	function showError(msg)	
	{
		$( '.login-error-box' ).remove();
		var structure 	= 	"<div class='login-error-box'>";
		structure 		+= 	"	<div class='error-msg-div'>";
		structure 		+= 	"		<span>"+msg+"</span>";
		structure 		+= 	"		<a href='#' class='login-error-close'>&#215;</a>";
		structure 		+= 	"	</div>";
		structure 		+= 	"</div>";

		$( '#signup-box-outer' ).prepend(structure);
		
		$('html, body').animate({
			scrollTop: $("#public-thxbox-header h3").offset().top
		}, 300);
		$( '.error-msg-div' ).effect("shake", { times:2 }, 100);
	}

	function showLoading(msg)
	{
		var structure 	= 	"<div class='signup-success-div'>";
		structure 		+= 	"	<div class=''>";
		structure 		+= 	"		"+msg+"...<img src='/images/loader/loading_circle.gif' />";		
		structure 		+= 	"	</div>";
		structure 		+= 	"</div>";

		$( '#public-box' ).html(structure).fadeIn(800);		
	}

	function showSuccess(msg)	
	{
		var structure 	= 	"";
		structure 		+= 	"	<div class='login-error-box'>";
		structure 		+= 	"		<div class='error-msg-div success' style='top:0;'>";
		structure 		+= 	"			<img src='/images/check_green.png' style='float: left;' />";			
		structure 		+= 	"			<div style='float: left; width: 230px; margin-left: 10px; font-size: 13px;'>"+msg+"</div>";		
		structure 		+= 	"			<div class='clear'></div>";
		structure 		+= 	"		</div>";		
		structure 		+= 	"	</div>";
		structure 		+= 	"	<button id='resend-confirm-btn' data-confirm = "+confirm_text+" class='button-green' style='width: 100%; font-size: 17px; margin-top: 85px; padding: 10px'>";
		structure 		+= 	"		<span>Re-send confirmation</span>";
		structure 		+= 	"	</button>";

		
		window.setTimeout(function () {
		    $(".signup-success-div").hide().html(structure).fadeIn(1000);

		    var new_header  = "<img src='/images/ge_logo_small.png' style='float: left' />";
		    new_header 		+= "<a href='/login' class='right'>Login &rarr;</a>";
		    $( '#public-header' ).html(new_header);
		}, 2000);
		
		$('html, body').animate({
			scrollTop: $("#public-thxbox-header h3").offset().top
		}, 500);
	}


});









