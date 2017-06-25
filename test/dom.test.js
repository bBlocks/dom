describe("bb.dom", function () {
	it('is a feature', function() {
		isFeature(expect, bb.dom);
	});
	it("debounce", function () {
		expect(typeof bb).toBe('object');
		expect(typeof bb.component).toBe('function');
		var MyElement = bb.component({extends: HTMLElement, is: 'my-element1'});
		isCustomElement(expect, 'my-element1', null, MyElement, HTMLElement);		
	});

	
});
