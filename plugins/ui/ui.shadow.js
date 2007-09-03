(function($) {

	//If the UI scope is not available, add it
	$.ui = $.ui || {};
	
	$.fn.shadow = function(options) {
		
		options = options || {};
		options.offset = options.offset ? options.offset : 0;
		options.opacity = options.opacity ? options.opacity : 0.2;
		
		return this.each(function() {
			
			var cur = $(this);
			
			//Create a shadow element
			var shadow = $("<div class='ui-shadow'></div>"); cur.after(shadow);
			
			//Figure the base height and width
			var baseWidth = cur.outerWidth();
			var baseHeight = cur.outerHeight();
			
			//get the offset
			var position = cur.position();
			
			//Append smooth corners
			$('<div class="ui-shadow-color ui-shadow-layer-1"></div>').css({ opacity: options.opacity-0.05, left: 5+options.offset, top: 5+options.offset, width: baseWidth+1, height: baseHeight+1 }).appendTo(shadow);
			$('<div class="ui-shadow-color ui-shadow-layer-2"></div>').css({ opacity: options.opacity-0.1, left: 7+options.offset, top: 7+options.offset, width: baseWidth, height: baseHeight-3 }).appendTo(shadow);
			$('<div class="ui-shadow-color ui-shadow-layer-3"></div>').css({ opacity: options.opacity-0.1, left: 7+options.offset, top: 7+options.offset, width: baseWidth-3, height: baseHeight }).appendTo(shadow);
			$('<div class="ui-shadow-color ui-shadow-layer-4"></div>').css({ opacity: options.opacity, left: 6+options.offset, top: 6+options.offset, width: baseWidth-1, height: baseHeight-1 }).appendTo(shadow);
			
			//If we have a color, use it
			if(options.color)
				$("div.ui-shadow-color", shadow).css("background-color", options.color);
			
			//Determine the stack order (attention: the zIndex will get one higher!)
			if(!cur.css("zIndex") || cur.css("zIndex") == "auto") {
				var stack = 0;
				cur.css("position", (cur.css("position") == "static" ? "relative" : cur.css("position"))).css("z-index", "1");
			} else {
				var stack = parseInt(cur.css("zIndex"));
				cur.css("zIndex", stack+1);
			}
			
			//Copy the original z-index and position to the clone
			//alert(shadow); If you insert this alert, opera will time correctly!!
			shadow.css({
				position: "absolute",
				zIndex: stack,
				left: position.left,
				top: position.top,
				width: baseWidth,
				height: baseHeight,
				marginLeft: cur.css("marginLeft"),
				marginRight: cur.css("marginRight"),
				marginBottom: cur.css("marginBottom"),
				marginTop: cur.css("marginTop")
			});
			
			
			function rearrangeShadow(el,sh) {
				$(sh).css($(el).position());
			}
			
			if($.browser.msie) {
				//Add dynamic css expressions
				//TODO: Only possible with expando!
			} else {
				//Bind events for good browsers
				this.addEventListener("DOMAttrModified",function() { rearrangeShadow(this,shadow); },false);
			}

				
		});
	};
	

})($);