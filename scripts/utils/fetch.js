define(['jquery'], function($) {
    'use strict';

    // var apiUrl = 'http://technobuffalo.magnify.net/api/content/find?vq=&per_page=10&key=FN697D1RFGP2VQLR&format=json';

    // Test JSON
    var apiUrl = 'scripts/test/test.json';

    var fetch = function(callback) {
        var fetchUrl = apiUrl;
        $.ajax({
            type: "GET",
            url: fetchUrl,
            dataType: 'json',
            // dataType: 'jsonp',
            success: function(data) {
                if(callback !== undefined && typeof callback === 'function') {
                    return callback(data);
                }
            }
        });
    };

    return fetch;

});