# Building Blocks DOM  
<img align="right" alt="Composition" src="https://github.com/bBlocks/component/blob/master/blocks.png?raw=true" width="200"/>
Shortcuts methods to help with building components and manipulate DOM.

You can add this feature to your components or enhance exiting native DOM elements.

Inspired by jQuery and underscore libraries.
## Quick start

* Install

```
npm install @bblocks/dom
```

* Basic usage.
```HTML
<!DOCTYPE html>
<html>

<head>
	<title>DOM helpers</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="node_modules/@bblocks/component/component.polyfills.min.js"></script>
	<script src="node_modules/@bblocks/component/component.js"></script>
	<script src="node_modules/@bblocks/dom/dom.js"></script>
</head>
<body>
	<h1>Empty, set HTML</h1>
	<my-custom-div>My custom div</my-custom-div>
	<div>My native div</div>
	<p><button id="clear">Clear both</button> <button id="fill">Fill</button></p>
	<script>
		
		// Define my-custom-div component
		bb.component(bb.dom, {
			is: 'my-custom-div',
			on: {
				attach: function() {
					this.innerHTML += '. Hello!';
				}
			}
		});

		var div = document.querySelector('div');
		var customDiv = document.querySelector('my-custom-div');
		Object.assign(div, bb.dom); // enhance div element

		// Handle Clear
		document.querySelector('#clear').addEventListener('click', function() {
			customDiv.empty();
			div.empty();
		});
		
		// Handle Fill
		document.querySelector('#fill').addEventListener('click', function() {
			div.html('My native div');
			customDiv.html('My custom div');
		});

	</script>
</body>

</html>
```


## Demo
* [Demo page](https://bblocks.github.io/dom/)
* JSFiddle [example](https://jsfiddle.net/webrealizer/h5mL9h8v/) 

## Documentation
* [API](https://bblocks.github.io/dom/api/bb.html)