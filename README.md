# repetitive.ajax

Standalone ajax() function as a UMD module from the repetitive.js library(which has yet to come).



## Installation

You can install this package from npm:
```bash
npm install repetitive.ajax
npm install --save repetitive.ajax
npm install --save-dev repetitive.ajax
```

Use in a browser:
```html
<script src="repetitive.ajax.js"></script>
<script src="repetitive.ajax.min.js"></script>
```

Or Node.js:
```javascript
const someName = require("repetitive.ajax");
```

## Documentation

Self-explanatory:
```javascript
ajax({
  type: "GET",   // default is "GET", lowercase allowed
  url: "../package.json",   // default is an empty string
  timeout: 6000,   // miliseconds until the ajax call expires, default is 0(doesn't expire)
  data: "something",    // data passed to XMLHttpRequest().send() method, default is null
  onTimeout: function(){ //something },    // function called after the call expires, default is null
  onError: function(){ //something },    // function called when there's an error, you can play around with it
  onSuccess: function (resp) { // function called when everything went OK, response object is passed as an argument
    console.log(resp);   // response object containing different properties
    console.log(resp.responseText);
    console.log(resp.responseURL);   // only if the browser supports it
    console.log(resp.responseXML);   // as above
    console.log(resp.response);   // as above
  }
});
```

Every property is optional but still - it doesn't make sense to just call nothing or use everything. Below is the simplest example of requesting a JSON file:

```javascript
ajax({
  url: "../package.json",
  onSuccess: function (resp) {
    console.log(resp.responseText);
  }
});
```
## Is there something wrong?

Please tell me! It's my first module, after all.

