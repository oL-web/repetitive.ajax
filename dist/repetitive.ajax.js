(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ajax = factory());
}(this, (function () { 'use strict';

function ajax(options) {

    options = {
        type: options.type || "GET",
        url: options.url || false,
        timeout: options.timeout || 0,
        data: options.data || null,
        onSuccess: options.onSuccess || false,
        onTimeout: options.onTimeout || null,
        onError: options.onError || null
    };

    if (!options.url) {
        throw new Error("repetitive.ajax error: There's no url property inside the options object!");
    } else if (!options.onSuccess) {
        throw new Error("repetitive.ajax error: There's no onSuccess method inside the options object!");
    }

    var request = new XMLHttpRequest();
    request.open(options.type, options.url, true);

    request.timeout = options.timeout;

    request.onerror = options.onError;
    request.ontimeout = options.onTimeout;

    if (String(options.type).toUpperCase() === "POST") {
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status >= 200 && request.status < 400) {
            var responseObj = {
                responseText: request.responseText
            };

            if (request.response) {
                responseObj.response = request.response;
            }
            if (request.responseXML) {
                responseObj.responseXML = request.responseXML;
            }
            if (request.responseURL) {
                responseObj.responseURL = request.responseURL;
            }

            options.onSuccess(responseObj);
        }
    };

    request.send(options.data);
}

return ajax;

})));
