# repetitive.ajax

Standalone ajax() function as a UMD module from the repetitive.js library. Sends an AJAX request.

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

## Documentation

### [Click here for full documentation page]( https://ol-web.github.io/repetitivejs/documentation.html#ajax)

Self-explanatory:
```javascript
	rptv.ajax({
      url: "../package.json",
      onSuccess: function (resp) {
        console.log(resp.responseText);
      }
    });
    
    rptv.ajax({
      type: "GET",
      url: "../package.json",
      timeout: 6000,
      onTimeout: function(){ 
          console.log("timeout");
        },
      onError: function(){ 
          throw new Error("ajax error");
        },
      onSuccess: function (resp) {
        console.log(resp);
        console.log(resp.responseText);
        console.log(resp.responseURL);
        console.log(resp.responseXML);
        console.log(resp.response);
      }
    });
```

Every property except url and onSuccess is optional. Below is the simplest example of requesting a JSON file:

```javascript
ajax({
  url: "../package.json",
  onSuccess: function (resp) {
    console.log(resp.responseText);
  }
});
```
## Is there something wrong?

Please tell me!