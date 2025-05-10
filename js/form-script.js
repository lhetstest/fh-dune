window.cfields = [];
window._show_thank_you = function(id, message, trackcmp_url, email) {   
    
    // ... (rest of the function)
};
window._show_error = function(id, message, html) {
    // ... (rest of the function)
};
window._load_script = function(url, callback, isSubmit) {
    // ... (rest of the function)
};
(function() {
    var form = document.querySelector('form');
    var formId = form.getAttribute('id');
    var formAction = form.getAttribute('action');
    var formMethod = form.getAttribute('method');
    var formTarget = form.getAttribute('target');
    var formEnctype = form.getAttribute('enctype');
    var formAcceptCharset = form.getAttribute('accept-charset');
    var formData = new FormData(form);
    var formDataObj = {};
    var formDataArray = [];
    var formDataString = '';
    var formDataStringEncoded = '';
    var formDataStringEncodedObj = {};   
    // ... (rest of the IIFE)
})();
