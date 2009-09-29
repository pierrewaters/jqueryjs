module("offset");

testoffset("absolute", function( jQuery ) {
	// get offset tests
	var tests = [
		{ id: '#absolute-1',     top:  1, left:  1 }, 
		{ id: '#absolute-1-1',   top:  5, left:  5 },
		{ id: '#absolute-1-1-1', top:  9, left:  9 },
		{ id: '#absolute-2',     top: 20, left: 20 }
	];
	jQuery.each( tests, function() {
		equals( jQuery( this.id ).offset().top,  this.top,  "jQuery('" + this.id + "').offset().top" );
		equals( jQuery( this.id ).offset().left, this.left, "jQuery('" + this.id + "').offset().left" );
	});
	
	
	// get position
	tests = [
		{ id: '#absolute-1',     top:  0, left:  0 },
		{ id: '#absolute-1-1',   top:  1, left:  1 },
		{ id: '#absolute-1-1-1', top:  1, left:  1 },
		{ id: '#absolute-2',     top: 19, left: 19 }
	];
	jQuery.each( tests, function() {
		equals( jQuery( this.id ).position().top,  this.top,  "jQuery('" + this.id + "').position().top" );
		equals( jQuery( this.id ).position().left, this.left, "jQuery('" + this.id + "').position().left" );
	});
	
	
	// set offset
	tests = [
		{ id: '#absolute-2',     top: 30, left: 30 },
		{ id: '#absolute-2',     top: 10, left: 10 },
		{ id: '#absolute-2',     top: -1, left: -1 },
		{ id: '#absolute-2',     top: 19, left: 19 },
		{ id: '#absolute-1-1-1', top: 15, left: 15 },
		{ id: '#absolute-1-1-1', top:  5, left:  5 },
		{ id: '#absolute-1-1-1', top: -1, left: -1 },
		{ id: '#absolute-1-1-1', top:  9, left:  9 },
		{ id: '#absolute-1-1',   top: 10, left: 10 },
		{ id: '#absolute-1-1',   top:  0, left:  0 },
		{ id: '#absolute-1-1',   top: -1, left: -1 },
		{ id: '#absolute-1-1',   top:  5, left:  5 },
		{ id: '#absolute-1',     top:  2, left:  2 },
		{ id: '#absolute-1',     top:  0, left:  0 },
		{ id: '#absolute-1',     top: -1, left: -1 },
		{ id: '#absolute-1',     top:  1, left:  1 }
	];
	jQuery.each( tests, function() {
		jQuery( this.id ).offset({ top: this.top, left: this.left });
		equals( jQuery( this.id ).offset().top,  this.top,  "jQuery('" + this.id + "').offset({ top: "  + this.top  + " })" );
		equals( jQuery( this.id ).offset().left, this.left, "jQuery('" + this.id + "').offset({ left: " + this.left + " })" );
		
		jQuery( this.id ).offset({ top: this.top, left: this.left, using: function( props ) {
			jQuery( this ).css({
				top:  props.top  + 1,
				left: props.left + 1
			});
		}});
		equals( jQuery( this.id ).offset().top,  this.top  + 1, "jQuery('" + this.id + "').offset({ top: "  + (this.top  + 1) + ", using: fn })" );
		equals( jQuery( this.id ).offset().left, this.left + 1, "jQuery('" + this.id + "').offset({ left: " + (this.left + 1) + ", using: fn })" );
	});
});

testoffset("relative", function( jQuery ) {
	// IE is collapsing the top margin of 1px
	var ie = jQuery.browser.msie && parseInt( jQuery.browser.version ) < 8;
	
	// get offset
	var tests = [
		{ id: '#relative-1',   top: ie ?   6 :   7, left:  7 },
		{ id: '#relative-1-1', top: ie ?  13 :  15, left: 15 },
		{ id: '#relative-2',   top: ie ? 141 : 142, left: 27 }
	];
	jQuery.each( tests, function() {
		equals( jQuery( this.id ).offset().top,  this.top,  "jQuery('" + this.id + "').offset().top" );
		equals( jQuery( this.id ).offset().left, this.left, "jQuery('" + this.id + "').offset().left" );
	});
	
	
	// get position
	tests = [
		{ id: '#relative-1',   top: ie ?   5 :   6, left:  6 },
		{ id: '#relative-1-1', top: ie ?   4 :   5, left:  5 },
		{ id: '#relative-2',   top: ie ? 140 : 141, left: 26 }
	];
	jQuery.each( tests, function() {
		equals( jQuery( this.id ).position().top,  this.top,  "jQuery('" + this.id + "').position().top" );
		equals( jQuery( this.id ).position().left, this.left, "jQuery('" + this.id + "').position().left" );
	});
	
	
	// set offset
	tests = [
		{ id: '#relative-2',   top: 200, left:  50 },
		{ id: '#relative-2',   top: 100, left:  10 },
		{ id: '#relative-2',   top:  -5, left:  -5 },
		{ id: '#relative-2',   top: 142, left:  27 },
		{ id: '#relative-1-1', top: 100, left: 100 },
		{ id: '#relative-1-1', top:   5, left:   5 },
		{ id: '#relative-1-1', top:  -1, left:  -1 },
		{ id: '#relative-1-1', top:  15, left:  15 },
		{ id: '#relative-1',   top: 100, left: 100 },
		{ id: '#relative-1',   top:   0, left:   0 },
		{ id: '#relative-1',   top:  -1, left:  -1 },
		{ id: '#relative-1',   top:   7, left:   7 }
	];
	jQuery.each( tests, function() {
		jQuery( this.id ).offset({ top: this.top, left: this.left });
		equals( jQuery( this.id ).offset().top,  this.top,  "jQuery('" + this.id + "').offset({ top: "  + this.top  + " })" );
		equals( jQuery( this.id ).offset().left, this.left, "jQuery('" + this.id + "').offset({ left: " + this.left + " })" );
		
		jQuery( this.id ).offset({ top: this.top, left: this.left, using: function( props ) {
			jQuery( this ).css({
				top:  props.top  + 1,
				left: props.left + 1
			});
		}});
		equals( jQuery( this.id ).offset().top,  this.top  + 1, "jQuery('" + this.id + "').offset({ top: "  + (this.top  + 1) + ", using: fn })" );
		equals( jQuery( this.id ).offset().left, this.left + 1, "jQuery('" + this.id + "').offset({ left: " + (this.left + 1) + ", using: fn })" );
	});
});

testoffset("static", function( jQuery ) {
	// IE is collapsing the top margin of 1px
	var ie = jQuery.browser.msie && parseInt( jQuery.browser.version ) < 8;
	
	// get offset
	var tests = [
		{ id: '#static-1',     top: ie ?   6 :   7, left:  7 },
		{ id: '#static-1-1',   top: ie ?  13 :  15, left: 15 },
		{ id: '#static-1-1-1', top: ie ?  20 :  23, left: 23 },
		{ id: '#static-2',     top: ie ? 121 : 122, left:  7 }
	];
	jQuery.each( tests, function() {
		equals( jQuery( this.id ).offset().top,  this.top,  "jQuery('" + this.id + "').offset().top" );
		equals( jQuery( this.id ).offset().left, this.left, "jQuery('" + this.id + "').offset().left" );
	});
	
	
	// get position
	tests = [
		{ id: '#static-1',     top: ie ?   5 :   6, left:  6 },
		{ id: '#static-1-1',   top: ie ?  12 :  14, left: 14 },
		{ id: '#static-1-1-1', top: ie ?  19 :  22, left: 22 },
		{ id: '#static-2',     top: ie ? 120 : 121, left:  6 }
	];
	jQuery.each( tests, function() {
		equals( jQuery( this.id ).position().top,  this.top,  "jQuery('" + this.top  + "').position().top" );
		equals( jQuery( this.id ).position().left, this.left, "jQuery('" + this.left +"').position().left" );
	});
	
	
	// set offset
	tests = [
		{ id: '#static-2',     top: 200, left: 200 },
		{ id: '#static-2',     top: 100, left: 100 },
		{ id: '#static-2',     top:  -2, left:  -2 },
		{ id: '#static-2',     top: 121, left:   6 },
		{ id: '#static-1-1-1', top:  50, left:  50 },
		{ id: '#static-1-1-1', top:  10, left:  10 },
		{ id: '#static-1-1-1', top:  -1, left:  -1 },
		{ id: '#static-1-1-1', top:  22, left:  22 },
		{ id: '#static-1-1',   top:  25, left:  25 },
		{ id: '#static-1-1',   top:  10, left:  10 },
		{ id: '#static-1-1',   top:  -3, left:  -3 },
		{ id: '#static-1-1',   top:  14, left:  14 },
		{ id: '#static-1',     top:  30, left:  30 },
		{ id: '#static-1',     top:   2, left:   2 },
		{ id: '#static-1',     top:  -2, left:  -2 },
		{ id: '#static-1',     top:   7, left:   7 }
	];
	jQuery.each( tests, function() {
		jQuery( this.id ).offset({ top: this.top, left: this.left });
		equals( jQuery( this.id ).offset().top,  this.top,  "jQuery('" + this.id + "').offset({ top: "  + this.top  + " })" );
		equals( jQuery( this.id ).offset().left, this.left, "jQuery('" + this.id + "').offset({ left: " + this.left + " })" );
		
		jQuery( this.id ).offset({ top: this.top, left: this.left, using: function( props ) {
			jQuery( this ).css({
				top:  props.top  + 1,
				left: props.left + 1
			});
		}});
		equals( jQuery( this.id ).offset().top,  this.top  + 1, "jQuery('" + this.id + "').offset({ top: "  + (this.top  + 1) + ", using: fn })" );
		equals( jQuery( this.id ).offset().left, this.left + 1, "jQuery('" + this.id + "').offset({ left: " + (this.left + 1) + ", using: fn })" );
	});
});

testoffset("fixed", function( jQuery ) {
	jQuery.offset.initialize();
	
	var tests = [
		{ id: '#fixed-1', top: 1001, left: 1001 },
		{ id: '#fixed-2', top: 1021, left: 1021 }
	];
	jQuery.each( tests, function() {
		if ( jQuery.offset.supportsFixedPosition ) {
			equals( jQuery( this.id ).offset().top,  this.top,  "jQuery('" + this.id + "').offset().top" );
			equals( jQuery( this.id ).offset().left, this.left, "jQuery('" + this.id + "').offset().left" );
		} else {
			// need to have same number of assertions
			ok( true, 'Fixed position is not supported' );
			ok( true, 'Fixed position is not supported' );
		}
	});
	
	tests = [
		{ id: '#fixed-1', top: 100, left: 100 },
		{ id: '#fixed-1', top:   0, left:   0 },
		{ id: '#fixed-1', top:  -4, left:  -4 },
		{ id: '#fixed-2', top: 200, left: 200 },
		{ id: '#fixed-2', top:   0, left:   0 },
		{ id: '#fixed-2', top:  -5, left:  -5 }
	];
	
	jQuery.each( tests, function() {
		if ( jQuery.offset.supportsFixedPosition ) {
			jQuery( this.id ).offset({ top: this.top, left: this.left });
			equals( jQuery( this.id ).offset().top,  this.top,  "jQuery('" + this.id + "').offset({ top: "  + this.top  + " })" );
			equals( jQuery( this.id ).offset().left, this.left, "jQuery('" + this.id + "').offset({ left: " + this.left + " })" );
		
			jQuery( this.id ).offset({ top: this.top, left: this.left, using: function( props ) {
				jQuery( this ).css({
					top:  props.top  + 1,
					left: props.left + 1
				});
			}});
			equals( jQuery( this.id ).offset().top,  this.top  + 1, "jQuery('" + this.id + "').offset({ top: "  + (this.top  + 1) + ", using: fn })" );
			equals( jQuery( this.id ).offset().left, this.left + 1, "jQuery('" + this.id + "').offset({ left: " + (this.left + 1) + ", using: fn })" );
		} else {
			// need to have same number of assertions
			ok( true, 'Fixed position is not supported' );
			ok( true, 'Fixed position is not supported' );
			ok( true, 'Fixed position is not supported' );
			ok( true, 'Fixed position is not supported' );
		}
	});
});

testoffset("table", function( jQuery ) {
	var ie = jQuery.browser.msie;
	
	equals( jQuery('#table-1').offset().top, 6, "jQuery('#table-1').offset().top" );
	equals( jQuery('#table-1').offset().left, 6, "jQuery('#table-1').offset().left" );
	
	equals( jQuery('#th-1').offset().top, 10, "jQuery('#th-1').offset().top" );
	equals( jQuery('#th-1').offset().left, 10, "jQuery('#th-1').offset().left" );
	
	// equals( jQuery('#th-2').offset().top, 10, "jQuery('#th-2').offset().top" );
	// equals( jQuery('#th-2').offset().left, 116, "jQuery('#th-2').offset().left" );
	// 
	// equals( jQuery('#th-3').offset().top, 10, "jQuery('#th-3').offset().top" );
	// equals( jQuery('#th-3').offset().left, 222, "jQuery('#th-3').offset().left" );
	
	// equals( jQuery('#td-1').offset().top, ie ? 116 : 112, "jQuery('#td-1').offset().top" );
	// equals( jQuery('#td-1').offset().left, 10, "jQuery('#td-1').offset().left" );
	// 
	// equals( jQuery('#td-2').offset().top, ie ? 116 : 112, "jQuery('#td-2').offset().top" );
	// equals( jQuery('#td-2').offset().left, 116, "jQuery('#td-2').offset().left" );
	// 
	// equals( jQuery('#td-3').offset().top, ie ? 116 : 112, "jQuery('#td-3').offset().top" );
	// equals( jQuery('#td-3').offset().left, 222, "jQuery('#td-3').offset().left" );
});

testoffset("scroll", function( jQuery, win ) {
	var ie = jQuery.browser.msie && parseInt( jQuery.browser.version ) < 8;
	
	// IE is collapsing the top margin of 1px
	equals( jQuery('#scroll-1').offset().top, ie ? 6 : 7, "jQuery('#scroll-1').offset().top" );
	equals( jQuery('#scroll-1').offset().left, 7, "jQuery('#scroll-1').offset().left" );
	
	// IE is collapsing the top margin of 1px
	equals( jQuery('#scroll-1-1').offset().top, ie ? 9 : 11, "jQuery('#scroll-1-1').offset().top" );
	equals( jQuery('#scroll-1-1').offset().left, 11, "jQuery('#scroll-1-1').offset().left" );
	
	
	// scroll offset tests .scrollTop/Left
	equals( jQuery('#scroll-1').scrollTop(), 5, "jQuery('#scroll-1').scrollTop()" );
	equals( jQuery('#scroll-1').scrollLeft(), 5, "jQuery('#scroll-1').scrollLeft()" );
	
	equals( jQuery('#scroll-1-1').scrollTop(), 0, "jQuery('#scroll-1-1').scrollTop()" );
	equals( jQuery('#scroll-1-1').scrollLeft(), 0, "jQuery('#scroll-1-1').scrollLeft()" );
	
	// equals( jQuery('body').scrollTop(), 0, "jQuery('body').scrollTop()" );
	// equals( jQuery('body').scrollLeft(), 0, "jQuery('body').scrollTop()" );
	
	win.name = "test";
	
	equals( jQuery(win).scrollTop(), 1000, "jQuery(window).scrollTop()" );
	equals( jQuery(win).scrollLeft(), 1000, "jQuery(window).scrollLeft()" );
	
	equals( jQuery(win.document).scrollTop(), 1000, "jQuery(document).scrollTop()" );
	equals( jQuery(win.document).scrollLeft(), 1000, "jQuery(document).scrollLeft()" );
});

testoffset("body", function( jQuery ) {
	equals( jQuery('body').offset().top, 1, "jQuery('#body').offset().top" );
	equals( jQuery('body').offset().left, 1, "jQuery('#body').offset().left" );
});

test("offsetParent", function(){
	expect(11);

	var body = jQuery("body").offsetParent();
	equals( body.length, 1, "Only one offsetParent found." );
	equals( body[0], document.body, "The body is its own offsetParent." );

	var header = jQuery("#qunit-header").offsetParent();
	equals( header.length, 1, "Only one offsetParent found." );
	equals( header[0], document.body, "The body is the offsetParent." );

	var div = jQuery("#nothiddendivchild").offsetParent();
	equals( div.length, 1, "Only one offsetParent found." );
	equals( div[0], document.body, "The body is the offsetParent." );

	jQuery("#nothiddendiv").css("position", "relative");

	div = jQuery("#nothiddendivchild").offsetParent();
	equals( div.length, 1, "Only one offsetParent found." );
	equals( div[0], jQuery("#nothiddendiv")[0], "The div is the offsetParent." );

	div = jQuery("body, #nothiddendivchild").offsetParent();
	equals( div.length, 2, "Two offsetParent found." );
	equals( div[0], document.body, "The body is the offsetParent." );
	equals( div[1], jQuery("#nothiddendiv")[0], "The div is the offsetParent." );
});

function testoffset(name, fn) {
	
	test(name, function() {
		// pause execution for now
		stop();
		
		// load fixture in iframe
		var iframe = loadFixture(),
			win = iframe.contentWindow,
			interval = setInterval( function() {
				if ( win && win.jQuery && win.jQuery.isReady ) {
					clearInterval( interval );
					// continue
					start();
					// call actual tests passing the correct jQuery isntance to use
					fn.call( this, win.jQuery, win );
					document.body.removeChild( iframe );
					iframe = null;
				}
			}, 15 );
	});
	
	function loadFixture() {
		var src = './data/offset/' + name + '.html?' + parseInt( Math.random()*1000 ),
			iframe = jQuery('<iframe />').css({
				width: 500, height: 500, position: 'absolute', top: -600, left: -600, visiblity: 'hidden'
			}).appendTo('body')[0];
		iframe.contentWindow.location = src;
		return iframe;
	}
}
