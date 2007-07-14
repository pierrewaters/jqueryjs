(function($) {
	
	$.ui.plugin("droppable", "over", function() {
		if(this.options.hoverClass)
			$(this.element).addClass(this.options.hoverClass);
	});
	
	$.ui.plugin("droppable", "out", function() {
		if(this.options.hoverClass)
			$(this.element).removeClass(this.options.hoverClass);
	});
	
	$.ui.plugin("droppable", "drop", function() {
		if(this.options.hoverClass)
			$(this.element).removeClass(this.options.hoverClass);
	});

})(jQuery);
