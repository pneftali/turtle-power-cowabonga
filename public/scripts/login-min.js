(function(){$(".signup").on("click",function(){if(whichIsCurrentlyDisplayed==="login"){$(".login-error-box").hide();$("html, body").animate({scrollTop:$("#public-thxbox-header h3").offset().top},2000);var i=$(this).attr("class");if(i.search("passive")||i.search("signup")||i.search("right")){$("#login-box-outer").fadeOut();$("#public-box").animate({height:"592px"},300,"linear",function(){$("#signup-box-outer").fadeIn(300);$("#public-box").css("height","")});$("#public-header").find("a.link-active").removeClass("link-active").addClass("link-passive");$(this).removeClass("link-passive").addClass("link-active")}whichIsCurrentlyDisplayed="signup"}});$("#signin").on("click",function(){if(whichIsCurrentlyDisplayed==="signup"){g();$(".login-error-box").hide();$("html, body").animate({scrollTop:0},"slow");var i=$(this).attr("class");if(i.search("passive")){$("#signup-box-outer").fadeOut();$("#public-box").animate({height:"221px"},300,"linear",function(){$("#login-box-outer").fadeIn(300)});$("#public-header").find("a.link-active").removeClass("link-active").addClass("link-passive");$(this).removeClass("link-passive").addClass("link-active");$("#login-error-box").hide()}whichIsCurrentlyDisplayed="login"}});$("input, textarea").placeholder();g();function g(){if($.fn.placeholder.input){$("#login-email").focusin(function(){$(this).attr("placeholder","")});$("#login-email").focusout(function(){$(this).attr("placeholder","Please enter your GE-email")});$("#login-pass").focusin(function(){$(this).attr("placeholder","")});$("#login-pass").focusout(function(){$(this).attr("placeholder","Enter your password")})}}function c(i){var j=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return j.test(i)}function h(){setTimeout(function(){document.getElementById("login-form").reset()},100)}$("#public-box").delegate("a.login-error-close","click",function(){$(".login-error-box").hide()});$("#signup-tc").on("click",function(){if(this.checked){$("#signup-button").removeClass("button-disabled").addClass("button-blue").removeAttr("disabled");$("#signup-button").addClass("signup_span_btn")}else{$("#signup-button").removeClass("button-blue").addClass("button-disabled").attr("disabled","disabled");$("#signup-button").removeClass("signup_span_btn")}});b();function b(){var k=new Image();var i=new Image();var j=new Image();k.src="/images/page3-img-big.png";i.src="/images/profile-footer.png";j.src="/images/loader/loading_circle.gif"}var a="";$("#signup-button").on("click",function(){var i=$.trim($("#signup-fullname").val());var j=$.trim($("#signup-email").val());var m=$.trim($("#signup-pass").val());var n=$.trim($("#signup-pass-confirm").val());var l=$("#dob_day").val();var k=$("#dob_month").val();var o=$("#country").val();if(i===""||j===""||m===""||n===""){e("Required fields are missing!");return false}else{if(m!==n){e("Passwords don't match!");return false}if(!c(j)){e("Invalid email format!");return false}m=$("#signup-pass").val();$.ajax({url:"/login/check-for-email",type:"POST",dataType:"JSON",data:{email:j},success:function(p){if(p.count>0){e("This email address is already in use.");return false}else{$.ajax({url:"/signup/do-sign-up",type:"POST",data:{fullname:i,email_signup:j,pass_signup:m,dob_day:l,dob_month:k,country:o,signup:"signup"},beforeSend:function(){$("#submit-box").fadeOut();$("#public-box").animate({height:"240px"},500,"linear",function(){f("Creating your account")})},success:function(q){q=$.parseJSON(q);a=q.confirm;d("We have sent you an email confirmation at <span style='font-weight: bold;'>"+j+".</span> Please check your email to access your ThxBox.")}})}}})}});$("#public-box").delegate("#resend-confirm-btn","click",function(){var i=$("#resend-confirm-btn").data("confirm");$.ajax({url:"/signup/resend-confirmation",type:"POST",data:{confirmation:i},beforeSend:function(){$(".signup-success-div").hide();f("Re-sending your confirmation")},success:function(j){j=$.parseJSON(j);a=j.confirmation;d("We have re-sent you an email confirmation at <span style='font-weight: bold;'>"+a+".</span> Please check your email to access your ThxBox.")}})});function e(j){$(".login-error-box").remove();var i="<div class='login-error-box'>";i+="	<div class='error-msg-div' width: 100%;>";i+="		<span>"+j+"</span>";i+="		<a href='#' class='login-error-close'>&#215;</a>";i+="	</div>";i+="</div>";$("#signup-box-outer").prepend(i);$("html, body").animate({scrollTop:$("#public-thxbox-header h3").offset().top},300);$(".error-msg-div").effect("shake",{times:2},100)}function f(j){var i="<div class='signup-success-div'>";i+="	<div class=''>";i+="		"+j+"...<img src='/images/loader/loading_circle.gif' />";i+="	</div>";i+="</div>";$("#public-box").html(i).fadeIn(800)}function d(j){var i="";i+="	<div class='login-error-box'>";i+="		<div class='error-msg-div success' style='top:0; width: 100%;'>";i+="			<img src='/images/check_green.png' style='float: left;' />";i+="			<div style='float: left; width: 230px; margin-left: 10px; font-size: 13px;'>"+j+"</div>";i+="			<div class='clear'></div>";i+="		</div>";i+="	</div>";i+="	<button id='resend-confirm-btn' data-confirm = "+a+" class='button-green' style='position: absolute; bottom: 17px; width: 300px; font-size: 17px; padding: 10px'>";i+="		<span>Re-send confirmation</span>";i+="	</button>";window.setTimeout(function(){$(".signup-success-div").hide().html(i).fadeIn(1000);var k="<img src='/images/ge_logo_small.png' style='float: left' />";k+="<a href='/login' class='right'>Login &rarr;</a>";$("#public-header").html(k)},2000);$("html, body").animate({scrollTop:$("#public-thxbox-header h3").offset().top},500)}}());