/*jQuery LockScroll v1.0.0
* https://github.com/okataku/jquery-lockscroll
* Copyright (c) 2015 Takuya Okada;
*/
jQuery(window).load(function() {
console.log('working!!');
	jQuery.fn.lockscroll = function(lock, direction) {
		var eventName = 'scroll.lockscroll';
		this.each(function(i, el) {
			var jQueryel = jQuery(this);
			var pos = { x: jQueryel.scrollLeft(), y: jQueryel.scrollTop() };

			if(lock) {
				jQueryel.off(eventName);
				jQueryel.on(eventName, function() {
					if (direction === 'horizontal') {
						jQueryel.scrollLeft(pos.x);
					} else if (direction === 'vertical') {
						jQueryel.scrollTop(pos.y);
					} else {
						jQueryel.scrollLeft(pos.x);
						jQueryel.scrollTop(pos.y);
					}
				});
			} else {
				jQueryel.off(eventName);
			}
		});

		return this;
	};
});
