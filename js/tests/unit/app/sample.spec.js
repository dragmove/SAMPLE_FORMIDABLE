'use strict';
describe('TEST SUITE NAME', function() {
	// sample - http://jasmine.github.io/2.0/introduction.html
	var foo;

	beforeEach(function() {
		foo = 0;
		foo += 1;
	});

	afterEach(function() {
		foo = 0;
	});

	it('TEST DESCRIPTION', function() {
		expect(foo).toEqual(1);
	});
});