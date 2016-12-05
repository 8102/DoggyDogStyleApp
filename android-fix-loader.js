/* Android Web View doesn't seem to support console.debug and console.warn.
 * React has a call to console.debug which crashes on Android.
 * This loader adds a polyfill for those two so the code doesn't crash. */
module.exports = function(source) {
	this.cacheable();
	return "console.debug = console.log;console.warn = console.log;"+source;
};
