/**
 * Member of blocks library 
 * @namespace 
 */
var bb = bb || {};

/**
 * Feature with DOM helpers
 * @namespace 
 * @member bb
 */
bb.dom = new bb.feature({

	/**
	 * Creates and returns a new debounced version of the passed function which will postpone its execution until after {wait} milliseconds have elapsed since the last time it was invoked. 
	 * @param {function}  - Executable function to postpone
	 * @param {number} wait - How much time to postpone execution for
	 * @param {boolean=} immediate - Execute immediately
	 * @return {function} - Returns a new debounced version of the passed function
	 * @member bb.dom
	 */
	debounce: function (func, wait, immediate) { 
		var timeout, self = this;
		return function () {
			var context = self, args = arguments;
			var later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) { func.apply(context, args); return null; }
			return timeout;
		};
	},


	/**
	 * Finds child element matching provided selector
	 * @param {string} selector - Selector has limitations based on the browser support.
	 * @param {boolean} all - Flag to find all matching element. Otherwise fist found element is returned.
	 * @return {element|array|undefined} - Found element or array of elements 
	 */
	find: function(selector, all) {
		if (!this.querySelector) {bb.warn('Find should be used in the context of a DOM element'); return;}
		return all && this.querySelectorAll(selector) || this.querySelector(selector);
	},

	/**
	 * Clear node
	 * @param {element=} element - Optional element to clear. Otherwise current execution context will be used.
	 */ 
	empty: function (element) {
		element = element || this;
		while (element.firstChild && element.firstChild.parentNode) { element.firstChild.parentNode.removeChild(element.firstChild); }
	},

	/**
	 * Fire an event
	 * @param {string} name - Event name to fire
	 * @param {object} params - Details to attach
	 * @return {object} - Returns created event
	 */ 
	fire: function(name, params) {
		var event = new CustomEvent(name, {detail: params});
		this.dispatchEvent(event);
		return event;
	}
});