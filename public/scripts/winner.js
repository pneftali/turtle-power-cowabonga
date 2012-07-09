/*!
 * jQuery Transit - CSS3 transitions and transformations
 * Copyright(c) 2011 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(d){function k(a){var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in i.style)return a;for(a=0;a<b.length;++a){var d=b[a]+c;if(d in i.style)return d}}function j(a){"string"===typeof a&&this.parse(a);return this}function p(a,b,c){!0===b?a.queue(c):b?a.queue(b,c):c()}function m(a){var b=[];d.each(a,function(a){a=d.camelCase(a);a=d.transit.propertyMap[a]||a;a=r(a);-1===d.inArray(a,b)&&b.push(a)});return b}function q(a,b,c,e){a=m(a);d.cssEase[c]&&(c=d.cssEase[c]);
var h=""+n(b)+" "+c;0<parseInt(e,10)&&(h+=" "+n(e));var f=[];d.each(a,function(a,b){f.push(b+" "+h)});return f.join(", ")}function f(a,b){b||(d.cssNumber[a]=!0);d.transit.propertyMap[a]=e.transform;d.cssHooks[a]={get:function(b){return(d(b).css("transform")||new j).get(a)},set:function(b,e){var h=d(b).css("transform")||new j;h.setFromString(a,e);d(b).css({transform:h})}}}function r(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function g(a,b){return"string"===typeof a&&!a.match(/^[\-0-9\.]+$/)?
a:""+a+b}function n(a){d.fx.speeds[a]&&(a=d.fx.speeds[a]);return g(a,"ms")}d.transit={version:"0.1.3",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var i=document.createElement("div"),e={},s=-1<navigator.userAgent.toLowerCase().indexOf("chrome");e.transition=k("transition");e.transitionDelay=k("transitionDelay");e.transform=k("transform");
e.transformOrigin=k("transformOrigin");i.style[e.transform]="";i.style[e.transform]="rotateY(90deg)";e.transform3d=""!==i.style[e.transform];d.extend(d.support,e);var o=e.transitionEnd={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[e.transition]||null,i=null;d.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)"};d.cssHooks.transform={get:function(a){return d(a).data("transform")},
set:function(a,b){var c=b;c instanceof j||(c=new j(c));a.style[e.transform]="WebkitTransform"===e.transform&&!s?c.toString(!0):c.toString();d(a).data("transform",c)}};d.cssHooks.transformOrigin={get:function(a){return a.style[e.transformOrigin]},set:function(a,b){a.style[e.transformOrigin]=b}};f("scale");f("translate");f("rotate");f("rotateX");f("rotateY");f("rotate3d");f("perspective");f("skewX");f("skewY");f("x",!0);f("y",!0);j.prototype={setFromString:function(a,b){var c="string"===typeof b?b.split(","):
b.constructor===Array?b:[b];c.unshift(a);j.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=g(a,"deg")},rotateX:function(a){this.rotateX=g(a,"deg")},rotateY:function(a){this.rotateY=g(a,"deg")},scale:function(a,b){void 0===b&&(b=a);this.scale=a+","+b},skewX:function(a){this.skewX=
g(a,"deg")},skewY:function(a){this.skewY=g(a,"deg")},perspective:function(a){this.perspective=g(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);null!==a&&(this._translateX=g(a,"px"));null!==b&&(this._translateY=g(b,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||
0},scale:function(){var a=(this.scale||"1,1").split(",");a[0]&&(a[0]=parseFloat(a[0]));a[1]&&(a[1]=parseFloat(a[1]));return a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));a[3]&&(a[3]=g(a[3],"deg"));return a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,d,e){b.setFromString(d,e)})},toString:function(a){var b=[],c;for(c in this)if(this.hasOwnProperty(c)&&(e.transform3d||!("rotateX"===
c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"));return b.join(" ")}};d.fn.transition=d.fn.transit=function(a,b,c,f){var h=this,g=0,i=!0;"function"===typeof b&&(f=b,b=void 0);"function"===typeof c&&(f=c,c=void 0);"undefined"!==typeof a.easing&&(c=a.easing,delete a.easing);"undefined"!==typeof a.duration&&(b=a.duration,delete a.duration);"undefined"!==typeof a.complete&&
(f=a.complete,delete a.complete);"undefined"!==typeof a.queue&&(i=a.queue,delete a.queue);"undefined"!==typeof a.delay&&(g=a.delay,delete a.delay);"undefined"===typeof b&&(b=d.fx.speeds._default);"undefined"===typeof c&&(c=d.cssEase._default);var b=n(b),j=q(a,b,c,g),l=d.transit.enabled&&e.transition?parseInt(b,10)+parseInt(g,10):0;if(0===l)return p(h,i,function(b){h.css(a);f&&f();b()}),h;var k={},m=function(b){var c=!1,g=function(){c&&h.unbind(o,g);0<l&&h.each(function(){this.style[e.transition]=
k[this]||null});"function"===typeof f&&f.apply(h);"function"===typeof b&&b()};0<l&&o&&d.transit.useTransitionEnd?(c=!0,h.bind(o,g)):window.setTimeout(g,l);h.each(function(){0<l&&(this.style[e.transition]=j);d(this).css(a)})};p(h,i,function(a){var b=0;"MozTransition"===e.transition&&25>b&&(b=25);window.setTimeout(function(){m(a)},b)});return this};d.transit.getTransitionValue=q})(jQuery);




$(document).ready(function(){


/*---------------------------
 Display Messages on the boards
----------------------------*/	
	var paging_global = 1;
	$( '#winner-content-back-btn' ).on('click', function(){
		fetchMessage($(this).data('start'), $(this).data('paging'));
	});

	$( '#winner-content-next-btn' ).on('click', function(){
		fetchMessage($(this).data('start'), $(this).data('paging'));
	});

	$( '#winner-pagination' ).delegate('a', 'click', function(){
		
		fetchMessage(parseInt(this.id), parseInt($(this).data('paging')));
		//console.log('delegate: '+this.id+' and '+$(this).data('paging'));
	})

	var pagingCount = Math.ceil(totalMsgCount/6);
	fetchMessage(0, 1);
	function fetchMessage(start, paging)
	{			
		//console.log('fetching message...'+start);
		//console.log('total message count: '+totalMsgCount);

		

		var bgColorArray = new Array(
			'#B7B4FF', '#CFE3FF', '#FCF49C', '#A2FAF6', 
			'#F297B3', '#B8FFB6', '#FFFFFF', '#FFFFFF'
			);

		//var bgColorArray = new Array('#8781FF');
		var key = '';
		
		if(start >= 0){

		$.ajax({
			url: '/winner/fetch-messages',
			type: 'GET',
			dataType: 'json',
			data: "start="+start+"&employee_code="+employee_code+"&month="+winner_month+"&year="+winner_year,
			success: function(d){		

				if(d.length > 0 && totalMsgCount > 0){
					removeMessageDiv();
					pagination(parseInt(start), parseInt(paging));

					//console.log(d.length);
					var count=1;
					var tmpContent='';
					var concatenatedMessage='';
					for(var key in d){

						colorkey = Math.floor(Math.random() * bgColorArray.length);

						if(d[key].message.length > 25){
							concatenatedMessage = d[key].message.substr(0, 25)+'...';
						} else{
							concatenatedMessage = d[key].message;
						}

						tmpContent += "	<div class='msg-small' style='background:"+bgColorArray[colorkey]+"'>";
						tmpContent += "		<img style='margin-right: 5px; vertical-align: bottom; position:absolute; top:-25px;' src='/images/pin.png' />";						
						tmpContent += "		<div>";
						if(d[key].anonymous > 0){					
							tmpContent += "			<div>";						
							tmpContent += "				<span style='display: block; font-size: 13px; color: #9C4706;' class='malgunbd'>Anonymous</span>";
							tmpContent += "				<span class='malgunbd date-txt'>"+d[key].pretty_date_posted+"</span>";
							tmpContent += "			</div>";			
						} else { 
							tmpContent += "			<img style='margin-right: 5px; vertical-align: bottom; float: left;' src='"+d[key].avatar_path+"' />";						
							tmpContent += "			<div>";						
							tmpContent += "				<span style='display: block; font-size: 13px; color: #9C4706;' class='malgunbd'>"+d[key].employee_code_from_name+"</span>";
							tmpContent += "				<span class='malgunbd date-txt'>"+d[key].pretty_date_posted+"</span>";
							tmpContent += "			</div>";						
						}
						tmpContent += "		</div>";
						tmpContent += "		<div class='profile-message-div malgunbd' data-messageID='"+d[key].id+"'>"+concatenatedMessage+"</div>";
						tmpContent += "	</div>";

						tmpContent += "	<div class='profile-message-big malgunbd' style='background:"+bgColorArray[colorkey]+"'>"
						if(d[key].anonymous > 0){					
							tmpContent += "		<div>";						
							tmpContent += "			<span style='font-size: 13px; margin-bottom: 15px; color: #9C4706;' class='malgunbd'>Anonymous</span>";
							tmpContent += "			<span class='malgunbd date-txt'>"+d[key].pretty_date_posted+"</span>";
							tmpContent += "		</div>";
						} else {
							tmpContent += "		<img style='margin-right: 5px; vertical-align: bottom; float: left;' src='"+d[key].avatar_path+"' />";
							tmpContent += "		<div>";						
							tmpContent += "			<span style='font-size: 13px; margin-bottom: 15px; color: #9C4706;' class='malgunbd'>"+d[key].employee_code_from_name+"</span>";
							tmpContent += "			<span class='malgunbd date-txt'>"+d[key].pretty_date_posted+"</span>";
							tmpContent += "		</div>";
						}
						tmpContent += 		d[key].message;
						tmpContent += "	</div>";

						$( '#winner_box_'+count++ ).html(tmpContent);	
						tmpContent ='';		

					}
					
					if(d.length > 0){
						$( '#winner-content-back-btn' ).data('start', start-6);
						$( '#winner-content-next-btn' ).data('start', start+6);

						$( '#winner-content-back-btn' ).data('paging', paging-1);
						$( '#winner-content-next-btn' ).data('paging', paging+1);
					}
				} else if(totalMsgCount > 0){
					fetchMessage(0, 1);
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				/*
				console.log('Error Response Text: ' +jqXHR.responseText);
				console.log('Error TextStatus - timeout: ' +textStatus.timeout);
				console.log('Error TextStatus - error: ' +textStatus.error);
				console.log('Error TextStatus - notmodified: ' +textStatus.notmodified);
				console.log('Error TextStatus - success: ' +textStatus.success);
				console.log('Error TextStatus - parsererror: ' +textStatus.parsererror);
				console.log('Error errorThrown: ' +errorThrown);		
				*/		
			}	
		});

		} else{
			console.log(start);
		}
	}


	
	function pagination(start, selected_item)
	{
		var pagingList 		= '';		
		var pagingCounter 	= 1;
		var pagingID 		= 0;
		var i 				= 1;


		var pagingCountLastFive = pagingCount-1;

		/*
		console.log('start: '+start);
		console.log('paging: '+selected_item);
		console.log('pageCount: '+pagingCount);
		*/

		if( pagingCount <= 5){
			// pagination for 5 max page count
			generatePaginationItemsLessThanFive(selected_item);			
		} else{
			if( selected_item >= 5 && selected_item < pagingCountLastFive ){
				//console.log('option B');
				// Option B
				// pagination if the user has clicked the fifth item
				generatePaginationItemsOptionB(selected_item, start);
			} else if( selected_item == pagingCount || selected_item == pagingCountLastFive ){ 
				//console.log('option C');
				// Option C
				// pagination if the user has clicked the last item
				generatePaginationItemsOptionC(selected_item, start);
			} else{
				//console.log('option A');
				// Option A
				// pagination if the user has more than 5 items and has clicked items 1-4
				generatePaginationItemsMoreThanFiveOptionA(selected_item);
			}
		}		
		//console.log('------------------------------');
	}

	function generatePaginationItemsLessThanFive(selected_item)
	{
		var pagingID 	= 0;
		var pagingList 	= '';

		for(var i=1; i <= pagingCount; i++){						
			if(i == selected_item){
				pagingList += "<li id='selected'><a id="+pagingID+" data-paging='"+i+"' href='javascript:void(0)'>"+i+"</a></li>";
			} else {
				pagingList += "<li><a id="+pagingID+" data-paging='"+i+"' href='javascript:void(0)'>"+i+"</a></li>";
			}							
			pagingID += 6;
		}
		$( "#winner-pagination ul" ).html(pagingList);
	}


	function generatePaginationItemsMoreThanFiveOptionA(selected_item)
	{
		var pagingID 		= 0;
		var pagingLastID	= (pagingCount * 6) - 6;
		var pagingList 		= '';
			
		for(var i=1; i <= pagingCount; i++){	
			if(i%6){
				if(i == selected_item){
					pagingList += "<li id='selected'><a id="+pagingID+" data-paging='"+i+"' href='javascript:void(0)'>"+i+"</a></li>";
				} else {
					pagingList += "<li><a id="+pagingID+" data-paging='"+i+"' href='javascript:void(0)'>"+i+"</a></li>";
				}				
			} else {
				pagingList += "<li><span id='paging-more'>...</span></li>"; 
				pagingList += "<li><a id="+pagingLastID+" data-paging='"+pagingCount+"' href='javascript:void(0)'>"+pagingCount+"</a></li>";
				break; 
			}	
			pagingID += 6;
		}
		$( "#winner-pagination ul" ).html(pagingList);
	}


	function generatePaginationItemsOptionB(selected_item, pagingID)
	{
		var pagingList 	= '';

		pagingList += "<li><a id="+0+" data-paging='"+1+"' href='javascript:void(0)'>"+1+"</a></li>";
		pagingList += "<li><span class='paging-more'>...</span></li>";
		
		var paging 		= pagingID - 6;
		var paging_last = totalMsgCount - 6;
		var prev 		= selected_item - 1;
		var next 		= selected_item + 1;



		for(var i=prev; i <= next; i++){
			if(i == selected_item){
				pagingList += "<li id='selected'><a id="+paging+" data-paging='"+i+"' href='javascript:void(0)'>"+i+"</a></li>";
			} else {
				pagingList += "<li><a id="+paging+" data-paging='"+i+"' href='javascript:void(0)'>"+i+"</a></li>";
			}						
			paging += 6;
		}

		pagingList += "<li><span id='paging-more'>...</span></li>"; 
		pagingList += "<li><a class="+paging_last+" data-paging='"+pagingCount+"' href='javascript:void(0)'>"+pagingCount+"</a></li>";

		$( "#winner-pagination ul" ).html(pagingList);
	}


	function generatePaginationItemsOptionC(selected_item, pagingID)
	{
		var pagingList 	= '';

		pagingList += "<li><a id="+0+" data-paging='"+1+"' href='javascript:void(0)'>"+1+"</a></li>";
		pagingList += "<li><span class='paging-more'>...</span></li>";
		
		var paging 		= (pagingCount * 6) - 30;


		var pagingLastFive 	= pagingCount - 4;
		var x 				= pagingLastFive;
		for(var i=pagingCount; i >= pagingLastFive; i--, x++){
			if(x == selected_item){
				pagingList += "<li id='selected'><a id="+paging+" data-paging='"+x+"' href='javascript:void(0)'>"+x+"</a></li>";
			} else {
				pagingList += "<li><a id="+paging+" data-paging='"+x+"' href='javascript:void(0)'>"+x+"</a></li>";
			}						
			paging += 6;
		}

		$( "#winner-pagination ul" ).html(pagingList);
	}


	function removeMessageDiv()
	{
		for(var i=1; i<7; i++){
			$( '#winner_box_'+i ).html('');
		}
	}

/*---------------------------
 Animate messages
----------------------------*/	
	var degree;
	var currentShortMsg;

	var flag 	= 'small'; // this will contain two values: small & big

	$( '.winner-notes div' ).hover(		
		function () {

			$( "#"+$(this).attr('id')+" .profile-message-big" ).show();
			
			$( this ).css({
				'cursor' : 'pointer'
			})
			

		},
		function (){	

			$( "#"+$(this).attr('id')+" .profile-message-big" ).hide();

		}		
	);

	function insertAllContent(id){	

		//console.log(id);
		var msg_id = $( id+" "+".profile-message-div" ).data('messageid');
		var tmpContent = '';
		
		$.ajax({			
			url: '/profile/fetch-single-message',
			type: 'GET',
			dataType: 'json',
			data: "msg_id="+msg_id,
			beforeSend: function(){
				//console.log('requesting for a particular msg...');
				$( id ).html("<div style='height:100px; position: relative;'><img style='position: absolute; top: 50%; left: 38%;' src='/images/loader/loading.gif' /></div>");
			},
			success: function(data){
				//console.log(data);

				tmpContent += "<div style='font-family: arial; font-size: 15px; margin-bottom: 5px; color: #9C4706;'>";
				tmpContent += "<img style='margin-right: 5px; vertical-align: bottom;' src='"+data.avatar_path+"' />";
				tmpContent += data.employee_code_from_name+"</div>";
				tmpContent += "<div style='overflow-y: scroll; height: 200px; padding:10px; -webkit-transform: (1,1)'>"+data.message+"</div>";
				$( id ).html(tmpContent);
				
			},
			error: function(jqXHR, textStatus, errorThrown){
				/*
				console.log('Error Response Text: ' +jqXHR.responseText);
				console.log('Error TextStatus - timeout: ' +textStatus.timeout);
				console.log('Error TextStatus - error: ' +textStatus.error);
				console.log('Error TextStatus - notmodified: ' +textStatus.notmodified);
				console.log('Error TextStatus - success: ' +textStatus.success);
				console.log('Error TextStatus - parsererror: ' +textStatus.parsererror);
				console.log('Error errorThrown: ' +errorThrown);				
				*/
			}	
		})
		
		
	}



/*---------------------------
	Feedback Event
----------------------------*/

	$( '#open-feedback' ).on('click', function(){
		$(this).hide();
		$( '#feedback-box' ).show('slide', {direction: 'right'}, 500);
	});

	$( '#close-feedback' ).on('click', function(){
		$( '#feedback-box' ).hide('slide', {direction: 'right'}, 500, function(){
			$( '#open-feedback' ).show();
			$( '#feed-send-done' ).hide();
			$( '#feed-send-btn' ).show();	
		});
		
	});

	$( '#feed-send-btn' ).on('click', function(){
		var feedback_msg = $.trim($( '#feedback-textarea' ).val());
		if(feedback_msg === ''){
			return false;
		}

		$.ajax({
			url: '/index/send-feedback',
			type: 'POST',
			dataType: 'JSON',
			data: {msg : feedback_msg},
			beforeSend: function(){
				$( '#feed-send-btn' ).hide();
				$( '#feed-send-loading' ).show();
			},
			success: function(d){
				$( '#feed-send-loading' ).hide();
				$( '#feed-send-done' ).show();
				$( '#feedback-textarea' ).val('');
			}
		})
	});	

	

});









