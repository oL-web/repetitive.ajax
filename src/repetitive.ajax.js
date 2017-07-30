function ajax(options){
  
    options = {
        type: options.type || "GET",
        url: options.url || "",
        timeout: options.timeout || 0,
        data: options.data || null,
        onSuccess: options.onSuccess || null,
        onTimeout: options.onTimeout || null,
        onError: options.onError || function (arg) {          
            throw new Error('onError event fired - there was a connection error of some sort.');
        }
    };

    const request = new XMLHttpRequest();
    request.open(options.type, options.url, true);

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status >= 200 && request.status < 400){
            const responseObj = {
                responseText: request.responseText
            };    
            
            if(request.response){
                responseObj.response = request.response;
            }
            if(request.responseXML){
                responseObj.responseXML = request.responseXML;
            }
            if(request.responseURL){
                responseObj.responseURL = request.responseURL;
            }
            
            options.onSuccess(responseObj);
        }
    };

    request.onerror = options.onError;
    request.ontimeout = options.onTimeout;

    if(String(options.type).toUpperCase() === "POST"){
       request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
       }
    
    request.send(options.data);
    
};

export default ajax;