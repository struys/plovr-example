goog.require('namespace.bar');

goog.provide('namespace.foo');

/**
 * @returns {string}
 */
namespace.foo = function() {
	return namespace.bar();
};

goog.exportSymbol('namespace.foo', namespace.foo);
