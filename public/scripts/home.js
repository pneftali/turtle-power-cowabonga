// moment.js
// version : 1.6.2
// author : Tim Wood
// license : MIT
// momentjs.com
(function(a,b){function A(a,b){this._d=a,this._isUTC=!!b}function B(a){return a<0?Math.ceil(a):Math.floor(a)}function C(a){var b=this._data={},c=a.years||a.y||0,d=a.months||a.M||0,e=a.weeks||a.w||0,f=a.days||a.d||0,g=a.hours||a.h||0,h=a.minutes||a.m||0,i=a.seconds||a.s||0,j=a.milliseconds||a.ms||0;this._milliseconds=j+i*1e3+h*6e4+g*36e5,this._days=f+e*7,this._months=d+c*12,b.milliseconds=j%1e3,i+=B(j/1e3),b.seconds=i%60,h+=B(i/60),b.minutes=h%60,g+=B(h/60),b.hours=g%24,f+=B(g/24),f+=e*7,b.days=f%30,d+=B(f/30),b.months=d%12,c+=B(d/12),b.years=c}function D(a,b){var c=a+"";while(c.length<b)c="0"+c;return c}function E(a,b,c){var d=b._milliseconds,e=b._days,f=b._months,g;d&&a._d.setTime(+a+d*c),e&&a.date(a.date()+e*c),f&&(g=a.date(),a.date(1).month(a.month()+f*c).date(Math.min(g,a.daysInMonth())))}function F(a){return Object.prototype.toString.call(a)==="[object Array]"}function G(b){return new a(b[0],b[1]||0,b[2]||1,b[3]||0,b[4]||0,b[5]||0,b[6]||0)}function H(b,d){function q(d){var l,r;switch(d){case"M":return e+1;case"Mo":return e+1+o(e+1);case"MM":return D(e+1,2);case"MMM":return c.monthsShort[e];case"MMMM":return c.months[e];case"D":return f;case"Do":return f+o(f);case"DD":return D(f,2);case"DDD":return l=new a(g,e,f),r=new a(g,0,1),~~((l-r)/864e5+1.5);case"DDDo":return l=q("DDD"),l+o(l);case"DDDD":return D(q("DDD"),3);case"d":return h;case"do":return h+o(h);case"ddd":return c.weekdaysShort[h];case"dddd":return c.weekdays[h];case"w":return l=new a(g,e,f-h+5),r=new a(l.getFullYear(),0,4),~~((l-r)/864e5/7+1.5);case"wo":return l=q("w"),l+o(l);case"ww":return D(q("w"),2);case"YY":return D(g%100,2);case"YYYY":return g;case"a":return p?p(i,j,!1):i>11?"pm":"am";case"A":return p?p(i,j,!0):i>11?"PM":"AM";case"H":return i;case"HH":return D(i,2);case"h":return i%12||12;case"hh":return D(i%12||12,2);case"m":return j;case"mm":return D(j,2);case"s":return k;case"ss":return D(k,2);case"S":return~~(m/100);case"SS":return D(~~(m/10),2);case"SSS":return D(m,3);case"Z":return(n<0?"-":"+")+D(~~(Math.abs(n)/60),2)+":"+D(~~(Math.abs(n)%60),2);case"ZZ":return(n<0?"-":"+")+D(~~(10*Math.abs(n)/6),4);case"L":case"LL":case"LLL":case"LLLL":case"LT":return H(b,c.longDateFormat[d]);default:return d.replace(/(^\[)|(\\)|\]$/g,"")}}var e=b.month(),f=b.date(),g=b.year(),h=b.day(),i=b.hours(),j=b.minutes(),k=b.seconds(),m=b.milliseconds(),n=-b.zone(),o=c.ordinal,p=c.meridiem;return d.replace(l,q)}function I(a){switch(a){case"DDDD":return p;case"YYYY":return q;case"S":case"SS":case"SSS":case"DDD":return o;case"MMM":case"MMMM":case"ddd":case"dddd":case"a":case"A":return r;case"Z":case"ZZ":return s;case"T":return t;case"MM":case"DD":case"dd":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return n;default:return new RegExp(a.replace("\\",""))}}function J(a,b,d,e){var f;switch(a){case"M":case"MM":d[1]=b==null?0:~~b-1;break;case"MMM":case"MMMM":for(f=0;f<12;f++)if(c.monthsParse[f].test(b)){d[1]=f;break}break;case"D":case"DD":case"DDD":case"DDDD":d[2]=~~b;break;case"YY":b=~~b,d[0]=b+(b>70?1900:2e3);break;case"YYYY":d[0]=~~Math.abs(b);break;case"a":case"A":e.isPm=(b+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":d[3]=~~b;break;case"m":case"mm":d[4]=~~b;break;case"s":case"ss":d[5]=~~b;break;case"S":case"SS":case"SSS":d[6]=~~(("0."+b)*1e3);break;case"Z":case"ZZ":e.isUTC=!0,f=(b+"").match(x),f&&f[1]&&(e.tzh=~~f[1]),f&&f[2]&&(e.tzm=~~f[2]),f&&f[0]==="+"&&(e.tzh=-e.tzh,e.tzm=-e.tzm)}}function K(b,c){var d=[0,0,1,0,0,0,0],e={tzh:0,tzm:0},f=c.match(l),g,h;for(g=0;g<f.length;g++)h=(I(f[g]).exec(b)||[])[0],b=b.replace(I(f[g]),""),J(f[g],h,d,e);return e.isPm&&d[3]<12&&(d[3]+=12),e.isPm===!1&&d[3]===12&&(d[3]=0),d[3]+=e.tzh,d[4]+=e.tzm,e.isUTC?new a(a.UTC.apply({},d)):G(d)}function L(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function M(a,b){var c,d=a.match(m)||[],e,f=99,g,h,i;for(g=0;g<b.length;g++)h=K(a,b[g]),e=H(new A(h),b[g]).match(m)||[],i=L(d,e),i<f&&(f=i,c=h);return c}function N(b){var c="YYYY-MM-DDT",d;if(u.exec(b)){for(d=0;d<4;d++)if(w[d][1].exec(b)){c+=w[d][0];break}return s.exec(b)?K(b,c+" Z"):K(b,c)}return new a(b)}function O(a,b,d,e){var f=c.relativeTime[a];return typeof f=="function"?f(b||1,!!d,a,e):f.replace(/%d/i,b||1)}function P(a,b){var c=e(Math.abs(a)/1e3),d=e(c/60),f=e(d/60),g=e(f/24),h=e(g/365),i=c<45&&["s",c]||d===1&&["m"]||d<45&&["mm",d]||f===1&&["h"]||f<22&&["hh",f]||g===1&&["d"]||g<=25&&["dd",g]||g<=45&&["M"]||g<345&&["MM",e(g/30)]||h===1&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,O.apply({},i)}function Q(a,b){c.fn[a]=function(a){var c=this._isUTC?"UTC":"";return a!=null?(this._d["set"+c+b](a),this):this._d["get"+c+b]()}}function R(a){c.duration.fn[a]=function(){return this._data[a]}}function S(a,b){c.duration.fn["as"+a]=function(){return+this/b}}var c,d="1.6.2",e=Math.round,f,g={},h="en",i=typeof module!="undefined",j="months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),k=/^\/?Date\((\-?\d+)/i,l=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|LT|LL?L?L?)/g,m=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,n=/\d\d?/,o=/\d{1,3}/,p=/\d{3}/,q=/\d{4}/,r=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,s=/Z|[\+\-]\d\d:?\d\d/i,t=/T/i,u=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,v="YYYY-MM-DDTHH:mm:ssZ",w=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],x=/([\+\-]|\d\d)/gi,y="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),z={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6};c=function(d,e){if(d===null||d==="")return null;var f,g,h;return c.isMoment(d)?(f=new a(+d._d),h=d._isUTC):e?F(e)?f=M(d,e):f=K(d,e):(g=k.exec(d),f=d===b?new a:g?new a(+g[1]):d instanceof a?d:F(d)?G(d):typeof d=="string"?N(d):new a(d)),new A(f,h)},c.utc=function(b,d){return F(b)?new A(new a(a.UTC.apply({},b)),!0):d&&b?c(b+" +0000",d+" Z").utc():c(b&&!s.exec(b)?b+"+0000":b).utc()},c.unix=function(a){return c(a*1e3)},c.duration=function(a,b){var d=c.isDuration(a),e=typeof a=="number",f=d?a._data:e?{}:a;return e&&(b?f[b]=a:f.milliseconds=a),new C(f)},c.humanizeDuration=function(a,b,d){return c.duration(a,b===!0?null:b).humanize(b===!0?!0:d)},c.version=d,c.defaultFormat=v,c.lang=function(a,b){var d,e,f=[];if(!a)return h;if(b){for(d=0;d<12;d++)f[d]=new RegExp("^"+b.months[d]+"|^"+b.monthsShort[d].replace(".",""),"i");b.monthsParse=b.monthsParse||f,g[a]=b}if(g[a]){for(d=0;d<j.length;d++)c[j[d]]=g[a][j[d]]||g.en[j[d]];h=a}else i&&(e=require("./lang/"+a),c.lang(a,e))},c.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:!1,calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"}}),c.isMoment=function(a){return a instanceof A},c.isDuration=function(a){return a instanceof C},c.fn=A.prototype={clone:function(){return c(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(a){return H(this,a?a:c.defaultFormat)},add:function(a,b){var d=b?c.duration(+b,a):c.duration(a);return E(this,d,1),this},subtract:function(a,b){var d=b?c.duration(+b,a):c.duration(a);return E(this,d,-1),this},diff:function(a,b,d){var f=this._isUTC?c(a).utc():c(a).local(),g=(this.zone()-f.zone())*6e4,h=this._d-f._d-g,i=this.year()-f.year(),j=this.month()-f.month(),k=this.date()-f.date(),l;return b==="months"?l=i*12+j+k/30:b==="years"?l=i+(j+k/30)/12:l=b==="seconds"?h/1e3:b==="minutes"?h/6e4:b==="hours"?h/36e5:b==="days"?h/864e5:b==="weeks"?h/6048e5:h,d?l:e(l)},from:function(a,b){return c.duration(this.diff(a)).humanize(!b)},fromNow:function(a){return this.from(c(),a)},calendar:function(){var a=this.diff(c().sod(),"days",!0),b=c.calendar,d=b.sameElse,e=a<-6?d:a<-1?b.lastWeek:a<0?b.lastDay:a<1?b.sameDay:a<2?b.nextDay:a<7?b.nextWeek:d;return this.format(typeof e=="function"?e.apply(this):e)},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()<c([this.year()]).zone()||this.zone()<c([this.year(),5]).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return a==null?b:this.add({d:a-b})},sod:function(){return c(this).hours(0).minutes(0).seconds(0).milliseconds(0)},eod:function(){return this.sod().add({d:1,ms:-1})},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return c(this).month(this.month()+1).date(0).date()}};for(f=0;f<y.length;f++)Q(y[f].toLowerCase(),y[f]);Q("year","FullYear"),c.duration.fn=C.prototype={weeks:function(){return B(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(a){var b=+this,d=c.relativeTime,e=P(b,!a);return a&&(e=(b<=0?d.past:d.future).replace(/%s/i,e)),e}};for(f in z)z.hasOwnProperty(f)&&(S(f,z[f]),R(f.toLowerCase()));S("Weeks",6048e5),i&&(module.exports=c),typeof window!="undefined"&&typeof ender=="undefined"&&(window.moment=c),typeof define=="function"&&define.amd&&define("moment",[],function(){return c})})(Date);

$(document).ready(function(){
	
$('input, textarea').placeholder();

/*
var f1 = function f2() {
    alert(f2);
};

f1();
*/
var seePastWinnerBtnActive 	= new Image();
seePastWinnerBtnActive.src 	= "/images/buttons/see_past_winners_active.png";

var generateMsgBtnActive 	= new Image();
generateMsgBtnActive.src 	= "/images/buttons/generate_message_active.png";


/*---------------------------
 Placeholders
----------------------------*/ 
	if ($.fn.placeholder.input) {	
		$('#search-name').focusin(function(){
		    $(this).attr('placeholder','');
		});

		$('#search-name').focusout(function(){
		    $(this).attr('placeholder', 'GE-email or Name');
		});


		$('#text-area').focusin(function(){
		    $(this).attr('placeholder','');
		});

		$('#text-area').focusout(function(){
		    $(this).attr('placeholder', 'I appreciate you because...');
		});
	}

/*---------------------------
 Search autocomplete
----------------------------*/	
	// initializing...
	$( "#search-name" ).autocomplete({ appendTo: "#home-c3-autocomplete-box" });


	var cache = {}, lastXhr;
	var post_msg_to_name;
    $( "#search-name" ).autocomplete({   
      	source: function( request, response ){  

	        var term = request.term;
	        if ( term in cache ) {
	        	if( cache[term].length < 1){

	        		$( 'li' ).remove('.ui-menu-item');
	        		$(".ui-autocomplete").css("display", "block");

			 		$(".ui-autocomplete").css("position", "absolute");
			        $(".ui-autocomplete").css("top", "-15px");
			        $(".ui-autocomplete").css("left", "0");			 		

			 		/*$( '.ui-autocomplete' ).html("<li class='ui-autocomplete-no-data ui-menu-item' role='menuitem'>No results for <span>"+term+"</span></li>");*/
	        	
	        	} else {
					response( cache[ term ] );
				}
				return;
	        }


	        $(".ui-autocomplete").css("position", "absolute");
	        $(".ui-autocomplete").css("top", "-15px");
	        $(".ui-autocomplete").css("left", "0");
	        $(".ui-autocomplete").css("width", "100%");

	        $( ".ui-autocomplete" ).html("<li class='ui-autocomplete-custom-loading ui-menu-item' role='menuitem'></li>");
	        $( '.ui-autocomplete').show();
	        

	        lastXhr = $.getJSON( "/search", request, 
				function( data, status, xhr){                    
				cache[ term ] = data;
				if ( xhr === lastXhr ) {

					response( data );

					/* 
					if(data.length > 0){
				 		response( data );
				 	} else{
				 		$( '.ui-autocomplete' ).html("<li class='ui-autocomplete-no-data ui-menu-item' role='menuitem'>No results for <span>"+term+"</span></li>");				 	
				 	}
				 	*/

				}         
			});


      	},
      	open: function(event, ui){
      		$(".ui-autocomplete").css("position", "absolute");
	        $(".ui-autocomplete").css("top", "-15px");
	        $(".ui-autocomplete").css("left", "0");
      	},
		minLength: 1,
			select: function( event, ui ) {
			// do something when the searched account is clicked
			$( '#search-name' ).data('employeeCodeTo', ui.item.employee_code);
			$( '#search-name' ).data('employeeNameTo', ui.item.label);
			}
    }).data('autocomplete')._renderItem = autoCompleteRender;

	function autoCompleteRender(ul, item) 
	{	
	    var searchTerm = this.term;
	    var itemLabel = '';

	    itemLabel += "<div>"
	    itemLabel += "	<div class='search-left-div'>"
	    //itemLabel += "		<img src='/uploads/small/50x35.jpg' />";
	    itemLabel += "	</div>";
	    itemLabel += "	<div class='search-right-div'>"
	    itemLabel += "		<div class='search-name-div'>"+item.label+"</div>";
	    itemLabel += "		<div class='search-email-div'>"+item.value+"</div>";
	    itemLabel += "	</div>";
	    itemLabel += "</div>";
	    itemLabel += "<div class='clear'></div>";

	    return $("<li></li>").data("item.autocomplete", item).append("<a>" + itemLabel + "</a>").appendTo(ul);
	}

/*---------------------------
 Query Rankings
----------------------------*/    
	$( '.rankings-filter' ).on('click', function(){
		var option = $(this).data('filter');

		if(option === 'default'){
			toggleRanks(this);
			displayRankList('default');
		} else{
			toggleRanks(this);
			displayRankList('korea');
		}
	});

	function toggleRanks(elem) {
		$( '.filter-active' ).removeClass('filter-active').addClass('filter-passive');
		$(elem).removeClass('filter-passive').addClass('filter-active');
	}

	//$( "#filters-div" ).buttonset();
	//$( '#filters-div' ).tabs();

	$( '#home-c2-rankings-table' ).delegate('.home-rankings-list', 'mouseenter', function(e){	
    	$(this).prev().css({
    		'border-bottom'	: '1px solid #72B0BF'
    	});

    	$(this).css({
    		'background' 	: '#84D6E5',
    		'border-bottom'	: '1px solid #72B0BF',
    		'cursor' 		: 'pointer'
    	})
	});

	$( '#home-c2-rankings-table' ).delegate('.home-rankings-list', 'mouseleave', function(e){
    	$(this).prev().css({
    		'border-bottom'	: '1px solid #83CEE0'
    	});

    	$(this).css({
    		'background' 	: 'none',
    		'border-bottom'	: '1px solid #83CEE0',
    		'cursor' 		: 'auto'
    	})
	});

	function displayRankList(option)
	{
		var rankingsList = '';
		var count = 0;
		$.ajax({
			url: '/rankings',
			type: 'GET',
			data: 'option='+option,
			dataType: 'json',
			timeout: 15000,
			success: function(d){
				if(d.length > 0){
					for(var key in d){
						count++;
						/*
						if(count === 5){
							rankingsList +=	"<li class='home-rankings-list last-child-rankings-li'>";			
						} else{
							rankingsList +=	"<li class='home-rankings-list'>";			
						}
						*/
						rankingsList +=	"<li style='border-bottom: 1px solid #83CEE0;' class='home-rankings-list'>";			
						rankingsList +=		"<a href='user/"+d[key].sub_email+"'>";
						rankingsList +=		"<div style='float:left; width: 50px;'>";		
						rankingsList +=			"<span class='rank-number'>"+count+". </span>";
						rankingsList +=			"<img style='width:25px; height: 32px;' src='"+d[key].avatar_path+"' />";
						rankingsList +=		"</div>";
						rankingsList +=			"<span class='rank-name malgunbd'>"+d[key].full_name+"</span>";
						rankingsList +=			"<div style='float:right; width: 25px;'><span class='rank-count'>"+d[key].count+"</span></div>";
						//rankingsList +=			"<span class='home-wnf-text'>Cards</span>";
						rankingsList +=			"<div class='clear'></div>";
						rankingsList +=		"</a>";
						rankingsList +=	"</li>";	
					}

					$( '#home-c2-rankings-table ul' ).hide().html(rankingsList).fadeIn('500');

					/*
					window.setTimeout(function () {
					    $( '#home-c2-rankings-table ul' ).html(rankingsList).fadeIn('500');
					}, 5000);						
					*/
				} else{
					rankingsList +=	"<li class='home-rankings-list'>";"</li>";				
					rankingsList +=		"<div>";
					rankingsList +=			"<span class='rank-number'>";
					rankingsList +=			"<img src='/images/stop_round.png' style='margin-right: 5px;'/> No results";
					rankingsList +=			"</span>";
					rankingsList +=			"<div class='clear'></div>";
					rankingsList +=		"</div>";
					rankingsList +=	"</li>";	
					$( '#home-c2-rankings-table ul' ).html(rankingsList);
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
					showError(errorThrown);
					rankingsList +=	"<li class='home-rankings-list'>";"</li>";				
					rankingsList +=		"<div>";
					rankingsList +=			"<span class='rank-number'>";
					rankingsList +=			"<img src='/images/stop_round.png' style='margin-right: 5px;'/> Connection timeout!";
					rankingsList +=			"</span>";
					rankingsList +=			"<div class='clear'></div>";
					rankingsList +=		"</div>";
					rankingsList +=	"</li>";	
					$( '#home-c2-rankings-table ul' ).html(rankingsList);
			}	
		});
	}

/*---------------------------
 Display Top 5 Recent Cards
----------------------------*/
	$( '#home-recent-cards-div' ).delegate('#home-recent-cards-ul li', 'click', function(e){		
		e.preventDefault();
    	e.stopPropagation();

		$(this).children().find('.sent-cards-msg').show();
	});

	$( '#home-recent-cards-div' ).delegate('a.close-sent-msg', 'click', function(e){				
		e.preventDefault();
    	e.stopPropagation();

		$('.sent-cards-msg').hide();

	});

	$( '#home-recent-cards-div' ).delegate('#home-recent-cards-ul li', 'mouseenter', function(e){	
    	$(this).prev().css({
    		'border-bottom'	: '1px solid #72B0BF'
    	});

    	$(this).css({
    		'background' 	: '#84D6E5',
    		'border-bottom'	: '1px solid #72B0BF',
    		'cursor' 		: 'pointer'
    	})
	});

	$( '#home-recent-cards-div' ).delegate('#home-recent-cards-ul li', 'mouseleave', function(e){
    	$(this).prev().css({
    		'border-bottom'	: '1px solid #83CEE0'
    	});

    	$(this).css({
    		'background' 	: 'none',
    		'border-bottom'	: '1px solid #83CEE0',
    		'cursor' 		: 'auto'
    	})
	});
	
	/*
	$( '#home-recent-cards-div' ).delegate('.copy-this-msg', 'hover', function(){
		$(this).css({
			'color' : '#333'
		})	
	});
	$( '#home-recent-cards-div' ).delegate('.copy-this-msg', 'mouseout', function(){
		$(this).css({
			'color' : '#6B6869'
		})	
	})
	*/

	$( '#sent-cards-more' ).on('click', function(){
		$('#show-all-cards').reveal();
	})

	$( '.rank-status-span' ).hover(
		function(){
			$(this).next().show();
		},
		function(){
			$(this).next().hide();
		}
	);

	ZeroClipboard.setMoviePath( '/scripts/ZeroClipboard.swf' );
	$( '#home-recent-cards-div' ).delegate('#home-recent-cards-ul li', 'click', function(eventDelegated){		
		eventDelegated.preventDefault();
    	eventDelegated.stopPropagation();

    	glue($(this).children().find('.view-message').data('key'));

	});	
	
	displayAllCards();
	function displayAllCards()
	{
		/*---------------------------
		FB Scrollable
		----------------------------*/
		/*
		var settings = {
			showArrows: false
		};
		var pane = $('#home-all-cards-div');
		pane.jScrollPane(settings);
		var api = pane.data('jsp');
		*/

		var content = '';
		$.ajax({
			url: '/message/get-all-cards',
			dataType: 'JSON',
			timeout: 15000,
			success: function(d){
				var count=1;
				
				content += "<ul id='home-all-cards-ul' style='margin-bottom: 10px;'>";
				for(var key in d){
					content += "<li style='border-bottom: 1px solid #D7EEF3; padding: 6px 0 0 10px;'>";
					content += "	<div style='position: relative; width: 220px; float: left;'>";
					content += "		<span style='float: left; font-size: 10px; position: relative; top: 10px; margin-right: 5px;'>"+count+".</span>"; 
					content += "		<img style='float:left; margin-right: 10px; width: 25px; height: 32px;' src='"+d[key].avatar_path+"'>";
					content += "		<span style='display: block; position: relative; top: 2px; font-size: 15px; color: #007087;'>"+d[key].full_name+"</span>"; 
					content += "		<a class='pretty-date-a' href='javascript:void(0)' style='font-size:12px; color: #333;' title='"+formatDate(d[key].date_with_tz)+"'>"+humanDate(d[key].date_with_tz)+"</a>";						
					content += "		<div class='clear'></div>";
					content += "	</div>";
					content += "	<div style='position: relative; top: 8px; right: 8px;'>";
					content += "		<a href='#' style='float: right' class='view-message' data-key='"+key+"'>";
					content += "			<img style='width: 16px; height: 16px;' src='/images/buttons/arrow_right_blue_16.png' />";
					content += "		</a>";

					content += "		<div class='sent-cards-msg'>";
					content += "			<a href='#' class='close-sent-msg' style='float: right;' data-key='"+key+"'>&#215;</a>";
					content += "			<div id='msg_"+key+"' style='clear:both; border-bottom: 1px solid #EEE; border-top: 1px solid #EEE; padding: 5px 0; margin-bottom: 5px;'>"+d[key].message+"</div>";
					content += "			<div data-key='"+key+"' id='d_clip_container_"+key+"' style='position:relative'>";
					content += "				<div id='d_clip_button_"+key+"' style='float: right;' class='button-gray copy-this-msg'>Copy</div>";
					content += "			</div>";
					content += "		</div>";

					content += "	</div>";
					content += "	<div class='clear'></div>";

					content += "</li>";
					count++;
				}
				content += "</ul>";
				$('#cards-modal').html(content);
				/*
				api.getContentPane().html(content);		
				api.reinitialise();	
				*/
			}
		});

	}

	$( '#home-recent-cards-outer' ).delegate('div.jspScrollable', 'mouseenter', function(){
		$('.jspDrag').stop(true, true).fadeIn('slow');
	});
	$( '#home-recent-cards-outer' ).delegate('div.jspScrollable', 'mouseleave', function(){
		$('.jspDrag').stop(true, true).fadeOut('slow');
	});


	displayTopFiveRecentCards();
	function displayTopFiveRecentCards()
	{
		var content = '';
		$.ajax({
			url: '/message/get-top-recent-cards',
			dataType: 'JSON',
			timeout: 15000,
			success: function(d){
				var email_split = user_email.split('@');
				var count=1;
				content += "<ul id='home-recent-cards-ul' style='margin-bottom: 10px;'>";
				for(var key in d){
					if(key < 5) {
						/*
						if(count === 5){
							content += "<li style='padding: 5px 0 0 10px;' class='last-child-rankings-li'>";
						} else{
							content += "<li style='border-bottom: 1px solid #83CEE0; padding: 5px 0 0 10px;'>";
						}
						*/
						content += "<li style='border-bottom: 1px solid #83CEE0; padding: 6px 0 0 10px;'>";
						content += "	<div style='position: relative; width: 220px; float: left;'>";
						content += "		<span style='float: left; font-size: 10px; position: relative; top: 10px; margin-right: 5px;'>"+count+".</span>"; 
						content += "		<img style='float:left; margin-right: 10px; width: 25px; height: 32px;' src='"+d[key].avatar_path+"'>";
						content += "		<span style='display: block; position: relative; top: 2px; font-size: 15px; color: #007087;'>"+d[key].full_name+"</span>"; 
						content += "		<a class='pretty-date-a' href='javascript:void(0)' style='font-size:12px; color: #333;' title='"+formatDate(d[key].date_with_tz)+"'>"+humanDate(d[key].date_with_tz)+"</a>";						
						content += "		<div class='clear'></div>";
						content += "	</div>";
						content += "	<div style='position: relative; top: 8px; right: 8px;'>";
						content += "		<a href='#' style='float: right' class='view-message' data-key='"+key+"'>";
						content += "			<img style='width: 16px; height: 16px;' src='/images/buttons/arrow_right_blue_16.png' />";
						content += "		</a>";

						content += "		<div class='sent-cards-msg'>";
						content += "			<a href='#' class='close-sent-msg' style='font-weight: bold; font-size: 18px; float: right;' data-key='"+key+"'>&#215;</a>";
						content += "			<div id='msg_"+key+"' style='clear:both; border-bottom: 1px solid #EEE; border-top: 1px solid #EEE; padding: 5px 0; margin-bottom: 5px;'>"+d[key].message+"</div>";
						content += "			<div data-key='"+key+"' id='d_clip_container_"+key+"' style='position:relative'>";
						content += "				<div id='d_clip_button_"+key+"' style='float: right; padding: 0 10px;' class='button-gray copy-this-msg'>Copy Text</div>";
						content += "			</div>";
						content += "		</div>";

						content += "	</div>";
						content += "	<div class='clear'></div>";

						content += "</li>";
						count++;
					}
				}
				content += "</ul>";

				/*
				if(d.length > 5){
					content += "<a href='/user/"+email_split[0]+"' class='button-gray' style='text-align: center; width: 100%; padding: 0; display: block; font-size: 12px; font-weight: normal;' id='show-all-birthday-btn'>";
					content += "More";
					content += "</a>";
				}
				*/
				$( "#home-recent-cards-div" ).hide().html(content).fadeIn('700');
			}
		})
	}

	function glue(index)
	{
		ZeroClipboard.nextId = index;

		var clip = new ZeroClipboard.Client();
		clip.setText( $('#home-recent-cards-ul li').find( "#msg_"+index ).text() );
		clip.glue( "d_clip_button_"+index, "d_clip_container_"+index );
	}

	curr_time_iso
	function humanDate(date){
		var a = moment(curr_time_iso);
		var b = moment(date);
		//return date;
		return moment(date).fromNow();
	}

	//formatDate(curr_timestamp);
	function formatDate(date){
		var a_p = "";
		var d = new Date(date);
		var curr_hour = d.getHours();
		if (curr_hour < 12)
		   {
		   a_p = "AM";
		   }
		else
		   {
		   a_p = "PM";
		   }
		if (curr_hour == 0)
		   {
		   curr_hour = 12;
		   }
		if (curr_hour > 12)
		   {
		   curr_hour = curr_hour - 12;
		   }

		var curr_min = d.getMinutes();

		curr_min = curr_min + "";

		if (curr_min.length == 1)
		   {
		   curr_min = "0" + curr_min;
		   }
		

		var m_names = new Array("Jan", "Feb", "Mar", 
		"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
		"Oct", "Nov", "Dec");

		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();

		return curr_hour+':'+curr_min+' '+a_p+' - '+curr_date+ ' ' +m_names[curr_month]+ ' ' +curr_year;

		//console.log(curr_date + "-" + curr_month + "-" + curr_year + " " + curr_hour + ":" + curr_min + ":" + curr_sec + ":" + curr_msec + " -- "+date);
	}

/*---------------------------
 Pretty Date
----------------------------*/
	function prettyDate(date_str){
		var time_formats = [
		[60, 'Just Now'],
		[90, '1 Minute'], // 60*1.5
		[3600, 'Minutes', 60], // 60*60, 60
		[5400, '1 Hour'], // 60*60*1.5
		[86400, 'Hours', 3600], // 60*60*24, 60*60
		[129600, '1 Day'], // 60*60*24*1.5
		[604800, 'Days', 86400], // 60*60*24*7, 60*60*24
		[907200, '1 Week'], // 60*60*24*7*1.5
		[2628000, 'Weeks', 604800], // 60*60*24*(365/12), 60*60*24*7
		[3942000, '1 Month'], // 60*60*24*(365/12)*1.5
		[31536000, 'Months', 2628000], // 60*60*24*365, 60*60*24*(365/12)
		[47304000, '1 Year'], // 60*60*24*365*1.5
		[3153600000, 'Years', 31536000], // 60*60*24*365*100, 60*60*24*365
		[4730400000, '1 Century'], // 60*60*24*365*100*1.5
	];

	var time = ('' + date_str).replace(/-/g,"/").replace(/[TZ]/g," "),
		dt = new Date,
		seconds = ((dt - new Date(time) + (dt.getTimezoneOffset() * 600)) / 1000),
		token = ' Ago',
		i = 0,
		format;

	if (seconds < 0) {
		seconds = Math.abs(seconds);
		token = '';
	}

	while (format = time_formats[i++]) {
		if (seconds < format[0]) {
			if (format.length == 2) {
				return format[1] + (i > 1 ? token : ''); // Conditional so we don't return Just Now Ago
			} else {
				return Math.round(seconds / format[2]) + ' ' + format[1] + (i > 1 ? token : '');
			}
		}
	}

	// overflow for centuries
	if(seconds > 4730400000)
		return Math.round(seconds / 4730400000) + ' Centuries' + token;

	return date_str;
	}

/*---------------------------
 Long polling the server for new rank updates
----------------------------*/ 	
	updateRank();
	function updateRank()
	{		
		$.getJSON( '/rankings/updates', {format: 'json'} ).always(function( data ) {
	        if( data.status > 0 ){
	        	displayRankList('default');
	        	$( "#home-c2-rankings-table" ).loading({
	        		'action': 'stop',
	        		'opacity': .1
	        	});
	        }	
	        
	        setTimeout( updateRank, 15000 );
	    });				
	}

	function clearMessageForms()
	{
		$( '#search-name' ).val('');
		$( "#home-c3-textarea textarea" ).val('');
	}


/*---------------------------
 Posting message
----------------------------*/ 	
	
	$( '#home-post-message' ).bind('click', function( event ){

		var msg 		= '';
		if(message_count === 0){
			msg = "<img style='float:left' src='/images/stop.png' />";
			msg += "<span style='float:left; width:240px;'>You have already sent your quota of Thx for this month!</span>";

			$( '#home-c3-response-msg' ).html(msg);
			$( '.home-c3-response-to-msg' ).removeClass('home-c3-success').addClass('home-c3-error').show();

			return 0;
		}

		var name_to		= $( '#search-name' ).data('employeeNameTo');
		var code_to 	= $( '#search-name' ).data('employeeCodeTo');
		var code_from 	= $( '#search-name' ).data('employeecodefrom');
		var message 	= $.trim($( '#home-c3-textarea textarea' ).val());
		var email		= $( '#search-name' ).val();

		var anonymous 	= 0;
		if( $(' #c3-hide-cb' ).is(":checked") ){
			anonymous 	= 1;
		}



		if(!validateEmail(email)){
			msg = "<img style='float:left' src='/images/stop.png' />";
			msg += "<span style='float:left; width:240px;'>Invalid email format!</span>";

			$( '#home-c3-response-msg' ).html(msg);
			$( '.home-c3-response-to-msg' ).removeClass('home-c3-success').addClass('home-c3-error').show();
			return 0;
		}

		if(email === user_email){
			msg = "<img style='float:left' src='/images/stop.png' />";
			msg += "<span style='float:left; width:240px;'>Self-praise is good for your ego, but will not help you become winner of the month.</span>";

			$( '#home-c3-response-msg' ).html(msg);
			$( '.home-c3-response-to-msg' ).removeClass('home-c3-success').addClass('home-c3-error').show();
			return 0;
		}

		if(email === '' || message === ''){			
			msg = "<img style='float:left' src='/images/stop.png' />";
			msg += "<span style='float:left; width:240px;'>Email and message should not be left blank.</span>";

			$( '#home-c3-response-msg' ).html(msg);
			//$( '.home-c3-response-to-msg' ).removeClass('home-c3-success').addClass('home-c3-error').show("shake", { times:2 }, 100);
			$( '.home-c3-response-to-msg' ).removeClass('home-c3-success').addClass('home-c3-error').show();
			return 0;
		}

		$.ajax({
			url: '/message/post',
			type: 'POST',			
			dataType: 'JSON',
			data: {code_to : code_to, name_to : name_to, code_from : code_from, message : message, email : email, hide : anonymous},
			timeout: 20000, 
			beforeSend: function(){
				$( '#home-post-message' ).attr("disabled", "disabled");
				$( '#home-post-message span' ).text('Sending...');
				//$( "#home-c3-send-btn img" ).show();
			},
			success: function(d){
				clearMessageForms();
				//$( "#home-c3-send-btn img" ).hide();
				$( '#home-post-message span' ).text('Send!');

				if(d.m === 'no more cards'){
					msg = "<img style='float:left' src='/images/stop.png' />";
					msg += "<span style='float:left; width:240px;'>You have already sent your quota of Thx for this month!</span>";

					$( '#home-c3-response-msg' ).html(msg);
					$( '.home-c3-response-to-msg' ).removeClass('home-c3-success').addClass('home-c3-error').show();

					return 0;
				} else if(d.m === 'old user'){

					$( "#home-c2-rankings-table" ).loading({
						'action': 'start',
						'opacity': .1
					});

					msg = "<img style='float:left' src='/images/check.png' />";
					msg += "<span style='float:left; width:240px;'>You have sent your Card to "+name_to+"!</span>";

					$( '#home-c3-response-msg' ).html(msg);
					$( '.home-c3-response-to-msg' ).removeClass('home-c3-error').addClass('home-c3-success').show();

					displayRankList('korea');

					$( "#home-c2-rankings-table" ).loading({
						'action': 'stop',
						'opacity': .1
					});

					message_count--;
					updateMessageCount();
					displayMessageCount();
					$( '#home-post-message' ).removeAttr("disabled");
				} else{
					msg = "<img style='float:left' src='/images/check.png' />";
					msg += "<span style='float:left; width:240px;'>Email has been successfully sent.</span>";

					$( '#home-c3-response-msg' ).html(msg);
					$( '.home-c3-response-to-msg' ).removeClass('home-c3-error').addClass('home-c3-success').show();

					message_count--;
					updateMessageCount();
					displayMessageCount();
					$( '#home-post-message' ).removeAttr("disabled");
				}

				displayTopFiveRecentCards();
			},
			error: function(jqXHR, textStatus, errorThrown){

				if( errorThrown === 'timeout'){
					showTimeout();					
				}			
			}	
		});		
	});

	$( "#home-c3-response-close a" ).on('click', function(){
		$( '.home-c3-response-to-msg' ).hide();
	})


	var element_msg = 0;
	$('#text-area').on('keyup', tweetAction);
	$('#text-area').on("mousedown", tweetAction);

	function tweetAction() {
		if($($('#text-area')).val() == 'I appreciate you because...') {
			element_msg = '0';
		} else {
			element_msg = $($('#text-area')).val().length;
		}
		tweetCount(element_msg);
	}	

	// function to count total characters and make neccessary changes
	function tweetCount(Elem){
		$( '#msg_count' ).html(parseInt(140) - parseInt(Elem));
		if(Elem >= 1 && Elem <= 140) {
			$( '#home-post-message' ).removeAttr("disabled");
			$( '#home-post-message' ).removeClass('button-disabled').addClass('button-blue');
		} else {
			$( '#home-post-message' ).attr("disabled",true);
			$( '#home-post-message' ).removeClass('button-blue').addClass('button-disabled');
		}
	}

/*
	$.fn.extend({  
        limit: function(limit,element) {			
			var interval, f;
			var self = $(this);
					
			$(this).focus(function(){
				interval = window.setInterval(substring,100);
			});
			
			$(this).blur(function(){
				clearInterval(interval);
				substring();
			});
			
			substringFunction = "function substring(){ var val = $(self).val();var length = val.length;if(length > limit){$(self).val($(self).val().substring(0,limit));}";
			if(typeof element != 'undefined')
				substringFunction += "if($(element).html() != limit-length){$(element).html((limit-length<=0)?'0':limit-length);}"
				
			substringFunction += "}";
			
			eval(substringFunction);
			substring();			
        } 
    });
    $('#text-area').limit('140','#msg_count');
*/

/*---------------------------
 Validate Email before sending the message
----------------------------*/ 	
	function validateEmail(email) 
	{ 
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

/*---------------------------
 Display Birthday
----------------------------*/ 	
	$( '#home-display-birthday-ul' ).delegate('button', 'click', function(){
		displayBirthdayList('all');
	});


	$( '#home-display-birthday-ul' ).delegate('.home-rankings-list', 'mouseenter', function(e){	
    	$(this).prev().css({
    		'border-bottom'	: '1px solid #72B0BF'
    	});

    	$(this).css({
    		'background' 	: '#84D6E5',
    		'border-bottom'	: '1px solid #72B0BF',
    		'cursor' 		: 'pointer'
    	})
	});

	$( '#home-display-birthday-ul' ).delegate('.home-rankings-list', 'mouseleave', function(e){
    	$(this).prev().css({
    		'border-bottom'	: '1px solid #83CEE0'
    	});

    	$(this).css({
    		'background' 	: 'none',
    		'border-bottom'	: '1px solid #83CEE0',
    		'cursor' 		: 'auto'
    	})
	});

	displayBirthdayList('default');
	function displayBirthdayList(option)
	{
		var months	= new Array( 
			"","January", "February", "March", "April",
			"May", "June", "July", "August", "September",
			"October", "November", "December"
			);

		var content = '';
		var button  = '';
		var dob 	= '';
		$.ajax({
			url: '/birthday/show-birthday-list',
			type: 'GET',
			data: 'option='+option,
			dataType: 'json',
			timeout: 15000,
			success: function(d){				
				if(option === 'all'){
					var count = 0;

					for (var key in d){
						dob = d[key].dob.split("-");

						if(count === 5){
							rankingsList +=	"<li class='home-rankings-list last-child-rankings-li'>";			
						} else{
							rankingsList +=	"<li class='home-rankings-list'>";			
						}
						content += "	<div class='home-birthday-text-div modal-display' style='width: 130px;'>";
						content += "		<span class='blue'>"+months[parseFloat(dob[1])]+"</span><span class='blue'>"+parseFloat(dob[2])+"</span>";
						content += "	</div>";
						content += "	<div class='home-birthday-img-div'>";
						content += "		<img src='"+d[key].avatar_path+"' />";
						content += "	</div>";
						content += "	<div class='home-birthday-name-div modal-display malgunbd'>"+d[key].full_name+"</div>";							
						content += "	<div class='clear'></div>";
						content += "</li>";	
						count++;
					}
					$( "#modal-display-birthday-ul" ).html(content);
					$('#show-all-birthday-modal').reveal();
				} else{
					var count=1;
					for (var key in d){
						if(key < 5 ){
							dob = d[key].dob.split("-");
							/*
							if(count === 5){
								content += "<li class='home-rankings-list' style='padding: 10px 0 10px 10px;' class='last-child-rankings-li'>";
							} else{
								content += "<li class='home-rankings-list' style='border-bottom: 1px solid #83CEE0; padding: 10px 0 10px 10px;'>";
							}
							*/
							content += "<li class='home-rankings-list' style='border-bottom: 1px solid #83CEE0; padding: 10px 0 10px 10px;'>";
							content += "	<a href='#' style='display: block;'>";	
							content += "	<div class='home-birthday-text-div'>";
							content += "		<span class='blue'>"+months[parseFloat(dob[1])]+"</span>&nbsp;<span class='blue'>"+parseFloat(dob[2])+"</span>";
							content += "	</div>";
							content += "	<div class='home-birthday-name-div malgunbd'>"+d[key].full_name+"</div>";	
							content += "	<div class='clear'></div>";
							content += "	</a>";	
							content += "</li>";	
							count++;
						}
					}

					/* omitting this per request to not show all birthdays - 2012/06/18
					if(d.length > 5){
						content += "<li>";
						content += "<button class='button-gray' style='width: 100%; padding: 3px; font-size: 12px; font-weight: normal;' id='show-all-birthday-btn'>";
						content += "<span>Show All Birthdays</span>";
						content += "</button>";
						content += "</li>";	
					}
					*/

					$( "#home-display-birthday-ul" ).html(content);
				}				

			},
			error: function(jqXHR, textStatus, errorThrown){

				if( errorThrown === 'timeout'){
					showTimeout();
				}
			}	
		});		
	}



/*---------------------------
 Listener past winners click
----------------------------*/
	
	// - attaching listeners to the date scrolls
	// - we use delegate because the scrolls are generated only when the user clicks the past winners
	$( '#home-list-past-winners' ).delegate('a', 'click', function(){
		displayPastWinners($(this).data('year'));
	})

	// when the page loads, pre-populate the table
	displayPastWinners(2012); // default is current year - don't make this static tho
	
	function displayPastWinners(year)
	{
		var months	= new Array( 
			"","January", "February", "March", "April",
			"May", "June", "July", "August", "September",
			"October", "November", "December"
			);

		var prev_year = year - 1;
		var next_year = year + 1;
		var content =  "<li style='background: #DDDDDD'>";
		content		+= "	<div id='home-past-winner-year-scroll'>";
		content		+= "		<a href='javascript:void(0)' id='past-winners-scrolls' data-year='"+prev_year+"'>";
		content		+= "		<img src='/images/arrow_left_gray.png' style='margin-right: 5px;'>";
		content		+= "		</a> ";  
		content		+= 			year;
		content		+= "		<a href='javascript:void(0)' id='past-winners-scroll' data-year='"+next_year+"'>";
		content		+= "		<img src='/images/arrow_right_gray.png' style='margin-left: 5px;'>"; 
		content		+= "		</a> "; 
		content		+= "	</div>";			
		content 	+= "</li>";	

		$.ajax({
			url: '/winner/fetch-all-winners-per',
			type: 'GET',
			dataType: 'json',
			data: "year="+year+"&department_code="+department_code,
			beforeSend: function(){				
				$( "#home-list-past-winners" ).loading({
					'action': 'start',
					'opacity': .1
				});
			},
			success: function(d){
				var count = 0;
				for(var key in d){
					if(count%2){
						content += "<li>";
					} else {
						content += "<li class='zebra'>";
					}		
					content += "	<div class='home-past-winner-img'>";
					content += "		<img src='"+d[key].avatar_path+"' />";
					content += "	</div>";			
					content += "	<div class='home-past-winner-name'><a href='/winner/"+d[key].month+"/"+d[key].year+"'>"+d[key].fullname+"</a></div>";
					content += "	<div class='home-past-winner-month'>";
					content += 			months[d[key].month];
					content += "	</div>";					
					

					content += "	<div class='clear'></div>";
					content += "</li>";	
					count++;
				}
				$( "#home-list-past-winners" ).loading({"action": "stop",});
				$( "#home-list-past-winners ul" ).html(content);

			}
		});
	}


	$( '#home-past-winners-btn' ).on('click', showPastWinners);
	function showPastWinners()
	{
		//$( '#home-display-birthday-box' ).slideToggle();
		//$( '#home-list-past-winners' ).slideToggle();
		$( '#home-list-past-winners' ).reveal();
	}


/*---------------------------
	Display the count 	
----------------------------*/
		
	displayMessageCount();
	function displayMessageCount()
	{		
		var content = '';
		switch(parseInt(message_count)){
			case 1: 
				content += "<img src='/images/logo/logo-pink.png' />";
				content += "<img src='/images/logo/logo-pink.png' />";
				content += "<img src='/images/logo/logo-gray.png' />";
				$( '#home-c3-box-imgs' ).html(content);
				break;
			case 2:
				content += "<img src='/images/logo/logo-pink.png' />";
				content += "<img src='/images/logo/logo-gray.png' />";
				content += "<img src='/images/logo/logo-gray.png' />";
				$( '#home-c3-box-imgs' ).html(content);
				break;
			case 3:
				content += "<img src='/images/logo/logo-gray.png' />";
				content += "<img src='/images/logo/logo-gray.png' />";
				content += "<img src='/images/logo/logo-gray.png' />";
				$( '#home-c3-box-imgs' ).html(content);
				break;
			default:	
				content += "<img src='/images/logo/logo-pink.png' />";
				content += "<img src='/images/logo/logo-pink.png' />";
				content += "<img src='/images/logo/logo-pink.png' />";
				$( '#home-c3-box-imgs' ).html(content);
				break;
		}
	}

	function disablePostingMessage()
	{
		$( '#search-name' ).attr("disabled", "disabled").css({'background' : 'rgba(0,0,0,.2)'});
		$( '#text-area' ).attr("disabled", "disabled").css({'background' : 'rgba(0,0,0,.2)', 'border' : '1px solid rgba(0,0,0,.2)' });
		$( '#home-post-message' ).attr("disabled", "disabled").removeClass('button-gray').addClass('button-disabled-2');
	}

/*---------------------------
	Hover on message count
----------------------------*/	
	var card_word 		= '';
	
	$( "#msg-counter" ).hover(
		function(){
			$(this).css('cursor', 'pointer');
			if(message_count > 1){
				card_word = 'Cards';
			} else{
				card_word = 'Card';
			}
			$( '#home-c3-send-btn' ).append("<div id='message-count-tooltip'>You have "+message_count+" "+card_word+" left to send</div>").show();
		},
		function(){
			$( '#message-count-tooltip' ).remove();
		}
	);

	function updateMessageCount()
	{
		$( '#msg-counter' ).text(message_count);
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



/*---------------------------
	Initial Uploading of Profile Pic
----------------------------*/
	var upload_option 		= 'upload-img';
	var initialAvatarFile 	= '';

	// User has uploaded an image
	$('#initial-upload').live('change', function(){ 
		upload_option 		= 'upload-img';
		initialAvatarFile	= false;	

		if( upload_option === 'upload-img' ){			
			$("#initial-upload-form").ajaxForm({
				target: '.home-c2-edit-upload-view',
				beforeSubmit: function(){
					$( '.home-c2-upload-loader' ).show(); 		
				},
				success: function(){
					$( '.home-c2-upload-loader' ).hide();
				}
			}).submit();	
		}		
	});	

	$('#initial-pic-upload-btn').on('click', function(){		
		if( upload_option === 'upload-img' ){			
			$.ajax({
	    		url: '/index/update-initial-profile-pic',
	    		beforeSend: function(){
	    			$( '.home-c2-upload-loader' ).show(); 
	    		},
	    		success: function(x){
	    			$( '.home-c2-upload-loader' ).hide();
					$('#upload-pic-modal').trigger('reveal:close');
					updateMyThxBox();
	    		}
	    	});	

		} else {
			$.ajax({
	    		url: '/index/update-profile-pic',
	    		type: 'GET',
	    		dataType: 'JSON',
	    		data: "avatar="+initialAvatarFile,
	    		beforeSend: function(){
	    			$( '.home-c2-upload-loader' ).show(); 
	    		},
	    		success: function(x){
	    			$( '.home-c2-upload-loader' ).hide();
					$('#upload-pic-modal').trigger('reveal:close');
					updateMyThxBox();
	    		}
	    	});	
		}		
	});


	function updateMyThxBox()
	{
		$.ajax({
    		url: '/index/update-thxbox',
    		type: 'GET',
    		dataType: 'HTML',
    		success: function(x){
    			$( '#my-thxbox' ).html(x);
    			$( "#my-thxbox" ).loading({
		    		'action': 'stop'
		    	});
		    	$('#upload-pic-modal').trigger('reveal:close');
    		}
    	});	
	}


/*---------------------------
	Edit Profile
----------------------------*/
	var choseAvatarFlag 		= false;
	var uploadProfilePicFlag 	= false;
	var fullname 				= $( '#edit-fullname' ).val();

	var edit_upload_option 		= 'upload-img-edit';	

	// User has uploaded an image
	$('#file').live('change', function(){ 
		uploadProfilePicFlag = true;
		choseAvatarFlag		 = false;

		if(uploadProfilePicFlag){
	    	$("#imageform").ajaxForm({			
				target: '.home-c2-edit-upload-view',
				beforeSubmit: function(){
					$( '.home-c2-upload-loader' ).show(); 		
				},
				success: function(){
					$( '.home-c2-upload-loader' ).hide();
					//updateThxBoxUI();
				}
			}).submit();
	    } 	
	});	

	// User clicks on a specific avatar
	$( '.avatar-options-a' ).on('click', function(){
		$( '.edit-profile-avatar-div ul li > a' ).each(function(index, element){
			$(element).removeClass('edit-profile-chosen');
		});

		$(this).addClass('edit-profile-chosen');

		/*---------------------------
			Avatar pick
		----------------------------*/	
		var path = $(this).data('path');
		$( '.home-c2-edit-upload-view' ).html("<img src='/images/profile/"+path+"'>");
		choseAvatarFlag 		= path;
		initialAvatarFile 		= path;
		uploadProfilePicFlag 	= false;
		upload_option 			= false;
	})

	// User clicks the save button
	$('#edit-profile-btn').on('click', function(){ 	
		var fullname_edit = $.trim($( '#edit-fullname' ).val());
		if(fullname_edit == ''){
			alert("Fullname should not be left blank!");
			$( '#edit-fullname' ).val(fullname);
			return false;
		} 

		$( '#home-c2-edit-loader' ).show();

		if(uploadProfilePicFlag){
			// user has uploaded a profile pic
			updateProfileAjax();
		} else{
			// user did not upload a profile pic
			if(!choseAvatarFlag){
				// user hasn't chosen an avatar either
				updateProfileAjax();
			} else{
				// user has chosen an avatar either
				updateProfileAjaxWithAvatar();
			}			
		}
	});		

	// User clicks the Edit Profile link
	$( '#home-content-c1' ).delegate('a#edit-profile-trigger','click', function(e){
		$( '#editPassModal' ).remove();
		$( '#edit-profile-outer' ).show();
		e.preventDefault();
		$('#myModal').reveal();
	})

	function updateProfileAjax()
	{
		$.ajax({
			url: '/index/update-profile',
			type: 'GET',
			dataType: 'json',
			data: $('#edit-profile-form').serialize(),
			beforeSend: function(){

				
			},
			success: function(d){
				$( '#home-c2-edit-loader' ).hide();				
				$( "#my-thxbox" ).loading({
		    		'action': 'start',
		    		'background' : '#FFF',
		    		'opacity': .5
		    	});

				updateThxBoxUI();				
			}
		});
	}

	function updateThxBoxUI()
	{
		$.ajax({
    		url: '/index/update-thxbox',
    		type: 'GET',
    		dataType: 'html',
    		success: function(x){
    			$('#myModal').trigger('reveal:close');
    			$( '#my-thxbox' ).html(x);
    			$( "#my-thxbox" ).loading({
		    		'action': 'stop'
		    	});
    		},
    		error: function(jqXHR, textStatus, errorThrown){			
			}	
    	});	
	}

	function updateProfileAjaxWithAvatar()
	{
		$.ajax({
			url: '/index/update-profile',
			type: 'GET',
			dataType: 'json',
			data: $('#edit-profile-form').serialize()+"&avatar="+choseAvatarFlag,
			success: function(d){
				$( '#home-c2-edit-loader' ).hide();
				$('#myModal').trigger('reveal:close');
				$( "#my-thxbox" ).loading({
		    		'action': 'start',
		    		'background' : '#FFF',
		    		'opacity': .5
		    	});
		    	$.ajax({
		    		url: '/index/update-thxbox',
		    		type: 'GET',
		    		dataType: 'HTML',
		    		success: function(x){
		    			$( '#my-thxbox' ).html(x);
		    			$( "#my-thxbox" ).loading({
				    		'action': 'stop'
				    	});
		    		},
		    		error: function(jqXHR, textStatus, errorThrown){	
					}
		    	});
			}
		});
	}

	document.getElementById("edit-profile-form").onsubmit = function () {
	    return false;
	};

/*---------------------------
	Edit Password
----------------------------*/	
	
	$( '#edit-profile-password' ).on('click', function(){
		$( '#edit-profile-outer' ).hide('slide', {direction: 'left'}, 300, function(){
			var structure 	=	"<div id='editPassModal' class='edit-pass-modal'>";
			structure 		+=	"	<div id='editPassInner'>";
			structure 		+=	"		<h1>Reset Password</h1>";
			structure 		+=	"		<div>Current password</div>";
			structure 		+=	"		<input type='password' id='current_pass' />";
			structure 		+=	"		<div>New password</div>";
			structure 		+=	"		<input type='password' id='new_pass' />";
			structure 		+=	"		<div>Verify password</div>";
			structure 		+=	"		<input type='password' id='new_pass_verify' />";
			structure 		+=	"	</div>";
			structure 		+=	"	<div class='edit-footer-bg' style='margin-top: 0;'>";
			structure 		+=	"		<a href='javascript:void(0)'' class='edit-profile-back' style='color:#EC4E09; font-size: 11px; position: absolute; top:26px; left: 20px'>";
			structure 		+=	"		&larr; Edit Profile";
			structure 		+=	"		</a>";
			structure 		+=	"		<div id='home-c2-edit-save' class='left'>";
			structure 		+=	"			<button class='button-gray close-reveal right' style='width: 100px; margin-left:10px;' id='edit-password-btn-cancel'>";
			structure 		+=	"				<span>Cancel</span>";
			structure 		+=	"			</button>";
			structure 		+=	"			<button class='button-gray right' style='width: 100px' id='edit-password-btn'>";
			structure 		+=	"				<span>Save</span>";
			structure 		+=	"			</button>";
			structure 		+=	"		</div>";
			structure 		+=	"		<div class='clear'></div>";
			structure 		+=	"	</div>";

			$( '#myModal' ).append(structure).fadeIn('200');
		});
	})
/*
	$( '.edit-profile-back' ).on('click', function(){
		$( '#editPassModal' ).hide('slide', {direction: 'right'}, 300, function(){
			$( '#edit-profile-outer' ).fadeIn('200');
		});
	})
*/
	$( '#myModal' ).delegate('button#edit-password-btn-cancel', 'click', function(){		
		$('#myModal').trigger('reveal:close');
	});

	$( '#myModal' ).delegate('a.edit-profile-back', 'click', function(){
		$( '#editPassModal' ).hide('slide', {direction: 'right'}, 300, function(){
			$( '#editPassModal' ).remove();
			$( '#edit-profile-outer' ).fadeIn('200');
		});
	});

	$( '#myModal' ).delegate('a.home-error-close', 'click', function(){
		$( '.home-error-box' ).remove();
	});

	$( '#myModal' ).delegate('button#edit-password-btn', 'click', updatePassword);

	function updatePassword()
	{
		var current_pass 		= $.trim($( '#current_pass' ).val());
		var new_pass 			= $.trim($( '#new_pass' ).val());
		var new_pass_verify		= $.trim($( '#new_pass_verify' ).val());

		if(current_pass === '' || new_pass === '' || new_pass_verify === ''){
			showErrorEditPass("You must enter all the fields to change your password.");
			return 0;
		} 

		current_pass 		= $( '#current_pass' ).val();
		new_pass 			= $( '#new_pass' ).val();
		new_pass_verify		= $( '#new_pass_verify' ).val();

		if(new_pass !== new_pass_verify){
			showErrorEditPass("Passwords don't match!");
			return 0;
		}

		$.ajax({
			url: '/index/check-current-password',
			type: 'POST',
			dataType: 'JSON',
			data: { password : current_pass },
			success: function(d){

				if(!d){
					showErrorEditPass("The current password you've entered is incorrect!");
				} else{
					$.ajax({
						url: '/index/update-password',
						type: 'POST',
						dataType: 'JSON',
						data: { password : new_pass },
						beforeSend: function(){
							$( '#editPassModal' ).fadeOut();
							showLoadingEditPass('Updating your password');
						},
						success: function(d){
							showSuccessEditPass();
							$( '#myModal' ).css('height', '');
						}
					})
				}
			}
		})
	}

	function showErrorEditPass(msg)	
	{
		$( '.home-error-box' ).remove();
		var structure 	= 	"<div class='home-error-box'>";
		structure 		+= 	"	<div class='error-msg-div'>";
		structure 		+= 	"		<span>"+msg+"</span>";
		structure 		+= 	"		<a href='#' class='home-error-close'>&#215;</a>";
		structure 		+= 	"	</div>";
		structure 		+= 	"</div>";

		$( '#editPassInner' ).prepend(structure);
		
		$( '.error-msg-div' ).effect("shake", { times:2 }, 100);
	}

	function showLoadingEditPass(msg)
	{
		var structure 	= 	"";
		structure 		+= 	"	<div class='edit-pass-loading'>";
		structure 		+= 	"		"+msg+"...<img src='/images/loader/loading_circle.gif' />";		
		structure 		+= 	"	</div>";		

		$( '#editPassModal' ).html(structure).fadeIn(800);		
	}

	function showSuccessEditPass()	
	{
		var structure 	= 	"";
		structure 		+= 	"	<div class='edit-pass-loading' style='font-size: 16px;'>";
		structure 		+= 	"		Woo hoo! Your password has been changed!";
		structure 		+= 	"	</div>";
		structure 		+= 	"	<div class='edit-footer-bg' style='margin-top: 20px;'>";
		structure 		+= 	"		<a href='javascript:void(0)' class='edit-profile-back' style='color:#EC4E09; font-size: 11px;'>";
		structure 		+= 	"		&larr; Edit Profile";
		structure 		+= 	"		</a>";		
		structure 		+= 	"		<div class='clear'></div>";
		structure 		+= 	"	</div>";
		
		window.setTimeout(function () {
		    $("#editPassModal").hide().html(structure).fadeIn(1000);
		}, 2000);		
	}


/*---------------------------
	Has SignedUp Listener
----------------------------*/

	if(hasSignedUp){
		window.setTimeout(function () {
		    $('#upload-pic-modal').reveal({
		  		animation: 'fade' 
		  	});
		}, 3000);	  	
	}

/*---------------------------
	Timeout Modal
----------------------------*/
	function showTimeout()
	{
		$('#timeout-modal-div').reveal({
	  		animation: 'fade' 
	  	});
	}

/*---------------------------
	ResetPass Modal
----------------------------*/
	if(resetPassStatus > 0){
	  	window.setTimeout(function () {
	  		$( '#edit-profile-outer' ).hide('slide', {direction: 'left'}, 300, function(){
				var structure 	=	"<div id='editPassModal' class='edit-pass-modal'>";
				structure 		+=	"	<div id='editPassInner'>";
				structure 		+=	"		<h1>Choose a New Password</h1>";
				structure 		+=	"		<div>Current password</div>";
				structure 		+=	"		<input type='password' id='current_pass' />";
				structure 		+=	"		<div>New password</div>";
				structure 		+=	"		<input type='password' id='new_pass' />";
				structure 		+=	"		<div>Verify password</div>";
				structure 		+=	"		<input type='password' id='new_pass_verify' />";
				structure 		+=	"	</div>";
				structure 		+=	"	<div class='edit-footer-bg' style='margin-top: 0;'>";				
				structure 		+=	"		<div id='home-c2-edit-save' class='left'>";
				structure 		+=	"			<button class='button-gray left' style='width: 100px' id='edit-password-btn'>";
				structure 		+=	"				<span>Save</span>";
				structure 		+=	"			</button>";
				structure 		+=	"			<button class='button-gray close-reveal left' style='width: 100px; margin-left:10px;' id='edit-password-btn-cancel'>";
				structure 		+=	"				<span>Cancel</span>";
				structure 		+=	"			</button>";
				
				structure 		+=	"		</div>";
				structure 		+=	"		<div class='clear'></div>";
				structure 		+=	"	</div>";

				$( '#myModal' ).append(structure).fadeIn('200');
			});

		    $('#myModal').reveal({
		  		animation: 'fade' 
		  	});
		}, 1000);
	}	

/*---------------------------
	Error Modal
----------------------------*/
	function showError(msg)
	{			
		$( '#timeout-modal span' ).text(msg);
		showTimeout();		
	}


	$( '.close-small' ).on('click', function(){
		$( '.notification-box' ).html('');
		$( '.notification-box' ).slideUp();
	})


	// call this at the end
	displayRankList('korea');


/*---------------------------
	Generate Template Message
----------------------------*/
	$( '#generate-comment-btn' ).on('click', generateTemplateMessage);

	var msg_array = new Array();
	fetchAllTemplateMessage();
	function fetchAllTemplateMessage()
	{
		$.ajax({
			url: '/template/fetch-random-message',
			type: 'GET',
			dataType: 'JSON',
			success: function(d){
				for(var val in d)
				{
					msg_array.push(d[val].message);
				}
			}
		})
	}

	var prev_random_key = 0; 
	var random = 0;

	function generateTemplateMessage()
	{
		var random_key = getRandomInt(0, msg_array.length-1);

		$( '#text-area' ).val(msg_array[prev_random_key]);
		tweetAction();
	}

	/**
	 * Returns a random integer between min and max
	 * Using Math.round() will give you a non-uniform distribution!
	 */	
	function getRandomInt (min, max) 
	{		
	    random = Math.floor(Math.random() * (max - min + 1)) + min;
	    if( random === prev_random_key ){
	    	getRandomInt(min, max);
	    } else{
	    	prev_random_key = random;
	    }
	    return random;
	}

}); 




