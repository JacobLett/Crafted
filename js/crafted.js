$( document ).ready(function() {
	
// ==========================================================================
// GLOBAL - Crafted
// ==========================================================================

	//Adds unique class name to body tag
	var bc_pathname = window.location.pathname;
	var pathSlashesReplaced = bc_pathname.replace(/\//g, " ");
	var pathSlashesReplacedNoFirstDash = pathSlashesReplaced.replace(" ","");
	var newClass = pathSlashesReplacedNoFirstDash.replace(/(\.[\s\S]+)/ig, "");
	$("body").addClass('crafted ' + newClass);
	if ( $("body").attr("class") == "") // Makes no sense, since you have previously 
	{                                   // added `newClass`
	    $("body").addClass("class");
	}
	
	
	// Searched for global variables and adds content to theme content areas	
	if (!typeof craftedSearchPlaceholder === 'undefined') {
	    // variable is undefined
		//console.log('craftedNewsletterSubmit not defined');
	} else {
		//console.log(craftedSearchPlaceholder);
		
		$('#SearchForm #search_query').attr("placeholder", 'Search ' + craftedSearchPlaceholder);
		$('#SearchForm #search_query').attr('value','');

	}
	
	if (typeof craftedMeetDesigner === 'undefined') {
	    // variable is undefined
	} else {
		//console.log(craftedMeetDesigner);
		$('.bio .title').text(craftedMeetDesigner);
		
	}
	
	if (typeof craftedNewsletterSubmit === 'undefined') {
	    // variable is undefined
	} else {
		//console.log(craftedNewsletterSubmit);
		$('#subscribe_form .btn').attr('value',craftedNewsletterSubmit);
	}
	
	
	if (typeof craftedNewsletterHeadline === 'undefined') {
	    // variable is undefined
	} else {
		//console.log(craftedNewsletterSubmit);
		$('#SideNewsletterBox h4').html(craftedNewsletterHeadline);
		
	}
// Blocks script from running on ie8 and lower
if (!$("html").hasClass("lt-ie9")) {	
	
	
	/*
	 *	jQuery dotdotdot 1.6.16
	 *
	 *	Copyright (c) Fred Heusschen
	 *	www.frebsite.nl
	 *
	 *	Plugin website:
	 *	dotdotdot.frebsite.nl
	 *
	 *	Dual licensed under the MIT and GPL licenses.
	 *	http://en.wikipedia.org/wiki/MIT_License
	 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
	 */
	!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var f=this,h=t(f);if("undefined"==typeof f||3==f.nodeType&&0==t.trim(f.data).length)return!0;if(h.is(u))e.append(h);else{if(s)return!0;e.append(h),l&&e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==f.nodeType?o(h,n,i,d,l):r(h,n,i,d,l),s||(h.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var f=s(c),h=-1!==f.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":h,g=f.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=f.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(f=i(s(c),o),l(c,f),T&&d&&t(c).parent().append(d))}else f=i(g.slice(0,v+1).join(p),o),l(c,f);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function h(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:h(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||d instanceof HTMLElement)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);

	$("#home .ProductList .ProductDetails a, #CategoryContent .ProductList li:not('.ListView') .ProductDetails a").dotdotdot({
			/*	The HTML to add as ellipsis. */
			ellipsis	: '... ',
			/*	How to cut off the text/html: 'word'/'letter'/'children' */
			wrap		: 'word',
			/*	Wrap-option fallback to 'letter' for long words */
			fallbackToLetter: true,
			/*	jQuery-selector for the element to keep and put after the ellipsis. */
		//	after		: null,
			/*	Whether to update the ellipsis: true/'window' */
			watch		: window,
			/*	Optionally set a max-height, if null, the height will be measured. */
		//	height		: null,
			/*	Deviation for the height-option. */
		//	tolerance	: 0,
			/*	Callback function that is fired after the ellipsis is added,
				receives two parameters: isTruncated(boolean), orgContent(string). */
			callback	: function( isTruncated, orgContent ) {},

			lastCharacter	: {

				/*	Remove these characters from the end of the truncated text. */
				remove		: [ ' ', ',', ';', '.', '!', '?' ],

				/*	Don't add an ellipsis if this array contains 
					the last character of the truncated text. */
				noEllipsis	: []
			}
		});
		
		

		/* qTip2 v2.2.0 None | qtip2.com | Licensed MIT, GPL | Sat Mar 15 2014 11:30:39 */
		!function(a,b,c){!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.qtip&&a(jQuery)}(function(d){"use strict";function e(a,b,c,e){this.id=c,this.target=a,this.tooltip=A,this.elements={target:a},this._id=J+"-"+c,this.timers={img:{}},this.options=b,this.plugins={},this.cache={event:{},target:d(),disabled:z,attr:e,onTooltip:z,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=z}function f(a){return a===A||"object"!==d.type(a)}function g(a){return!(d.isFunction(a)||a&&a.attr||a.length||"object"===d.type(a)&&(a.jquery||a.then))}function h(a){var b,c,e,h;return f(a)?z:(f(a.metadata)&&(a.metadata={type:a.metadata}),"content"in a&&(b=a.content,f(b)||b.jquery||b.done?b=a.content={text:c=g(b)?z:b}:c=b.text,"ajax"in b&&(e=b.ajax,h=e&&e.once!==z,delete b.ajax,b.text=function(a,b){var f=c||d(this).attr(b.options.content.attr)||"Loading...",g=d.ajax(d.extend({},e,{context:b})).then(e.success,A,e.error).then(function(a){return a&&h&&b.set("content.text",a),a},function(a,c,d){b.destroyed||0===a.status||b.set("content.text",c+": "+d)});return h?f:(b.set("content.text",f),g)}),"title"in b&&(f(b.title)||(b.button=b.title.button,b.title=b.title.text),g(b.title||z)&&(b.title=z))),"position"in a&&f(a.position)&&(a.position={my:a.position,at:a.position}),"show"in a&&f(a.show)&&(a.show=a.show.jquery?{target:a.show}:a.show===y?{ready:y}:{event:a.show}),"hide"in a&&f(a.hide)&&(a.hide=a.hide.jquery?{target:a.hide}:{event:a.hide}),"style"in a&&f(a.style)&&(a.style={classes:a.style}),d.each(I,function(){this.sanitize&&this.sanitize(a)}),a)}function i(a,b){for(var c,d=0,e=a,f=b.split(".");e=e[f[d++]];)d<f.length&&(c=e);return[c||a,f.pop()]}function j(a,b){var c,d,e;for(c in this.checks)for(d in this.checks[c])(e=new RegExp(d,"i").exec(a))&&(b.push(e),("builtin"===c||this.plugins[c])&&this.checks[c][d].apply(this.plugins[c]||this,b))}function k(a){return M.concat("").join(a?"-"+a+" ":" ")}function l(c){return c&&{type:c.type,pageX:c.pageX,pageY:c.pageY,target:c.target,relatedTarget:c.relatedTarget,scrollX:c.scrollX||a.pageXOffset||b.body.scrollLeft||b.documentElement.scrollLeft,scrollY:c.scrollY||a.pageYOffset||b.body.scrollTop||b.documentElement.scrollTop}||{}}function m(a,b){return b>0?setTimeout(d.proxy(a,this),b):(a.call(this),void 0)}function n(a){return this.tooltip.hasClass(T)?z:(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this.timers.show=m.call(this,function(){this.toggle(y,a)},this.options.show.delay),void 0)}function o(a){if(this.tooltip.hasClass(T))return z;var b=d(a.relatedTarget),c=b.closest(N)[0]===this.tooltip[0],e=b[0]===this.options.show.target[0];if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==b[0]&&"mouse"===this.options.position.target&&c||this.options.hide.fixed&&/mouse(out|leave|move)/.test(a.type)&&(c||e))try{a.preventDefault(),a.stopImmediatePropagation()}catch(f){}else this.timers.hide=m.call(this,function(){this.toggle(z,a)},this.options.hide.delay,this)}function p(a){return this.tooltip.hasClass(T)||!this.options.hide.inactive?z:(clearTimeout(this.timers.inactive),this.timers.inactive=m.call(this,function(){this.hide(a)},this.options.hide.inactive),void 0)}function q(a){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(a)}function r(a,c,e){d(b.body).delegate(a,(c.split?c:c.join($+" "))+$,function(){var a=t.api[d.attr(this,L)];a&&!a.disabled&&e.apply(a,arguments)})}function s(a,c,f){var g,i,j,k,l,m=d(b.body),n=a[0]===b?m:a,o=a.metadata?a.metadata(f.metadata):A,p="html5"===f.metadata.type&&o?o[f.metadata.name]:A,q=a.data(f.metadata.name||"qtipopts");try{q="string"==typeof q?d.parseJSON(q):q}catch(r){}if(k=d.extend(y,{},t.defaults,f,"object"==typeof q?h(q):A,h(p||o)),i=k.position,k.id=c,"boolean"==typeof k.content.text){if(j=a.attr(k.content.attr),k.content.attr===z||!j)return z;k.content.text=j}if(i.container.length||(i.container=m),i.target===z&&(i.target=n),k.show.target===z&&(k.show.target=n),k.show.solo===y&&(k.show.solo=i.container.closest("body")),k.hide.target===z&&(k.hide.target=n),k.position.viewport===y&&(k.position.viewport=i.container),i.container=i.container.eq(0),i.at=new v(i.at,y),i.my=new v(i.my),a.data(J))if(k.overwrite)a.qtip("destroy",!0);else if(k.overwrite===z)return z;return a.attr(K,c),k.suppress&&(l=a.attr("title"))&&a.removeAttr("title").attr(V,l).attr("title",""),g=new e(a,k,c,!!j),a.data(J,g),a.one("remove.qtip-"+c+" removeqtip.qtip-"+c,function(){var a;(a=d(this).data(J))&&a.destroy(!0)}),g}var t,u,v,w,x,y=!0,z=!1,A=null,B="x",C="y",D="top",E="left",F="bottom",G="right",H="center",I={},J="qtip",K="data-hasqtip",L="data-qtip-id",M=["ui-widget","ui-tooltip"],N="."+J,O="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),P=J+"-fixed",Q=J+"-default",R=J+"-focus",S=J+"-hover",T=J+"-disabled",U="_replacedByqTip",V="oldtitle",W={ie:function(){for(var a=3,c=b.createElement("div");(c.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c.getElementsByTagName("i")[0];);return a>4?a:0/0}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||z};u=e.prototype,u._when=function(a){return d.when.apply(d,a)},u.render=function(a){if(this.rendered||this.destroyed)return this;var b,c=this,e=this.options,f=this.cache,g=this.elements,h=e.content.text,i=e.content.title,j=e.content.button,k=e.position,l=("."+this._id+" ",[]);return d.attr(this.target[0],"aria-describedby",this._id),this.tooltip=g.tooltip=b=d("<div/>",{id:this._id,"class":[J,Q,e.style.classes,J+"-pos-"+e.position.my.abbrev()].join(" "),width:e.style.width||"",height:e.style.height||"",tracking:"mouse"===k.target&&k.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":z,"aria-describedby":this._id+"-content","aria-hidden":y}).toggleClass(T,this.disabled).attr(L,this.id).data(J,this).appendTo(k.container).append(g.content=d("<div />",{"class":J+"-content",id:this._id+"-content","aria-atomic":y})),this.rendered=-1,this.positioning=y,i&&(this._createTitle(),d.isFunction(i)||l.push(this._updateTitle(i,z))),j&&this._createButton(),d.isFunction(h)||l.push(this._updateContent(h,z)),this.rendered=y,this._setWidget(),d.each(I,function(a){var b;"render"===this.initialize&&(b=this(c))&&(c.plugins[a]=b)}),this._unassignEvents(),this._assignEvents(),this._when(l).then(function(){c._trigger("render"),c.positioning=z,c.hiddenDuringWait||!e.show.ready&&!a||c.toggle(y,f.event,z),c.hiddenDuringWait=z}),t.api[this.id]=this,this},u.destroy=function(a){function b(){if(!this.destroyed){this.destroyed=y;var a=this.target,b=a.attr(V);this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),d.each(this.plugins,function(){this.destroy&&this.destroy()}),clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this._unassignEvents(),a.removeData(J).removeAttr(L).removeAttr(K).removeAttr("aria-describedby"),this.options.suppress&&b&&a.attr("title",b).removeAttr(V),this._unbind(a),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=A,delete t.api[this.id]}}return this.destroyed?this.target:(a===y&&"hide"!==this.triggering||!this.rendered?b.call(this):(this.tooltip.one("tooltiphidden",d.proxy(b,this)),!this.triggering&&this.hide()),this.target)},w=u.checks={builtin:{"^id$":function(a,b,c,e){var f=c===y?t.nextid:c,g=J+"-"+f;f!==z&&f.length>0&&!d("#"+g).length?(this._id=g,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):a[b]=e},"^prerender":function(a,b,c){c&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(a,b,c){this._updateContent(c)},"^content.attr$":function(a,b,c,d){this.options.content.text===this.target.attr(d)&&this._updateContent(this.target.attr(c))},"^content.title$":function(a,b,c){return c?(c&&!this.elements.title&&this._createTitle(),this._updateTitle(c),void 0):this._removeTitle()},"^content.button$":function(a,b,c){this._updateButton(c)},"^content.title.(text|button)$":function(a,b,c){this.set("content."+b,c)},"^position.(my|at)$":function(a,b,c){"string"==typeof c&&(a[b]=new v(c,"at"===b))},"^position.container$":function(a,b,c){this.rendered&&this.tooltip.appendTo(c)},"^show.ready$":function(a,b,c){c&&(!this.rendered&&this.render(y)||this.toggle(y))},"^style.classes$":function(a,b,c,d){this.rendered&&this.tooltip.removeClass(d).addClass(c)},"^style.(width|height)":function(a,b,c){this.rendered&&this.tooltip.css(b,c)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(a,b,c){this.rendered&&this.tooltip.toggleClass(Q,!!c)},"^events.(render|show|move|hide|focus|blur)$":function(a,b,c){this.rendered&&this.tooltip[(d.isFunction(c)?"":"un")+"bind"]("tooltip"+b,c)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(this.rendered){var a=this.options.position;this.tooltip.attr("tracking","mouse"===a.target&&a.adjust.mouse),this._unassignEvents(),this._assignEvents()}}}},u.get=function(a){if(this.destroyed)return this;var b=i(this.options,a.toLowerCase()),c=b[0][b[1]];return c.precedance?c.string():c};var X=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,Y=/^prerender|show\.ready/i;u.set=function(a,b){if(this.destroyed)return this;{var c,e=this.rendered,f=z,g=this.options;this.checks}return"string"==typeof a?(c=a,a={},a[c]=b):a=d.extend({},a),d.each(a,function(b,c){if(e&&Y.test(b))return delete a[b],void 0;var h,j=i(g,b.toLowerCase());h=j[0][j[1]],j[0][j[1]]=c&&c.nodeType?d(c):c,f=X.test(b)||f,a[b]=[j[0],j[1],c,h]}),h(g),this.positioning=y,d.each(a,d.proxy(j,this)),this.positioning=z,this.rendered&&this.tooltip[0].offsetWidth>0&&f&&this.reposition("mouse"===g.position.target?A:this.cache.event),this},u._update=function(a,b){var c=this,e=this.cache;return this.rendered&&a?(d.isFunction(a)&&(a=a.call(this.elements.target,e.event,this)||""),d.isFunction(a.then)?(e.waiting=y,a.then(function(a){return e.waiting=z,c._update(a,b)},A,function(a){return c._update(a,b)})):a===z||!a&&""!==a?z:(a.jquery&&a.length>0?b.empty().append(a.css({display:"block",visibility:"visible"})):b.html(a),this._waitForContent(b).then(function(a){a.images&&a.images.length&&c.rendered&&c.tooltip[0].offsetWidth>0&&c.reposition(e.event,!a.length)}))):z},u._waitForContent=function(a){var b=this.cache;return b.waiting=y,(d.fn.imagesLoaded?a.imagesLoaded():d.Deferred().resolve([])).done(function(){b.waiting=z}).promise()},u._updateContent=function(a,b){this._update(a,this.elements.content,b)},u._updateTitle=function(a,b){this._update(a,this.elements.title,b)===z&&this._removeTitle(z)},u._createTitle=function(){var a=this.elements,b=this._id+"-title";a.titlebar&&this._removeTitle(),a.titlebar=d("<div />",{"class":J+"-titlebar "+(this.options.style.widget?k("header"):"")}).append(a.title=d("<div />",{id:b,"class":J+"-title","aria-atomic":y})).insertBefore(a.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(a){d(this).toggleClass("ui-state-active ui-state-focus","down"===a.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(a){d(this).toggleClass("ui-state-hover","mouseover"===a.type)}),this.options.content.button&&this._createButton()},u._removeTitle=function(a){var b=this.elements;b.title&&(b.titlebar.remove(),b.titlebar=b.title=b.button=A,a!==z&&this.reposition())},u.reposition=function(c,e){if(!this.rendered||this.positioning||this.destroyed)return this;this.positioning=y;var f,g,h=this.cache,i=this.tooltip,j=this.options.position,k=j.target,l=j.my,m=j.at,n=j.viewport,o=j.container,p=j.adjust,q=p.method.split(" "),r=i.outerWidth(z),s=i.outerHeight(z),t=0,u=0,v=i.css("position"),w={left:0,top:0},x=i[0].offsetWidth>0,A=c&&"scroll"===c.type,B=d(a),C=o[0].ownerDocument,J=this.mouse;if(d.isArray(k)&&2===k.length)m={x:E,y:D},w={left:k[0],top:k[1]};else if("mouse"===k)m={x:E,y:D},!J||!J.pageX||!p.mouse&&c&&c.pageX?c&&c.pageX||((!p.mouse||this.options.show.distance)&&h.origin&&h.origin.pageX?c=h.origin:(!c||c&&("resize"===c.type||"scroll"===c.type))&&(c=h.event)):c=J,"static"!==v&&(w=o.offset()),C.body.offsetWidth!==(a.innerWidth||C.documentElement.clientWidth)&&(g=d(b.body).offset()),w={left:c.pageX-w.left+(g&&g.left||0),top:c.pageY-w.top+(g&&g.top||0)},p.mouse&&A&&J&&(w.left-=(J.scrollX||0)-B.scrollLeft(),w.top-=(J.scrollY||0)-B.scrollTop());else{if("event"===k?c&&c.target&&"scroll"!==c.type&&"resize"!==c.type?h.target=d(c.target):c.target||(h.target=this.elements.target):"event"!==k&&(h.target=d(k.jquery?k:this.elements.target)),k=h.target,k=d(k).eq(0),0===k.length)return this;k[0]===b||k[0]===a?(t=W.iOS?a.innerWidth:k.width(),u=W.iOS?a.innerHeight:k.height(),k[0]===a&&(w={top:(n||k).scrollTop(),left:(n||k).scrollLeft()})):I.imagemap&&k.is("area")?f=I.imagemap(this,k,m,I.viewport?q:z):I.svg&&k&&k[0].ownerSVGElement?f=I.svg(this,k,m,I.viewport?q:z):(t=k.outerWidth(z),u=k.outerHeight(z),w=k.offset()),f&&(t=f.width,u=f.height,g=f.offset,w=f.position),w=this.reposition.offset(k,w,o),(W.iOS>3.1&&W.iOS<4.1||W.iOS>=4.3&&W.iOS<4.33||!W.iOS&&"fixed"===v)&&(w.left-=B.scrollLeft(),w.top-=B.scrollTop()),(!f||f&&f.adjustable!==z)&&(w.left+=m.x===G?t:m.x===H?t/2:0,w.top+=m.y===F?u:m.y===H?u/2:0)}return w.left+=p.x+(l.x===G?-r:l.x===H?-r/2:0),w.top+=p.y+(l.y===F?-s:l.y===H?-s/2:0),I.viewport?(w.adjusted=I.viewport(this,w,j,t,u,r,s),g&&w.adjusted.left&&(w.left+=g.left),g&&w.adjusted.top&&(w.top+=g.top)):w.adjusted={left:0,top:0},this._trigger("move",[w,n.elem||n],c)?(delete w.adjusted,e===z||!x||isNaN(w.left)||isNaN(w.top)||"mouse"===k||!d.isFunction(j.effect)?i.css(w):d.isFunction(j.effect)&&(j.effect.call(i,this,d.extend({},w)),i.queue(function(a){d(this).css({opacity:"",height:""}),W.ie&&this.style.removeAttribute("filter"),a()})),this.positioning=z,this):this},u.reposition.offset=function(a,c,e){function f(a,b){c.left+=b*a.scrollLeft(),c.top+=b*a.scrollTop()}if(!e[0])return c;var g,h,i,j,k=d(a[0].ownerDocument),l=!!W.ie&&"CSS1Compat"!==b.compatMode,m=e[0];do"static"!==(h=d.css(m,"position"))&&("fixed"===h?(i=m.getBoundingClientRect(),f(k,-1)):(i=d(m).position(),i.left+=parseFloat(d.css(m,"borderLeftWidth"))||0,i.top+=parseFloat(d.css(m,"borderTopWidth"))||0),c.left-=i.left+(parseFloat(d.css(m,"marginLeft"))||0),c.top-=i.top+(parseFloat(d.css(m,"marginTop"))||0),g||"hidden"===(j=d.css(m,"overflow"))||"visible"===j||(g=d(m)));while(m=m.offsetParent);return g&&(g[0]!==k[0]||l)&&f(g,1),c};var Z=(v=u.reposition.Corner=function(a,b){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,H).toLowerCase(),this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!b;var c=a.charAt(0);this.precedance="t"===c||"b"===c?C:B}).prototype;Z.invert=function(a,b){this[a]=this[a]===E?G:this[a]===G?E:b||this[a]},Z.string=function(){var a=this.x,b=this.y;return a===b?a:this.precedance===C||this.forceY&&"center"!==b?b+" "+a:a+" "+b},Z.abbrev=function(){var a=this.string().split(" ");return a[0].charAt(0)+(a[1]&&a[1].charAt(0)||"")},Z.clone=function(){return new v(this.string(),this.forceY)},u.toggle=function(a,c){var e=this.cache,f=this.options,g=this.tooltip;if(c){if(/over|enter/.test(c.type)&&/out|leave/.test(e.event.type)&&f.show.target.add(c.target).length===f.show.target.length&&g.has(c.relatedTarget).length)return this;e.event=l(c)}if(this.waiting&&!a&&(this.hiddenDuringWait=y),!this.rendered)return a?this.render(1):this;if(this.destroyed||this.disabled)return this;var h,i,j,k=a?"show":"hide",m=this.options[k],n=(this.options[a?"hide":"show"],this.options.position),o=this.options.content,p=this.tooltip.css("width"),q=this.tooltip.is(":visible"),r=a||1===m.target.length,s=!c||m.target.length<2||e.target[0]===c.target;return(typeof a).search("boolean|number")&&(a=!q),h=!g.is(":animated")&&q===a&&s,i=h?A:!!this._trigger(k,[90]),this.destroyed?this:(i!==z&&a&&this.focus(c),!i||h?this:(d.attr(g[0],"aria-hidden",!a),a?(e.origin=l(this.mouse),d.isFunction(o.text)&&this._updateContent(o.text,z),d.isFunction(o.title)&&this._updateTitle(o.title,z),!x&&"mouse"===n.target&&n.adjust.mouse&&(d(b).bind("mousemove."+J,this._storeMouse),x=y),p||g.css("width",g.outerWidth(z)),this.reposition(c,arguments[2]),p||g.css("width",""),m.solo&&("string"==typeof m.solo?d(m.solo):d(N,m.solo)).not(g).not(m.target).qtip("hide",d.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete e.origin,x&&!d(N+'[tracking="true"]:visible',m.solo).not(g).length&&(d(b).unbind("mousemove."+J),x=z),this.blur(c)),j=d.proxy(function(){a?(W.ie&&g[0].style.removeAttribute("filter"),g.css("overflow",""),"string"==typeof m.autofocus&&d(this.options.show.autofocus,g).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):g.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(a?"visible":"hidden")},this),m.effect===z||r===z?(g[k](),j()):d.isFunction(m.effect)?(g.stop(1,1),m.effect.call(g,this),g.queue("fx",function(a){j(),a()})):g.fadeTo(90,a?1:0,j),a&&m.target.trigger("qtip-"+this.id+"-inactive"),this))},u.show=function(a){return this.toggle(y,a)},u.hide=function(a){return this.toggle(z,a)},u.focus=function(a){if(!this.rendered||this.destroyed)return this;var b=d(N),c=this.tooltip,e=parseInt(c[0].style.zIndex,10),f=t.zindex+b.length;return c.hasClass(R)||this._trigger("focus",[f],a)&&(e!==f&&(b.each(function(){this.style.zIndex>e&&(this.style.zIndex=this.style.zIndex-1)}),b.filter("."+R).qtip("blur",a)),c.addClass(R)[0].style.zIndex=f),this},u.blur=function(a){return!this.rendered||this.destroyed?this:(this.tooltip.removeClass(R),this._trigger("blur",[this.tooltip.css("zIndex")],a),this)},u.disable=function(a){return this.destroyed?this:("toggle"===a?a=!(this.rendered?this.tooltip.hasClass(T):this.disabled):"boolean"!=typeof a&&(a=y),this.rendered&&this.tooltip.toggleClass(T,a).attr("aria-disabled",a),this.disabled=!!a,this)},u.enable=function(){return this.disable(z)},u._createButton=function(){var a=this,b=this.elements,c=b.tooltip,e=this.options.content.button,f="string"==typeof e,g=f?e:"Close tooltip";b.button&&b.button.remove(),b.button=e.jquery?e:d("<a />",{"class":"qtip-close "+(this.options.style.widget?"":J+"-icon"),title:g,"aria-label":g}).prepend(d("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),b.button.appendTo(b.titlebar||c).attr("role","button").click(function(b){return c.hasClass(T)||a.hide(b),z})},u._updateButton=function(a){if(!this.rendered)return z;var b=this.elements.button;a?this._createButton():b.remove()},u._setWidget=function(){var a=this.options.style.widget,b=this.elements,c=b.tooltip,d=c.hasClass(T);c.removeClass(T),T=a?"ui-state-disabled":"qtip-disabled",c.toggleClass(T,d),c.toggleClass("ui-helper-reset "+k(),a).toggleClass(Q,this.options.style.def&&!a),b.content&&b.content.toggleClass(k("content"),a),b.titlebar&&b.titlebar.toggleClass(k("header"),a),b.button&&b.button.toggleClass(J+"-icon",!a)},u._storeMouse=function(a){(this.mouse=l(a)).type="mousemove"},u._bind=function(a,b,c,e,f){var g="."+this._id+(e?"-"+e:"");b.length&&d(a).bind((b.split?b:b.join(g+" "))+g,d.proxy(c,f||this))},u._unbind=function(a,b){d(a).unbind("."+this._id+(b?"-"+b:""))};var $="."+J;d(function(){r(N,["mouseenter","mouseleave"],function(a){var b="mouseenter"===a.type,c=d(a.currentTarget),e=d(a.relatedTarget||a.target),f=this.options;b?(this.focus(a),c.hasClass(P)&&!c.hasClass(T)&&clearTimeout(this.timers.hide)):"mouse"===f.position.target&&f.hide.event&&f.show.target&&!e.closest(f.show.target[0]).length&&this.hide(a),c.toggleClass(S,b)}),r("["+L+"]",O,p)}),u._trigger=function(a,b,c){var e=d.Event("tooltip"+a);return e.originalEvent=c&&d.extend({},c)||this.cache.event||A,this.triggering=a,this.tooltip.trigger(e,[this].concat(b||[])),this.triggering=z,!e.isDefaultPrevented()},u._bindEvents=function(a,b,c,e,f,g){if(e.add(c).length===e.length){var h=[];b=d.map(b,function(b){var c=d.inArray(b,a);return c>-1?(h.push(a.splice(c,1)[0]),void 0):b}),h.length&&this._bind(c,h,function(a){var b=this.rendered?this.tooltip[0].offsetWidth>0:!1;(b?g:f).call(this,a)})}this._bind(c,a,f),this._bind(e,b,g)},u._assignInitialEvents=function(a){function b(a){return this.disabled||this.destroyed?z:(this.cache.event=l(a),this.cache.target=a?d(a.target):[c],clearTimeout(this.timers.show),this.timers.show=m.call(this,function(){this.render("object"==typeof a||e.show.ready)},e.show.delay),void 0)}var e=this.options,f=e.show.target,g=e.hide.target,h=e.show.event?d.trim(""+e.show.event).split(" "):[],i=e.hide.event?d.trim(""+e.hide.event).split(" "):[];/mouse(over|enter)/i.test(e.show.event)&&!/mouse(out|leave)/i.test(e.hide.event)&&i.push("mouseleave"),this._bind(f,"mousemove",function(a){this._storeMouse(a),this.cache.onTarget=y}),this._bindEvents(h,i,f,g,b,function(){clearTimeout(this.timers.show)}),(e.show.ready||e.prerender)&&b.call(this,a)},u._assignEvents=function(){var c=this,e=this.options,f=e.position,g=this.tooltip,h=e.show.target,i=e.hide.target,j=f.container,k=f.viewport,l=d(b),m=(d(b.body),d(a)),r=e.show.event?d.trim(""+e.show.event).split(" "):[],s=e.hide.event?d.trim(""+e.hide.event).split(" "):[];d.each(e.events,function(a,b){c._bind(g,"toggle"===a?["tooltipshow","tooltiphide"]:["tooltip"+a],b,null,g)}),/mouse(out|leave)/i.test(e.hide.event)&&"window"===e.hide.leave&&this._bind(l,["mouseout","blur"],function(a){/select|option/.test(a.target.nodeName)||a.relatedTarget||this.hide(a)}),e.hide.fixed?i=i.add(g.addClass(P)):/mouse(over|enter)/i.test(e.show.event)&&this._bind(i,"mouseleave",function(){clearTimeout(this.timers.show)}),(""+e.hide.event).indexOf("unfocus")>-1&&this._bind(j.closest("html"),["mousedown","touchstart"],function(a){var b=d(a.target),c=this.rendered&&!this.tooltip.hasClass(T)&&this.tooltip[0].offsetWidth>0,e=b.parents(N).filter(this.tooltip[0]).length>0;b[0]===this.target[0]||b[0]===this.tooltip[0]||e||this.target.has(b[0]).length||!c||this.hide(a)}),"number"==typeof e.hide.inactive&&(this._bind(h,"qtip-"+this.id+"-inactive",p),this._bind(i.add(g),t.inactiveEvents,p,"-inactive")),this._bindEvents(r,s,h,i,n,o),this._bind(h.add(g),"mousemove",function(a){if("number"==typeof e.hide.distance){var b=this.cache.origin||{},c=this.options.hide.distance,d=Math.abs;(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c)&&this.hide(a)}this._storeMouse(a)}),"mouse"===f.target&&f.adjust.mouse&&(e.hide.event&&this._bind(h,["mouseenter","mouseleave"],function(a){this.cache.onTarget="mouseenter"===a.type}),this._bind(l,"mousemove",function(a){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(T)&&this.tooltip[0].offsetWidth>0&&this.reposition(a)})),(f.adjust.resize||k.length)&&this._bind(d.event.special.resize?k:m,"resize",q),f.adjust.scroll&&this._bind(m.add(f.container),"scroll",q)},u._unassignEvents=function(){var c=[this.options.show.target[0],this.options.hide.target[0],this.rendered&&this.tooltip[0],this.options.position.container[0],this.options.position.viewport[0],this.options.position.container.closest("html")[0],a,b];this._unbind(d([]).pushStack(d.grep(c,function(a){return"object"==typeof a})))},t=d.fn.qtip=function(a,b,e){var f=(""+a).toLowerCase(),g=A,i=d.makeArray(arguments).slice(1),j=i[i.length-1],k=this[0]?d.data(this[0],J):A;return!arguments.length&&k||"api"===f?k:"string"==typeof a?(this.each(function(){var a=d.data(this,J);if(!a)return y;if(j&&j.timeStamp&&(a.cache.event=j),!b||"option"!==f&&"options"!==f)a[f]&&a[f].apply(a,i);else{if(e===c&&!d.isPlainObject(b))return g=a.get(b),z;a.set(b,e)}}),g!==A?g:this):"object"!=typeof a&&arguments.length?void 0:(k=h(d.extend(y,{},a)),this.each(function(a){var b,c;return c=d.isArray(k.id)?k.id[a]:k.id,c=!c||c===z||c.length<1||t.api[c]?t.nextid++:c,b=s(d(this),c,k),b===z?y:(t.api[c]=b,d.each(I,function(){"initialize"===this.initialize&&this(b)}),b._assignInitialEvents(j),void 0)}))},d.qtip=e,t.api={},d.each({attr:function(a,b){if(this.length){var c=this[0],e="title",f=d.data(c,"qtip");if(a===e&&f&&"object"==typeof f&&f.options.suppress)return arguments.length<2?d.attr(c,V):(f&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text",b),this.attr(V,b))}return d.fn["attr"+U].apply(this,arguments)},clone:function(a){var b=(d([]),d.fn["clone"+U].apply(this,arguments));return a||b.filter("["+V+"]").attr("title",function(){return d.attr(this,V)}).removeAttr(V),b}},function(a,b){if(!b||d.fn[a+U])return y;var c=d.fn[a+U]=d.fn[a];d.fn[a]=function(){return b.apply(this,arguments)||c.apply(this,arguments)}}),d.ui||(d["cleanData"+U]=d.cleanData,d.cleanData=function(a){for(var b,c=0;(b=d(a[c])).length;c++)if(b.attr(K))try{b.triggerHandler("removeqtip")}catch(e){}d["cleanData"+U].apply(this,arguments)}),t.version="2.2.0",t.nextid=0,t.inactiveEvents=O,t.zindex=15e3,t.defaults={prerender:z,id:z,overwrite:y,suppress:y,content:{text:y,attr:"title",title:z,button:z},position:{my:"top left",at:"bottom right",target:z,container:z,viewport:z,adjust:{x:0,y:0,mouse:y,scroll:y,resize:y,method:"flipinvert flipinvert"},effect:function(a,b){d(this).animate(b,{duration:200,queue:z})}},show:{target:z,event:"mouseenter",effect:y,delay:90,solo:z,ready:z,autofocus:z},hide:{target:z,event:"mouseleave",effect:y,delay:0,fixed:z,inactive:z,leave:"window",distance:z},style:{classes:"",widget:z,width:z,height:z,def:y},events:{render:A,move:A,show:A,hide:A,toggle:A,visible:A,hidden:A,focus:A,blur:A}}})}(window,document);

		
		
		// On page load and the screen is this size
		var width = $(window).width();
		if (width >= 490) {

			$('#frmWishList button[alt], .AddToWishlistLink button[alt] ').qtip({ // Grab all elements with a non-blank data-tooltip attr.
				style: { 
				      classes: 'qtip-light', // Inherit from preset style
				   },
			    content: {
			        attr: 'alt' // Tell qTip2 to look inside this attr for its content
			    },
			     position: {
			        my: 'bottom center',  // Position my top left...
			        at: 'top center', // at the bottom right of...
			        //target: [10, 10]
			    }
			});
			
			
			$('.AddToWishlistLink a[title]').qtip({ // Grab all elements with a non-blank data-tooltip attr.
				style: { 
				      classes: 'qtip-light', // Inherit from preset style
				   },
			    content: {
			        attr: 'title' // Tell qTip2 to look inside this attr for its content
			    },
			     position: {
			        my: 'bottom center',  // Position my top left...
			        at: 'top center', // at the bottom right of...
			        //target: [10, 10]
			    }
			});
			
			
			$('.ProductList .QuickViewBtn').qtip({ // Grab all elements with a non-blank data-tooltip attr.
				style: { 
				      classes: 'qtip-light', // Inherit from preset style
				   },
			    content: "Product Quick View",
			     position: {
			        my: 'bottom right',  // Position my top left...
			        at: 'top right', // at the bottom right of...
			        //target: [10, 10]
			    }
			});

		}
		
		
		/**
		 * bl-jquery-image-center jQuery Plugin
		 *
		 * @copyright Boxlight Media Ltd. 2012
		 * @license MIT License
		 * @description Centers an image by moving, cropping and filling spaces inside it's parent container. Call
		 * this on a set of images to have them fill their parent whilst maintaining aspect ratio
		 * @author Robert Cambridge
		 *
		 * Usage: See documentation at http://boxlight.github.com/bl-jquery-image-center
		 */
		(function($) {
		  $.fn.centerImage = function(method, callback) {
		    callback = callback || function() {};
		    var els = this;
		    var remaining = $(this).length;
		    method = method == 'inside';

		    // execute this on an individual image element once it's loaded
		    var fn = function(img) {
		      var $img = $(img);
		      var $div = $img.parent();
		      // parent CSS should be in stylesheet, but to reinforce:
		      $div.css({
		        overflow: 'hidden',
		        position: $div.css('position') == 'absolute' ? 'absolute' : 'relative'
		      });

		      // temporarily set the image size naturally so we can get the aspect ratio
		      $img.css({
		        'position':   'static',
		        'width':      'auto',
		        'height':     'auto',
		        'max-width':  '100%',
		        'max-height': '100%'
		      });

		      // now resize
		      var div = { w: $div.width(), h: $div.height(), r: $div.width() / $div.height() };
		      var img = { w: $img.width(), h: $img.height(), r: $img.width() / $img.height() };
		      $img.css({
		        'max-width':  'none',
		        'max-height': 'none',
		        'width':      Math.round((div.r > img.r) ^ method ? '100%' : div.h / img.h * img.w),
		        'height':     Math.round((div.r < img.r) ^ method ? '100%' : div.w / img.w * img.h)
		      });

		      // now center - but portrait images need to be centered slightly above halfway (33%)
		      var div = { w: $div.width(), h: $div.height() };
		      var img = { w: $img.width(), h: $img.height() };
		      $img.css({
		        'position': 'absolute',
		        'left':     Math.round((div.w - img.w) / 2),
		        'top':      Math.round((div.h - img.h) / 3)
		      });

		      callbackWrapped(img)
		    };

		    var callbackWrapped = function(img) {
		      remaining--;
		      callback.apply(els, [ img, remaining ]);
		    };

		    // iterate through elements
		    return els.each(function(i) {
		      if (this.complete || this.readyState === 'complete') {
		        // loaded already? run fn
		        // when binding, we can tell whether image loaded or not.
		        // not if it's already failed though :(
		        (function(el) {
		          // use setTimeout to prevent browser locking up
		          setTimeout(function() { fn(el) }, 1);
		        })(this);
		      } else {
		        // not loaded? bind to load
		        (function(el) {
		          $(el)
		            .one('load', function() {
		              // use setTimeout to prevent browser locking up
		              setTimeout(function() {
		                fn(el);
		              }, 1);
		            })
		            .one('error', function() {
		              // the image did not load
		              callbackWrapped(el)
		            })
		          .end();

		          // IE9/10 won't always trigger the load event. fix it.
		          if (navigator.userAgent.indexOf("Trident/5") >= 0 || navigator.userAgent.indexOf("Trident/6")) {
		            el.src = el.src;
		          }
		        })(this);
		      }
		    });
		  };
		  // Alias functions which often better describe the use case
		  $.fn.imageCenterResize = function(callback) {
		    return $(this).centerImage('inside', callback);
		  };
		  $.fn.imageCropFill = function(callback) {
		    return $(this).centerImage('outside', callback);
		  };
		})(jQuery);

		// Activate Plugin - also in window resize
		 // $('.ProductList .ProductImage img').centerImage();
		
		
}
// no ie		


// ==========================================================================
// HEADER - Crafted
// ==========================================================================


	// Add class names to the header navigation so I can hide stuff
	$( "#Menu ul" ).addClass(function( index ) {
	  return "ul-" + index;
	});

	$( "#Menu li" ).addClass(function( index ) {
	  return "item-" + index;
	});
	
	
	//Checks to see if the span is empty
	if( !$.trim( $('.TopMenu .CartLink .cartCounter').html() ).length ) {
		//Cart is empty
		$('.TopMenu .CartLink .cartStatus').html( "" ); 
		$('.TopMenu .CartLink .cartCounter').html( "Nothing in cart" ); 

	  } else {
		//Cart is full
		$('.TopMenu .CartLink .cartStatus').html( "Checkout" );
	}
	

	// Find and replace - looks for the word "or" and replaces it with "/"
	$(".TopMenu .loginOut").each(function () {
	    var texta = $(this).html(function (_, oldVala) {
	        return oldVala.replace(/ or /g, '<span class="or"> / </span>')
	    });
	});
	
	
	// Find and replace - looks for the word "or" and replaces it with "/"
	$(".js-side-account-menu .loginOut").each(function () {
	    var texta = $(this).html(function (_, oldVala) {
	        return oldVala.replace(/ or /g, '<span class="or">or</span>')
	    });
	});
	
	
	// Find and replace - changes text to create Account
	$(".TopMenu .loginOut").each(function () {
	    var text1 = $(this).html(function (_, oldVal1) {
	        return oldVal1.replace(/Create an account/g, 'Create Account')
	    });
	});
	
	
	// Find and replace - Adds welcome message
	$(".TopMenu .acctOptions .name").each(function () {
	    var text2 = $(this).html(function (_, oldVal2) {
	        return oldVal2.replace(/Hi Guest/g, 'Hello.')
	    });
	});

	
	if( matches = location.href.match(/\?(pcat=\w+)/) ) {  
	    $('.sf-menu a[href*="' + matches[1] + '"]').addClass('active');
	}
	
	
	// Adds an active class to the menu
	$(".sf-menu a").filter(function(){
	    return this.href == location.href.replace(/#.*/, "");
	}).parent('li').addClass("active");
	
	
// ==========================================================================
// FOOTER - Crafted
// ==========================================================================

//changes blog post list heading to follow suit
$(".footer #BlogRecentPosts h2").replaceWith('<h4><a href="/blog/">Blog</a></h4>')

// Currency Chooser toggle
	//  $( ".CurrencyChooser .BlockContent" ).hide();
	//  	$( ".CurrencyChooser .selected-currency" ).click(function() {
  	//		$( ".CurrencyChooser .BlockContent" ).toggle();
	// });








// ==========================================================================
// HOMEPAGE - Crafted
// ==========================================================================
	

	// Hides the homepage feature box if no slides are added
	if (!$('.feature .slideWrap').length) { // implies zero or empty
	    //log('empty');
		$( "#home .feature" ).addClass( "hide" );
		$( "#home .feature" ).children().addClass( "hide" );
	  }

	
	// Looks at the slider button to see if there is a price added. If there is it wraps it in b tag to be styled
	// Instruct user to wrap price in parenthis to show up
	$('.slide-content .btn').each(function(index){
		// Does it have a parenth?
	    if($(this).text().indexOf('(')!=-1){
			//http://www.regexr.com/
			$(this).html($(this).html().replace(/(\([^)]+\))/, '<span class="price">$1</span>').replace('(', '').replace(')', '').replace('$', '<span class="currency">$</span>'));
			$(this).addClass( "hasPrice" );
	    }
	});
	
	// Looks at the slider button to see if there is a price added. If there is it wraps it in b tag to be styled
	// Instruct user to wrap price in parenthis to show up
	$(".p-price, .btn .price").each(function(index){
		// Does it have a dollar sign?
	    if($(this).text().indexOf('$')!=-1){
			//http://www.regexr.com/
			$(this).html($(this).html().replace(/([$])/g, '<span class="currency">$1</span>'));
	    }
	});

	
	// Begin Carousels and sliders
		  $("#featureSlide").owlCarousel({

		      navigation : true, // Show next and prev buttons
		      slideSpeed : 300,
		      paginationSpeed : 400,
				autoPlay: false,
				stopOnHover: true,
		      singleItem:true

		      // "singleItem:true" is a shortcut for:
		      // items : 1, 
		      // itemsDesktop : false,
		      // itemsDesktopSmall : false,
		      // itemsTablet: false,
		      // itemsMobile : false

		  });


		$(".productSlide .ProductList").addClass("owl-carousel owl-theme");
		$(".productSlide .ProductList .list-item").addClass("item");

		if ($('.featuredProducts .ProductList').length){
		        //console.log('here');


				$( ".featuredProducts h2" ).replaceWith( "<div class='nav'><span class='rule'></span><a class='prev fa fa-caret-left fa-lg'></a><span>Featured Products</span><a class='next fa fa-caret-right fa-lg'></a><span class='rule'></span></div>" );


				$('.FeaturedProducts .ProductList').attr('id', 'featuredSlide');	
				  var owl1 = $("#featuredSlide");

				  owl1.owlCarousel({
				      items : 4, //10 items above 1000px browser width
				      itemsDesktop : [1000,4], //5 items between 1000px and 901px
				      itemsDesktopSmall : [900,2], // betweem 900px and 601px
				      itemsTablet: [600,1], //2 items between 600 and 0
				      itemsMobile : [480,1] // itemsMobile disabled - inherit from itemsTablet option
				  });

				  // Custom Navigation Events
				  $(".featuredProducts .next").click(function(){
				    owl1.trigger('owl.next');
				  });
				  $(".featuredProducts .prev").click(function(){
				    owl1.trigger('owl.prev');
				  });
		    }
		else {
			//console.log('not here');
			$('.featuredProducts').hide();

		}


	if ($('.topSellers .ProductList').length){
	        //console.log('here');

			$( ".topSellers h2" ).replaceWith( "<div class='nav'><a class='prev fa fa-caret-left fa-lg'></a><span>Top Sellers</span><a class='next fa fa-caret-right fa-lg'></a></div>" );


			$('.topSellers .ProductList').attr('id', 'topSellersSlide');	
			  var owl2 = $("#topSellersSlide");

			  owl2.owlCarousel({
			      items : 4, //10 items above 1000px browser width
			      itemsDesktop : [1000,4], //5 items between 1000px and 901px
			      itemsDesktopSmall : [900,2], // betweem 900px and 601px
			      itemsTablet: [600,1], //2 items between 600 and 0
			      itemsMobile : [480,1] // itemsMobile disabled - inherit from itemsTablet option
			  });

			  // Custom Navigation Events
			  $(".topSellers .next").click(function(){
			    owl2.trigger('owl.next');
			  });
			  $(".topSellers .prev").click(function(){
			    owl2.trigger('owl.prev');
			  });
	    }
	else {
		//console.log('not here');
		$('.topSellers').hide();

	}
	

	if ($('.newProducts .ProductList').length){
	        //console.log('here');

			$( ".newProducts h2" ).replaceWith( "<div class='nav'><a class='prev fa fa-caret-left fa-lg'></a><span>New Products</span><a class='next fa fa-caret-right fa-lg'></a></div>" );


			$('.newProducts .ProductList').attr('id', 'NewProductsSlide');	
			  var owl3 = $("#NewProductsSlide");

			  owl3.owlCarousel({
			      items : 4, //10 items above 1000px browser width
			      itemsDesktop : [1000,4], //5 items between 1000px and 901px
			      itemsDesktopSmall : [900,2], // betweem 900px and 601px
			      itemsTablet: [600,1], //2 items between 600 and 0
			      itemsMobile : [480,1] // itemsMobile disabled - inherit from itemsTablet option
			  });

			  // Custom Navigation Events
			  $(".newProducts .next").click(function(){
			    owl3.trigger('owl.next');
			  })
			  $(".newProducts .prev").click(function(){
			    owl3.trigger('owl.prev');
			  })
	    }
	else {
		//console.log('not here');
		$('.newProducts').hide();
	}
	
	// Checks to see if there are 4 products before showing slider
	var featuredProductsCount = $("#home #HomeFeaturedProducts .list-item").length;
	if  (featuredProductsCount < 4)  {
	    $('#home .featuredProducts').addClass('hide');
	}
	// Checks to see if there are 4 products before showing slider
	var topSellersCount = $("#home #topSellersSlide .list-item").length;
	if  (topSellersCount < 4)  {
	    $('#home .topSellers').addClass('hide');
	}
	// Checks to see if there are 4 products before showing slider
	var newProductsCount = $("#home #HomeNewProducts .list-item").length;
	if  (newProductsCount < 4)  {
	    $('#home .newProducts').addClass('hide');
	}

	//End carousel and sliders
	

	
	$( "#DrawerMenu .inner" ).prepend( '<div class="toggleWrap"><div id="DrawerToggleMenu">Menu Toggle</div></div>' );
	//Drawer Menu
    menuToggleDrawer = $("#DrawerToggleMenu");
    drawer = $("#DrawerMenu");
    page = $(".page");
    menuToggleDrawer.click(function(){
        if (page.hasClass("off-screen")) {
            setTimeout(function(){drawer.toggleClass("on-screen")},100);
        } else {
            drawer.toggleClass("on-screen");
        }
        page.toggleClass("off-screen");
    });
	
	
	//Adss an explicit hight to the responsive homepage slider
	var maxHslide = 0;
	var maxWslide = 0;
	$('.slide-content').each(function(f) {
		if ($(this).height() > maxHslide) { maxHslide = $(this).height() };
		if ($(this).width() > maxWslide) { maxWslide = $(this).width() };
	});
	$('.slideText').height(maxHslide).width(maxWslide);
	
	
	// Restructures the homepage tile banner
	var homeBannerLink = $(".banner_home_page_top a").attr( "href" );
	var categoryBannerLink = $(".banner_category_page_top a").attr( "href" );
	var brandBannerLink = $(".banner_brand_page_top a").attr( "href" );
	var searchBannerLink = $(".banner_search_page_top a").attr( "href" );
	$(".banner_home_page_top a, .banner_category_page_top a, .banner_brands_page_top a, .banner_search_page_top a").replaceWith(function(){
	        return $("<span class=cta>" + $(this).html() + "</span>");
	});
	$(".banner_home_page_top h1, .banner_category_page_top h1, .banner_brands_page_top h1, .banner_search_page_top h1").replaceWith(function(){
	        return $("<span class=title>" + $(this).html() + "</span>");
	});
	
	$(".banner_home_page_top").wrap( '<a href=' + homeBannerLink + '></a>' );
	$(".banner_category_page_top").wrap( '<a href=' + categoryBannerLink + '></a>' );
	$(".banner_brand_page_top").wrap( '<a href=' + brandBannerLink + '></a>' );
	$(".banner_search_page_top").wrap( '<a href=' + searchBannerLink + '></a>' );
	
	
// Blocks script from running on ie8 and lower
if (!$("html").hasClass("lt-ie9")) {	

}
// End Modern Browser Code


// ==========================================================================
// PRODUCT LISTINGS - Crafted
// ==========================================================================	

	
	if ($('.ProductList .QuickViewBtn').length) { // implies *not* zero	
		var replaced = $(".ProductList .QuickViewBtn").html().replace('Quick View','<i class="fa fa-search fa-lg"></i>');
		$(".ProductList .QuickViewBtn").html(replaced);
	  }
	
	
	// If the product has no rating the rating box still takes up space. This hides the image
	if ($('.ProductPriceRating img[src*="Rating0"]').length) { 
		//console.log('got one');
		$('.ProductPriceRating img[src*="Rating0"]').hide();
	  }
	
	// Adds sale tag to product list
	if ($('.ProductList .SalePrice').length) { // implies *not* zero
	    //log('We found img elements on the page using "img"');
		$('.ProductList .SalePrice').append( "<span class='saleTag'>Sale</span>" );
	  }
	// Adds sale tag to product list
	if ($('.productPage .p-price .s-price').length) { // implies *not* zero
	    //log('We found img elements on the page using "img"');
		$('.ProductThumbImage').append( "<span class='saleTag'>Sale</span>" );
	  }
	
	
	// Adds a Sold Out or out of stock tag to the product listing and product page
	if(!$('.ProductList .list-item .ProductActionAdd[style="display:none;"], .ProductList li .ProductActionAdd[style="display:none;"], .ProductList .list-item .ProductActionAdd[style="display: none;"], .ProductList li .ProductActionAdd[style="display: none;"]').length == 0)
	{
		//console.log('out of stock :hidden')
		$('.ProductList .list-item .ProductActionAdd[style="display:none;"], .ProductList li .ProductActionAdd[style="display:none;"], .ProductList .list-item .ProductActionAdd[style="display: none;"], .ProductList li .ProductActionAdd[style="display: none;"]').parent().find('.ProductImage a').append( "<span class='SoldOutTag'>Sold Out</span>" );
		
	}
	// Adds sale tag to product list
	if ($('.productPage .out-of-stock').length) { // implies *not* zero
	    //log('We found img elements on the page using "img"');
		$('.ProductThumbImage a').append( "<span class='SoldOutTag'>Sold Out</span>" );
	  }
	
	

// ==========================================================================
// PRODUCT PAGE - Crafted
// ==========================================================================	

if ($("body").hasClass("productPage")) {
	
	// prevents related products from showing in the pinterest pin box
	$('#SideProductRelated img').attr('nopin','true');
		
	
	// If the user adds a feature list to the product page and adds a class .featureList it will be moved to top of page
	if ($('.productPage .featuresList').length) { // implies *not* zero
	    //we found a featurelist
		$('.productPage .featuresList').hide().appendTo('#featuresList').show();
		$( ".productPage .featuresList" ).before( "<h4>Overview</h4>" );
		
	  }
	$('.productPage .detailsGrid').hide().appendTo('#detailsGrid').show();
	
	
	
	//Checks to see if related products is empty
	if( !$.trim( $('.productPage #SideProductRelated').html() ).length ) {
		//nothing here
		$('.PrimaryProductDetails .two-thirds').removeClass( "two-thirds" ); 

	  } else {
		//found something
	}


}
// END page hasClass



// ==========================================================================
// CATEGORY PAGE - Crafted
// ==========================================================================

// Does the category have any authored text?
if ($('.CategoryDescription p').length) { 
	//console.log('got one');
  } else {
	
	$('.CategoryDescription').addClass("hide"); 
}


// ==========================================================================
// RESPONSIVE SCRIPTS - Crafted
// ==========================================================================


	// On page load and the screen is this size
	var width = $(window).width();
	$('#SearchForm').hide();
	if (width >= 1000) {
	    $('#SearchForm').appendTo('.searchDesktop').show();
	} else if (width <= 1000 ) {
	    //console.log("else if is executed");
	    $('#SearchForm').appendTo('.searchTablet').show();
	} else if (width <= 600) {
		$('#SearchForm').appendTo('.searchMobile').show();

	} else {
	    //console.log("Default else");
	}


// Blocks script from running on ie8 and lower
if (!$("html").hasClass("lt-ie9")) {
	

// when the window is resized do this
$(window).resize(function () {
	
	// wait for the scrolling to stop
	 setTimeout(function () {

			// add fixed height to vertically center the slider text
			var maxHslide = 0;
			var maxWslide = 0;
			$('.slide-content').each(function(f) {
				if ($(this).height() > maxHslide) { maxHslide = $(this).height() };
				if ($(this).width() > maxWslide) { maxWslide = $(this).width() };
			});
			$('.slideText').height(maxHslide).width(maxWslide);
			
			// Resets the product list images to center
			//$('.ProductList .ProductImage img').centerImage();
			
			

	  }, 1000)
	
});



// when the window is resized do this
$(window).resize(function () {
	var width = $(window).width();
	$('#SearchForm').hide();
	if (width >= 1000) {
	    $('#SearchForm').appendTo('.searchDesktop').show();
	} else if (width <= 1000 ) {
	    //console.log("else if is executed");
	    $('#SearchForm').appendTo('.searchTablet').show();
	} else if (width <= 600) {
		$('#SearchForm').appendTo('.searchMobile').show();
	} else {
	    //console.log("Default else");
	}
});



}
// END non-ie

// ==========================================================================
// CROSS BROWSER FIXES - Crafted
// ==========================================================================

//Less then IE9 code
if ($("html").hasClass("lt-ie9")) {

	
	
	/*! http://mths.be/placeholder v2.0.8 by @mathias */
	;(function(window, document, $) {

		// Opera Mini v7 doesn’t support placeholder although its DOM seems to indicate so
		var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
		var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
		var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
		var prototype = $.fn;
		var valHooks = $.valHooks;
		var propHooks = $.propHooks;
		var hooks;
		var placeholder;

		if (isInputSupported && isTextareaSupported) {

			placeholder = prototype.placeholder = function() {
				return this;
			};

			placeholder.input = placeholder.textarea = true;

		} else {

			placeholder = prototype.placeholder = function() {
				var $this = this;
				$this
					.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
					.not('.placeholder')
					.bind({
						'focus.placeholder': clearPlaceholder,
						'blur.placeholder': setPlaceholder
					})
					.data('placeholder-enabled', true)
					.trigger('blur.placeholder');
				return $this;
			};

			placeholder.input = isInputSupported;
			placeholder.textarea = isTextareaSupported;

			hooks = {
				'get': function(element) {
					var $element = $(element);

					var $passwordInput = $element.data('placeholder-password');
					if ($passwordInput) {
						return $passwordInput[0].value;
					}

					return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
				},
				'set': function(element, value) {
					var $element = $(element);

					var $passwordInput = $element.data('placeholder-password');
					if ($passwordInput) {
						return $passwordInput[0].value = value;
					}

					if (!$element.data('placeholder-enabled')) {
						return element.value = value;
					}
					if (value == '') {
						element.value = value;
						// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
						if (element != safeActiveElement()) {
							// We can't use `triggerHandler` here because of dummy text/password inputs :(
							setPlaceholder.call(element);
						}
					} else if ($element.hasClass('placeholder')) {
						clearPlaceholder.call(element, true, value) || (element.value = value);
					} else {
						element.value = value;
					}
					// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
					return $element;
				}
			};

			if (!isInputSupported) {
				valHooks.input = hooks;
				propHooks.value = hooks;
			}
			if (!isTextareaSupported) {
				valHooks.textarea = hooks;
				propHooks.value = hooks;
			}

			$(function() {
				// Look for forms
				$(document).delegate('form', 'submit.placeholder', function() {
					// Clear the placeholder values so they don't get submitted
					var $inputs = $('.placeholder', this).each(clearPlaceholder);
					setTimeout(function() {
						$inputs.each(setPlaceholder);
					}, 10);
				});
			});

			// Clear placeholder values upon page reload
			$(window).bind('beforeunload.placeholder', function() {
				$('.placeholder').each(function() {
					this.value = '';
				});
			});

		}

		function args(elem) {
			// Return an object of element attributes
			var newAttrs = {};
			var rinlinejQuery = /^jQuery\d+$/;
			$.each(elem.attributes, function(i, attr) {
				if (attr.specified && !rinlinejQuery.test(attr.name)) {
					newAttrs[attr.name] = attr.value;
				}
			});
			return newAttrs;
		}

		function clearPlaceholder(event, value) {
			var input = this;
			var $input = $(input);
			if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
				if ($input.data('placeholder-password')) {
					$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
					// If `clearPlaceholder` was called from `$.valHooks.input.set`
					if (event === true) {
						return $input[0].value = value;
					}
					$input.focus();
				} else {
					input.value = '';
					$input.removeClass('placeholder');
					input == safeActiveElement() && input.select();
				}
			}
		}

		function setPlaceholder() {
			var $replacement;
			var input = this;
			var $input = $(input);
			var id = this.id;
			if (input.value == '') {
				if (input.type == 'password') {
					if (!$input.data('placeholder-textinput')) {
						try {
							$replacement = $input.clone().attr({ 'type': 'text' });
						} catch(e) {
							$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
						}
						$replacement
							.removeAttr('name')
							.data({
								'placeholder-password': $input,
								'placeholder-id': id
							})
							.bind('focus.placeholder', clearPlaceholder);
						$input
							.data({
								'placeholder-textinput': $replacement,
								'placeholder-id': id
							})
							.before($replacement);
					}
					$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
					// Note: `$input[0] != input` now!
				}
				$input.addClass('placeholder');
				$input[0].value = $input.attr('placeholder');
			} else {
				$input.removeClass('placeholder');
			}
		}

		function safeActiveElement() {
			// Avoid IE9 `document.activeElement` of death
			// https://github.com/mathiasbynens/jquery-placeholder/pull/99
			try {
				return document.activeElement;
			} catch (exception) {}
		}

	}(this, document, jQuery));
	//runs placeholder plugin
	$('input, textarea').placeholder();
	
	
	// This lets IE8 redraw all :before and :after pseudo elements
	// http://stackoverflow.com/questions/9809351/ie8-css-font-face-fonts-only-working-for-before-content-on-over-and-sometimes
	var head = document.getElementsByTagName('head')[0],
	    style = document.createElement('style');
	style.type = 'text/css';
	style.styleSheet.cssText = ':before,:after{content:none !important';
	head.appendChild(style);
	setTimeout(function(){
	    head.removeChild(style);
	}, 0);
	
	
	// IE8 needs nth-child support
	$( ".productlist-page .ProductList li:nth-child(3n), .brands .ProductList li:nth-child(3n)" ).css( "margin-right", "0" );
	
	
}
// END Less then IE10 code


// Since I am using a lot of jQuery to build the page I set the .main hidden until the scripts get a chance to fire. 
// When everything is ready I reveal the content
// http://monc.se/kitchen/152/avoiding-flickering-in-jquery
$('.page').css('visibility','visible');

	
});
// END DOCUMENT READY
