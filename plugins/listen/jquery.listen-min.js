/**
 * jQuery.Listen - Light and fast event handling, using event delegation.
 * Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 2/22/2008
 * @author Ariel Flesler
 * @version 1.0.2
 *
 * http://flesler.blogspot.com/2007/10/jquerylisten.html
 */
;(function($){$.fn.indexer=function(a){return this[0]&&k(this[0],a)||null};$.indexer=function(a){return k(document,a)};var g=$.event,h=g.special,j=$.listen=function(c,d,e,f){if(typeof d!='object'){f=e;e=d;d=document}n(c.split(/\s+/),function(a){a=j.fixes[a]||a;var b=k(d,a)||k(d,a,new m(a,d));b.append(e,f);b.start()})},k=function(a,b,c){return $.data(a,b+'.indexer',c)};j.regex=/^((?:\w*?|\*))(?:([#.])([\w-]+))?$/;j.fixes={focus:'focusin',blur:'focusout'};$.each(j.fixes,function(a,b){h[b]={setup:function(){if($.browser.msie)return!1;this.addEventListener(a,h[b].handler,!0)},teardown:function(){if($.browser.msie)return!1;this.removeEventListener(a,h[b].handler,!0)},handler:function(e){arguments[0]=e=g.fix(e);e.type=b;return g.handle.apply(this,arguments)}}});$.fn.listen=function(a,b,c){return this.each(function(){j(a,this,b,c)})};function m(a,b){$.extend(this,{ids:{},tags:{},listener:b,event:a});m.instances.push(this)};m.instances=[];m.prototype={constructor:m,handle:function(e){var a=e.stopPropagation;e.stopPropagation=function(){e.stopped=1;a.apply(this,arguments)};k(this,e.type).parse(e)},on:0,bubbles:0,start:function(){if(!this.on){g.add(this.listener,this.event,this.handle);this.on=1}},stop:function(){if(this.on){g.remove(this.listener,this.event,this.handle);this.on=0}},parse:function(e){var c=e.data||e.target,d=[],f=arguments;if(c.id&&this.ids[c.id])o(d,this.ids[c.id]);n([c.nodeName,'*'],function(a){var b=this.tags[a];if(b)n((c.className+' *').split(' '),function(a){if(a&&b[a])o(d,b[a])})},this);if(d[0])n(d,function(a){if(a.apply(c,f)===!1){e.preventDefault();e.stopPropagation()}});if(!e.stopped&&(c=c.parentNode)&&(c.nodeName=='A'||this.bubbles&&c!=this.listener)){e.data=c;this.parse(e)}},append:function(a,b){var c=j.regex.exec(a);if(!c)throw'$.listen > "'+a+'" is not a supported selector.';var d=c[2]=='#'&&c[3],e=c[1].toUpperCase()||'*',f=c[3]||'*';if(d)(this.ids[d]||(this.ids[d]=[])).push(b);else if(e){e=this.tags[e]=this.tags[e]||{};(e[f]||(e[f]=[])).push(b)}}};function n(a,b,c){for(var i=0,l=a.length;i<l;i++)b.call(c,a[i],i)};function o(a,b){a.push.apply(a,b);return a};$(window).unload(function(){if(typeof m=='function')n(m.instances,function(a){a.stop();$.removeData(a.listener,a.event+'.indexer');a.names=a.listener=0})})})(jQuery);