(function(){$("input, textarea").placeholder();var u=new Image();u.src="/images/buttons/see_past_winners_active.png";var R=new Image();R.src="/images/buttons/generate_message_active.png";if($.fn.placeholder.input){$("#search-name").focusin(function(){$(this).attr("placeholder","")});$("#search-name").focusout(function(){$(this).attr("placeholder","GE-email or Name")});$("#text-area").focusin(function(){$(this).attr("placeholder","")});$("#text-area").focusout(function(){$(this).attr("placeholder","I appreciate you because...")})}$("#search-name").autocomplete({appendTo:"#home-c3-autocomplete-box"});var p={},j;var G;$("#search-name").autocomplete({source:function(Z,X){var Y=Z.term;if(Y in p){if(p[Y].length<1){$("li").remove(".ui-menu-item");$(".ui-autocomplete").css("display","block");$(".ui-autocomplete").css("position","absolute");$(".ui-autocomplete").css("top","-15px");$(".ui-autocomplete").css("left","0")}else{X(p[Y])}return}$(".ui-autocomplete").css("position","absolute");$(".ui-autocomplete").css("top","-15px");$(".ui-autocomplete").css("left","0");$(".ui-autocomplete").css("width","100%");$(".ui-autocomplete").html("<li class='ui-autocomplete-custom-loading ui-menu-item' role='menuitem'></li>");$(".ui-autocomplete").show();j=$.getJSON("/search",Z,function(ab,aa,ac){p[Y]=ab;if(ac===j){X(ab)}})},open:function(X,Y){$(".ui-autocomplete").css("position","absolute");$(".ui-autocomplete").css("top","-15px");$(".ui-autocomplete").css("left","0")},minLength:1,select:function(X,Y){$("#search-name").data("employeeCodeTo",Y.item.employee_code);$("#search-name").data("employeeNameTo",Y.item.label)}}).data("autocomplete")._renderItem=r;function r(Y,aa){var X=this.term;var Z="";Z+="<div>";Z+="	<div class='search-left-div'>";Z+="	</div>";Z+="	<div class='search-right-div'>";Z+="		<div class='search-name-div'>"+aa.label+"</div>";Z+="		<div class='search-email-div'>"+aa.value+"</div>";Z+="	</div>";Z+="</div>";Z+="<div class='clear'></div>";return $("<li></li>").data("item.autocomplete",aa).append("<a>"+Z+"</a>").appendTo(Y)}$(".rankings-filter").on("click",function(){var X=$(this).data("filter");if(X==="default"){E(this);W("default")}else{E(this);W("korea")}});function E(X){$(".filter-active").removeClass("filter-active").addClass("filter-passive");$(X).removeClass("filter-passive").addClass("filter-active")}$("#home-c2-rankings-table").delegate(".home-rankings-list","mouseenter",function(X){$(this).prev().css({"border-bottom":"1px solid #72B0BF"});$(this).css({background:"#84D6E5","border-bottom":"1px solid #72B0BF",cursor:"pointer"})});$("#home-c2-rankings-table").delegate(".home-rankings-list","mouseleave",function(X){$(this).prev().css({"border-bottom":"1px solid #83CEE0"});$(this).css({background:"none","border-bottom":"1px solid #83CEE0",cursor:"auto"})});function W(Y){var X="";var Z=0;$.ajax({url:"/rankings",type:"GET",data:"option="+Y,dataType:"json",timeout:15000,success:function(ab){if(ab.length>0){for(var aa in ab){Z++;X+="<li style='border-bottom: 1px solid #83CEE0;' class='home-rankings-list'>";X+="<a href='user/"+ab[aa].sub_email+"'>";X+="<div style='float:left; width: 50px;'>";X+="<span class='rank-number'>"+Z+". </span>";X+="<img style='width:25px; height: 32px;' src='"+ab[aa].avatar_path+"' />";X+="</div>";X+="<span class='rank-name malgunbd'>"+ab[aa].full_name+"</span>";X+="<div style='float:right; width: 25px;'><span class='rank-count'>"+ab[aa].count+"</span></div>";X+="<div class='clear'></div>";X+="</a>";X+="</li>"}$("#home-c2-rankings-table ul").hide().html(X).fadeIn("500")}else{X+="<li class='home-rankings-list'>";"</li>";X+="<div>";X+="<span class='rank-number'>";X+="<img src='/images/stop_round.png' style='margin-right: 5px;'/> No results";X+="</span>";X+="<div class='clear'></div>";X+="</div>";X+="</li>";$("#home-c2-rankings-table ul").html(X)}},error:function(aa,ac,ab){i(ab);X+="<li class='home-rankings-list'>";"</li>";X+="<div>";X+="<span class='rank-number'>";X+="<img src='/images/stop_round.png' style='margin-right: 5px;'/> Connection timeout!";X+="</span>";X+="<div class='clear'></div>";X+="</div>";X+="</li>";$("#home-c2-rankings-table ul").html(X)}})}$("#home-recent-cards-div").delegate("#home-recent-cards-ul li","click",function(X){X.preventDefault();X.stopPropagation();$(this).children().find(".sent-cards-msg").show()});$("#home-recent-cards-div").delegate("a.close-sent-msg","click",function(X){X.preventDefault();X.stopPropagation();$(".sent-cards-msg").hide()});$("#home-recent-cards-div").delegate("#home-recent-cards-ul li","mouseenter",function(X){$(this).prev().css({"border-bottom":"1px solid #72B0BF"});$(this).css({background:"#84D6E5","border-bottom":"1px solid #72B0BF",cursor:"pointer"})});$("#home-recent-cards-div").delegate("#home-recent-cards-ul li","mouseleave",function(X){$(this).prev().css({"border-bottom":"1px solid #83CEE0"});$(this).css({background:"none","border-bottom":"1px solid #83CEE0",cursor:"auto"})});$("#sent-cards-more").on("click",function(){$("#show-all-cards").reveal()});$(".rank-status-span").hover(function(){$(this).next().show()},function(){$(this).next().hide()});ZeroClipboard.setMoviePath("/scripts/ZeroClipboard.swf");$("#home-recent-cards-div").delegate("#home-recent-cards-ul li","click",function(X){X.preventDefault();X.stopPropagation();B($(this).children().find(".view-message").data("key"))});e();function e(){var X="";$.ajax({url:"/message/get-all-cards",dataType:"JSON",timeout:15000,success:function(aa){var Z=1;X+="<ul id='home-all-cards-ul' style='margin-bottom: 10px;'>";for(var Y in aa){X+="<li style='border-bottom: 1px solid #D7EEF3; padding: 6px 0 0 10px;'>";X+="	<div style='position: relative; width: 220px; float: left;'>";X+="		<span style='float: left; font-size: 10px; position: relative; top: 10px; margin-right: 5px;'>"+Z+".</span>";X+="		<img style='float:left; margin-right: 10px; width: 25px; height: 32px;' src='"+aa[Y].avatar_path+"'>";X+="		<span style='display: block; position: relative; top: 2px; font-size: 15px; color: #007087;'>"+aa[Y].full_name+"</span>";X+="		<a class='pretty-date-a' href='javascript:void(0)' style='font-size:12px; color: #333;' title='"+P(aa[Y].date_with_tz)+"'>"+z(aa[Y].date_with_tz)+"</a>";X+="		<div class='clear'></div>";X+="	</div>";X+="	<div style='position: relative; top: 8px; right: 8px;'>";X+="		<a href='#' style='float: right' class='view-message' data-key='"+Y+"'>";X+="			<img style='width: 16px; height: 16px;' src='/images/buttons/arrow_right_blue_16.png' />";X+="		</a>";X+="		<div class='sent-cards-msg'>";X+="			<a href='#' class='close-sent-msg' style='float: right;' data-key='"+Y+"'>&#215;</a>";X+="			<div id='msg_"+Y+"' style='clear:both; border-bottom: 1px solid #EEE; border-top: 1px solid #EEE; padding: 5px 0; margin-bottom: 5px;'>"+aa[Y].message+"</div>";X+="			<div data-key='"+Y+"' id='d_clip_container_"+Y+"' style='position:relative'>";X+="				<div id='d_clip_button_"+Y+"' style='float: right;' class='button-gray copy-this-msg'>Copy</div>";X+="			</div>";X+="		</div>";X+="	</div>";X+="	<div class='clear'></div>";X+="</li>";Z++}X+="</ul>";$("#cards-modal").html(X)}})}$("#home-recent-cards-outer").delegate("div.jspScrollable","mouseenter",function(){$(".jspDrag").stop(true,true).fadeIn("slow")});$("#home-recent-cards-outer").delegate("div.jspScrollable","mouseleave",function(){$(".jspDrag").stop(true,true).fadeOut("slow")});t();function t(){var X="";$.ajax({url:"/message/get-top-recent-cards",dataType:"JSON",timeout:15000,success:function(ab){var aa=user_email.split("@");var Z=1;X+="<ul id='home-recent-cards-ul' style='margin-bottom: 10px;'>";for(var Y in ab){if(Y<5){X+="<li style='border-bottom: 1px solid #83CEE0; padding: 6px 0 0 10px;'>";X+="	<div style='position: relative; width: 220px; float: left;'>";X+="		<span style='float: left; font-size: 10px; position: relative; top: 10px; margin-right: 5px;'>"+Z+".</span>";X+="		<img style='float:left; margin-right: 10px; width: 25px; height: 32px;' src='"+ab[Y].avatar_path+"'>";X+="		<span style='display: block; position: relative; top: 2px; font-size: 15px; color: #007087;'>"+ab[Y].full_name+"</span>";X+="		<a class='pretty-date-a' href='javascript:void(0)' style='font-size:12px; color: #333;' title='"+P(ab[Y].date_with_tz)+"'>"+z(ab[Y].date_with_tz)+"</a>";X+="		<div class='clear'></div>";X+="	</div>";X+="	<div style='position: relative; top: 8px; right: 8px;'>";X+="		<a href='#' style='float: right' class='view-message' data-key='"+Y+"'>";X+="			<img style='width: 16px; height: 16px;' src='/images/buttons/arrow_right_blue_16.png' />";X+="		</a>";X+="		<div class='sent-cards-msg'>";X+="			<a href='#' class='close-sent-msg' style='font-weight: bold; font-size: 18px; float: right;' data-key='"+Y+"'>&#215;</a>";X+="			<div id='msg_"+Y+"' style='clear:both; border-bottom: 1px solid #EEE; border-top: 1px solid #EEE; padding: 5px 0; margin-bottom: 5px;'>"+ab[Y].message+"</div>";X+="			<div data-key='"+Y+"' id='d_clip_container_"+Y+"' style='position:relative'>";X+="				<div id='d_clip_button_"+Y+"' style='float: right; padding: 0 10px;' class='button-gray copy-this-msg'>Copy Text</div>";X+="			</div>";X+="		</div>";X+="	</div>";X+="	<div class='clear'></div>";X+="</li>";Z++}}X+="</ul>";$("#home-recent-cards-div").hide().html(X).fadeIn("700")}})}function B(X){ZeroClipboard.nextId=X;var Y=new ZeroClipboard.Client();Y.setText($("#home-recent-cards-ul li").find("#msg_"+X).text());Y.glue("d_clip_button_"+X,"d_clip_container_"+X)}curr_time_iso;function z(Z){var Y=moment(curr_time_iso);var X=moment(Z);return moment(Z).fromNow()}function P(Z){var Y="";var ac=new Date(Z);var ae=ac.getHours();if(ae<12){Y="AM"}else{Y="PM"}if(ae==0){ae=12}if(ae>12){ae=ae-12}var ab=ac.getMinutes();ab=ab+"";if(ab.length==1){ab="0"+ab}var af=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");var ad=ac.getDate();var aa=ac.getMonth();var X=ac.getFullYear();return ae+":"+ab+" "+Y+" - "+ad+" "+af[aa]+" "+X}function C(X){var ad=[[60,"Just Now"],[90,"1 Minute"],[3600,"Minutes",60],[5400,"1 Hour"],[86400,"Hours",3600],[129600,"1 Day"],[604800,"Days",86400],[907200,"1 Week"],[2628000,"Weeks",604800],[3942000,"1 Month"],[31536000,"Months",2628000],[47304000,"1 Year"],[3153600000,"Years",31536000],[4730400000,"1 Century"],];var ac=(""+X).replace(/-/g,"/").replace(/[TZ]/g," "),aa=new Date,ae=((aa-new Date(ac)+(aa.getTimezoneOffset()*600))/1000),Z=" Ago",Y=0,ab;if(ae<0){ae=Math.abs(ae);Z=""}while(ab=ad[Y++]){if(ae<ab[0]){if(ab.length==2){return ab[1]+(Y>1?Z:"")}else{return Math.round(ae/ab[2])+" "+ab[1]+(Y>1?Z:"")}}}if(ae>4730400000){return Math.round(ae/4730400000)+" Centuries"+Z}return X}M();function M(){$.getJSON("/rankings/updates",{format:"json"}).always(function(X){if(X.status>0){W("default");$("#home-c2-rankings-table").loading({action:"stop",opacity:0.1})}setTimeout(M,15000)})}function h(){$("#search-name").val("");$("#home-c3-textarea textarea").val("")}$("#home-post-message").bind("click",function(aa){var ad="";if(message_count===0){ad="<img style='float:left' src='/images/stop.png' />";ad+="<span style='float:left; width:240px;'>You have already sent your quota of Thx for this month!</span>";$("#home-c3-response-msg").html(ad);$(".home-c3-response-to-msg").removeClass("home-c3-success").addClass("home-c3-error").show();return 0}var ac=$("#search-name").data("employeeNameTo");var ae=$("#search-name").data("employeeCodeTo");var Y=$("#search-name").data("employeecodefrom");var Z=$.trim($("#home-c3-textarea textarea").val());var X=$("#search-name").val();var ab=0;if($(" #c3-hide-cb").is(":checked")){ab=1}if(!Q(X)){ad="<img style='float:left' src='/images/stop.png' />";ad+="<span style='float:left; width:240px;'>Invalid email format!</span>";$("#home-c3-response-msg").html(ad);$(".home-c3-response-to-msg").removeClass("home-c3-success").addClass("home-c3-error").show();return 0}if(X===user_email){ad="<img style='float:left' src='/images/stop.png' />";ad+="<span style='float:left; width:240px;'>Self-praise is good for your ego, but will not help you become winner of the month.</span>";$("#home-c3-response-msg").html(ad);$(".home-c3-response-to-msg").removeClass("home-c3-success").addClass("home-c3-error").show();return 0}if(X===""||Z===""){ad="<img style='float:left' src='/images/stop.png' />";ad+="<span style='float:left; width:240px;'>Email and message should not be left blank.</span>";$("#home-c3-response-msg").html(ad);$(".home-c3-response-to-msg").removeClass("home-c3-success").addClass("home-c3-error").show();return 0}$.ajax({url:"/message/post",type:"POST",dataType:"JSON",data:{code_to:ae,name_to:ac,code_from:Y,message:Z,email:X,hide:ab},timeout:20000,beforeSend:function(){$("#home-post-message").attr("disabled","disabled");$("#home-post-message span").text("Sending...")},success:function(af){h();$("#home-post-message span").text("Send!");if(af.m==="no more cards"){ad="<img style='float:left' src='/images/stop.png' />";ad+="<span style='float:left; width:240px;'>You have already sent your quota of Thx for this month!</span>";$("#home-c3-response-msg").html(ad);$(".home-c3-response-to-msg").removeClass("home-c3-success").addClass("home-c3-error").show();return 0}else{if(af.m==="old user"){$("#home-c2-rankings-table").loading({action:"start",opacity:0.1});ad="<img style='float:left' src='/images/check.png' />";ad+="<span style='float:left; width:240px;'>You have sent your Card to "+ac+"!</span>";$("#home-c3-response-msg").html(ad);$(".home-c3-response-to-msg").removeClass("home-c3-error").addClass("home-c3-success").show();W("korea");$("#home-c2-rankings-table").loading({action:"stop",opacity:0.1});message_count--;v();H();$("#home-post-message").removeAttr("disabled")}else{ad="<img style='float:left' src='/images/check.png' />";ad+="<span style='float:left; width:240px;'>Email has been successfully sent.</span>";$("#home-c3-response-msg").html(ad);$(".home-c3-response-to-msg").removeClass("home-c3-error").addClass("home-c3-success").show();message_count--;v();H();$("#home-post-message").removeAttr("disabled")}}t()},error:function(af,ah,ag){if(ag==="timeout"){n()}}})});$("#home-c3-response-close a").on("click",function(){$(".home-c3-response-to-msg").hide()});var l=0;$("#text-area").on("keyup",f);$("#text-area").on("mousedown",f);function f(){if($($("#text-area")).val()=="I appreciate you because..."){l="0"}else{l=$($("#text-area")).val().length}w(l)}function w(X){$("#msg_count").html(parseInt(140)-parseInt(X));if(X>=1&&X<=140){$("#home-post-message").removeAttr("disabled");$("#home-post-message").removeClass("button-disabled").addClass("button-blue")}else{$("#home-post-message").attr("disabled",true);$("#home-post-message").removeClass("button-blue").addClass("button-disabled")}}function Q(X){var Y=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Y.test(X)}$("#home-display-birthday-ul").delegate("button","click",function(){N("all")});$("#home-display-birthday-ul").delegate(".home-rankings-list","mouseenter",function(X){$(this).prev().css({"border-bottom":"1px solid #72B0BF"});$(this).css({background:"#84D6E5","border-bottom":"1px solid #72B0BF",cursor:"pointer"})});$("#home-display-birthday-ul").delegate(".home-rankings-list","mouseleave",function(X){$(this).prev().css({"border-bottom":"1px solid #83CEE0"});$(this).css({background:"none","border-bottom":"1px solid #83CEE0",cursor:"auto"})});N("default");function N(Z){var X=new Array("","January","February","March","April","May","June","July","August","September","October","November","December");var aa="";var Y="";var ab="";$.ajax({url:"/birthday/show-birthday-list",type:"GET",data:"option="+Z,dataType:"json",timeout:15000,success:function(ae){if(Z==="all"){var ad=0;for(var ac in ae){ab=ae[ac].dob.split("-");if(ad===5){rankingsList+="<li class='home-rankings-list last-child-rankings-li'>"}else{rankingsList+="<li class='home-rankings-list'>"}aa+="	<div class='home-birthday-text-div modal-display' style='width: 130px;'>";aa+="		<span class='blue'>"+X[parseFloat(ab[1])]+"</span><span class='blue'>"+parseFloat(ab[2])+"</span>";aa+="	</div>";aa+="	<div class='home-birthday-img-div'>";aa+="		<img src='"+ae[ac].avatar_path+"' />";aa+="	</div>";aa+="	<div class='home-birthday-name-div modal-display malgunbd'>"+ae[ac].full_name+"</div>";aa+="	<div class='clear'></div>";aa+="</li>";ad++}$("#modal-display-birthday-ul").html(aa);$("#show-all-birthday-modal").reveal()}else{var ad=1;for(var ac in ae){if(ac<5){ab=ae[ac].dob.split("-");aa+="<li class='home-rankings-list' style='border-bottom: 1px solid #83CEE0; padding: 10px 0 10px 10px;'>";aa+="	<a href='#' style='display: block;'>";aa+="	<div class='home-birthday-text-div'>";aa+="		<span class='blue'>"+X[parseFloat(ab[1])]+"</span>&nbsp;<span class='blue'>"+parseFloat(ab[2])+"</span>";aa+="	</div>";aa+="	<div class='home-birthday-name-div malgunbd'>"+ae[ac].full_name+"</div>";aa+="	<div class='clear'></div>";aa+="	</a>";aa+="</li>";ad++}}$("#home-display-birthday-ul").html(aa)}},error:function(ac,ae,ad){if(ad==="timeout"){n()}}})}$("#home-list-past-winners").delegate("a","click",function(){b($(this).data("year"))});b(2012);function b(Z){var X=new Array("","January","February","March","April","May","June","July","August","September","October","November","December");var ab=Z-1;var Y=Z+1;var aa="<li style='background: #DDDDDD'>";aa+="	<div id='home-past-winner-year-scroll'>";aa+="		<a href='javascript:void(0)' id='past-winners-scrolls' data-year='"+ab+"'>";aa+="		<img src='/images/arrow_left_gray.png' style='margin-right: 5px;'>";aa+="		</a> ";aa+=Z;aa+="		<a href='javascript:void(0)' id='past-winners-scroll' data-year='"+Y+"'>";aa+="		<img src='/images/arrow_right_gray.png' style='margin-left: 5px;'>";aa+="		</a> ";aa+="	</div>";aa+="</li>";$.ajax({url:"/winner/fetch-all-winners-per",type:"GET",dataType:"json",data:"year="+Z+"&department_code="+department_code,beforeSend:function(){$("#home-list-past-winners").loading({action:"start",opacity:0.1})},success:function(ae){var ad=0;for(var ac in ae){if(ad%2){aa+="<li>"}else{aa+="<li class='zebra'>"}aa+="	<div class='home-past-winner-img'>";aa+="		<img src='"+ae[ac].avatar_path+"' />";aa+="	</div>";aa+="	<div class='home-past-winner-name'><a href='/winner/"+ae[ac].month+"/"+ae[ac].year+"'>"+ae[ac].fullname+"</a></div>";aa+="	<div class='home-past-winner-month'>";aa+=X[ae[ac].month];aa+="	</div>";aa+="	<div class='clear'></div>";aa+="</li>";ad++}$("#home-list-past-winners").loading({action:"stop",});$("#home-list-past-winners ul").html(aa)}})}$("#home-past-winners-btn").on("click",J);function J(){$("#home-list-past-winners").reveal()}H();function H(){var X="";switch(parseInt(message_count)){case 1:X+="<img src='/images/logo/logo-pink.png' />";X+="<img src='/images/logo/logo-pink.png' />";X+="<img src='/images/logo/logo-gray.png' />";$("#home-c3-box-imgs").html(X);break;case 2:X+="<img src='/images/logo/logo-pink.png' />";X+="<img src='/images/logo/logo-gray.png' />";X+="<img src='/images/logo/logo-gray.png' />";$("#home-c3-box-imgs").html(X);break;case 3:X+="<img src='/images/logo/logo-gray.png' />";X+="<img src='/images/logo/logo-gray.png' />";X+="<img src='/images/logo/logo-gray.png' />";$("#home-c3-box-imgs").html(X);break;default:X+="<img src='/images/logo/logo-pink.png' />";X+="<img src='/images/logo/logo-pink.png' />";X+="<img src='/images/logo/logo-pink.png' />";$("#home-c3-box-imgs").html(X);break}}function L(){$("#search-name").attr("disabled","disabled").css({background:"rgba(0,0,0,.2)"});$("#text-area").attr("disabled","disabled").css({background:"rgba(0,0,0,.2)",border:"1px solid rgba(0,0,0,.2)"});$("#home-post-message").attr("disabled","disabled").removeClass("button-gray").addClass("button-disabled-2")}var x="";$("#msg-counter").hover(function(){$(this).css("cursor","pointer");if(message_count>1){x="Cards"}else{x="Card"}$("#home-c3-send-btn").append("<div id='message-count-tooltip'>You have "+message_count+" "+x+" left to send</div>").show()},function(){$("#message-count-tooltip").remove()});function v(){$("#msg-counter").text(message_count)}$("#open-feedback").on("click",function(){$(this).hide();$("#feedback-box").show("slide",{direction:"right"},500)});$("#close-feedback").on("click",function(){$("#feedback-box").hide("slide",{direction:"right"},500,function(){$("#open-feedback").show();$("#feed-send-done").hide();$("#feed-send-btn").show()})});$("#feed-send-btn").on("click",function(){var X=$.trim($("#feedback-textarea").val());if(X===""){return false}$.ajax({url:"/index/send-feedback",type:"POST",dataType:"JSON",data:{msg:X},beforeSend:function(){$("#feed-send-btn").hide();$("#feed-send-loading").show()},success:function(Y){$("#feed-send-loading").hide();$("#feed-send-done").show();$("#feedback-textarea").val("")}})});var K="upload-img";var g="";$("#initial-upload").live("change",function(){K="upload-img";g=false;if(K==="upload-img"){$("#initial-upload-form").ajaxForm({target:".home-c2-edit-upload-view",beforeSubmit:function(){$(".home-c2-upload-loader").show()},success:function(){$(".home-c2-upload-loader").hide()}}).submit()}});$("#initial-pic-upload-btn").on("click",function(){if(K==="upload-img"){$.ajax({url:"/index/update-initial-profile-pic",beforeSend:function(){$(".home-c2-upload-loader").show()},success:function(X){$(".home-c2-upload-loader").hide();$("#upload-pic-modal").trigger("reveal:close");F()}})}else{$.ajax({url:"/index/update-profile-pic",type:"GET",dataType:"JSON",data:"avatar="+g,beforeSend:function(){$(".home-c2-upload-loader").show()},success:function(X){$(".home-c2-upload-loader").hide();$("#upload-pic-modal").trigger("reveal:close");F()}})}});function F(){$.ajax({url:"/index/update-thxbox",type:"GET",dataType:"HTML",success:function(X){$("#my-thxbox").html(X);$("#my-thxbox").loading({action:"stop"});$("#upload-pic-modal").trigger("reveal:close")}})}var q=false;var V=false;var O=$("#edit-fullname").val();var T="upload-img-edit";$("#file").live("change",function(){V=true;q=false;if(V){$("#imageform").ajaxForm({target:".home-c2-edit-upload-view",beforeSubmit:function(){$(".home-c2-upload-loader").show()},success:function(){$(".home-c2-upload-loader").hide()}}).submit()}});$(".avatar-options-a").on("click",function(){$(".edit-profile-avatar-div ul li > a").each(function(Y,Z){$(Z).removeClass("edit-profile-chosen")});$(this).addClass("edit-profile-chosen");var X=$(this).data("path");$(".home-c2-edit-upload-view").html("<img src='/images/profile/"+X+"'>");q=X;g=X;V=false;K=false});$("#edit-profile-btn").on("click",function(){var X=$.trim($("#edit-fullname").val());if(X==""){alert("Fullname should not be left blank!");$("#edit-fullname").val(O);return false}$("#home-c2-edit-loader").show();if(V){o()}else{if(!q){o()}else{c()}}});$("#home-content-c1").delegate("a#edit-profile-trigger","click",function(X){$("#editPassModal").remove();$("#edit-profile-outer").show();X.preventDefault();$("#myModal").reveal()});function o(){$.ajax({url:"/index/update-profile",type:"GET",dataType:"json",data:$("#edit-profile-form").serialize(),beforeSend:function(){},success:function(X){$("#home-c2-edit-loader").hide();$("#my-thxbox").loading({action:"start",background:"#FFF",opacity:0.5});d()}})}function d(){$.ajax({url:"/index/update-thxbox",type:"GET",dataType:"html",success:function(X){$("#myModal").trigger("reveal:close");$("#my-thxbox").html(X);$("#my-thxbox").loading({action:"stop"})},error:function(X,Z,Y){}})}function c(){$.ajax({url:"/index/update-profile",type:"GET",dataType:"json",data:$("#edit-profile-form").serialize()+"&avatar="+q,success:function(X){$("#home-c2-edit-loader").hide();$("#myModal").trigger("reveal:close");$("#my-thxbox").loading({action:"start",background:"#FFF",opacity:0.5});$.ajax({url:"/index/update-thxbox",type:"GET",dataType:"HTML",success:function(Y){$("#my-thxbox").html(Y);$("#my-thxbox").loading({action:"stop"})},error:function(Y,aa,Z){}})}})}document.getElementById("edit-profile-form").onsubmit=function(){return false};$("#edit-profile-password").on("click",function(){$("#edit-profile-outer").hide("slide",{direction:"left"},300,function(){var X="<div id='editPassModal' class='edit-pass-modal'>";X+="	<div id='editPassInner'>";X+="		<h1>Reset Password</h1>";X+="		<div>Current password</div>";X+="		<input type='password' id='current_pass' />";X+="		<div>New password</div>";X+="		<input type='password' id='new_pass' />";X+="		<div>Verify password</div>";X+="		<input type='password' id='new_pass_verify' />";X+="	</div>";X+="	<div class='edit-footer-bg' style='margin-top: 0;'>";X+="		<a href='javascript:void(0)'' class='edit-profile-back' style='color:#EC4E09; font-size: 11px; position: absolute; top:26px; left: 20px'>";X+="		&larr; Edit Profile";X+="		</a>";X+="		<div id='home-c2-edit-save' class='left'>";X+="			<button class='button-gray close-reveal right' style='width: 100px; margin-left:10px;' id='edit-password-btn-cancel'>";X+="				<span>Cancel</span>";X+="			</button>";X+="			<button class='button-gray right' style='width: 100px' id='edit-password-btn'>";X+="				<span>Save</span>";X+="			</button>";X+="		</div>";X+="		<div class='clear'></div>";X+="	</div>";$("#myModal").append(X).fadeIn("200")})});$("#myModal").delegate("button#edit-password-btn-cancel","click",function(){$("#myModal").trigger("reveal:close")});$("#myModal").delegate("a.edit-profile-back","click",function(){$("#editPassModal").hide("slide",{direction:"right"},300,function(){$("#editPassModal").remove();$("#edit-profile-outer").fadeIn("200")})});$("#myModal").delegate("a.home-error-close","click",function(){$(".home-error-box").remove()});$("#myModal").delegate("button#edit-password-btn","click",s);function s(){var Y=$.trim($("#current_pass").val());var Z=$.trim($("#new_pass").val());var X=$.trim($("#new_pass_verify").val());if(Y===""||Z===""||X===""){y("You must enter all the fields to change your password.");return 0}Y=$("#current_pass").val();Z=$("#new_pass").val();X=$("#new_pass_verify").val();if(Z!==X){y("Passwords don't match!");return 0}$.ajax({url:"/index/check-current-password",type:"POST",dataType:"JSON",data:{password:Y},success:function(aa){if(!aa){y("The current password you've entered is incorrect!")}else{$.ajax({url:"/index/update-password",type:"POST",dataType:"JSON",data:{password:Z},beforeSend:function(){$("#editPassModal").fadeOut();I("Updating your password")},success:function(ab){D();$("#myModal").css("height","")}})}}})}function y(Y){$(".home-error-box").remove();var X="<div class='home-error-box'>";X+="	<div class='error-msg-div'>";X+="		<span>"+Y+"</span>";X+="		<a href='#' class='home-error-close'>&#215;</a>";X+="	</div>";X+="</div>";$("#editPassInner").prepend(X);$(".error-msg-div").effect("shake",{times:2},100)}function I(Y){var X="";X+="	<div class='edit-pass-loading'>";X+="		"+Y+"...<img src='/images/loader/loading_circle.gif' />";X+="	</div>";$("#editPassModal").html(X).fadeIn(800)}function D(){var X="";X+="	<div class='edit-pass-loading' style='font-size: 16px;'>";X+="		Woo hoo! Your password has been changed!";X+="	</div>";X+="	<div class='edit-footer-bg' style='margin-top: 20px;'>";X+="		<a href='javascript:void(0)' class='edit-profile-back' style='color:#EC4E09; font-size: 11px;'>";X+="		&larr; Edit Profile";X+="		</a>";X+="		<div class='clear'></div>";X+="	</div>";window.setTimeout(function(){$("#editPassModal").hide().html(X).fadeIn(1000)},2000)}if(hasSignedUp){window.setTimeout(function(){$("#upload-pic-modal").reveal({animation:"fade"})},3000)}function n(){$("#timeout-modal-div").reveal({animation:"fade"})}if(resetPassStatus>0){window.setTimeout(function(){$("#edit-profile-outer").hide("slide",{direction:"left"},300,function(){var X="<div id='editPassModal' class='edit-pass-modal'>";X+="	<div id='editPassInner'>";X+="		<h1>Choose a New Password</h1>";X+="		<div>Current password</div>";X+="		<input type='password' id='current_pass' />";X+="		<div>New password</div>";X+="		<input type='password' id='new_pass' />";X+="		<div>Verify password</div>";X+="		<input type='password' id='new_pass_verify' />";X+="	</div>";X+="	<div class='edit-footer-bg' style='margin-top: 0;'>";X+="		<div id='home-c2-edit-save' class='left'>";X+="			<button class='button-gray left' style='width: 100px' id='edit-password-btn'>";X+="				<span>Save</span>";X+="			</button>";X+="			<button class='button-gray close-reveal left' style='width: 100px; margin-left:10px;' id='edit-password-btn-cancel'>";X+="				<span>Cancel</span>";X+="			</button>";X+="		</div>";X+="		<div class='clear'></div>";X+="	</div>";$("#myModal").append(X).fadeIn("200")});$("#myModal").reveal({animation:"fade"})},1000)}function i(X){$("#timeout-modal span").text(X);n()}$(".close-small").on("click",function(){$(".notification-box").html("");$(".notification-box").slideUp()});W("korea");$("#generate-comment-btn").on("click",a);var S=new Array();k();function k(){$.ajax({url:"/template/fetch-random-message",type:"GET",dataType:"JSON",success:function(Y){for(var X in Y){S.push(Y[X].message)}}})}var m=0;var A=0;function a(){var X=U(0,S.length-1);$("#text-area").val(S[m]);f()}function U(Y,X){A=Math.floor(Math.random()*(X-Y+1))+Y;if(A===m){U(Y,X)}else{m=A}return A}}());