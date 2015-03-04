var assert = require('chai').assert;
var library = require('../lib/library');

describe('library', function() {

	it('should echo input', function() {
		assert.strictEqual(library.echo('foo'), 'foo');
	});
});