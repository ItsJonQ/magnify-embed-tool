(function($, undefined) {
    'use strict';

    // Defining initStatus
    var initStatus = false;

    // Defining the Api Url
    var apiUrl = 'http://technobuffalo.magnify.net/api/content/find?vq=&per_page=50&key=FN697D1RFGP2VQLR&format=json';

    // Defining the Entry List
    var entryCollection = [];

    var listView = document.getElementById('video-list');

//////////////////
//  Models
//////////////////
    var Entry = function(data) {
        this.data = data ? data : false;
    };

    // Render Method for the model
    Entry.prototype.render = function() {

        // Return false if the data is not defined
        if(!this.data) return false;

        var data = this.data;
        var template = this.template(data);

        this.el = template;

        console.log(data);

        return template;

    };

    Entry.prototype.template = function(data) {
        var title = data.title.content;
        var thumbnail = data['media:thumbnail'].url;
        var link = data.link[1].href;
        return '<li class="list-group-item clearfix"><img src="'+thumbnail+'" class="img-thumbnail mini pull-left"><h5 class="video-list-title"><strong>'+title+'</strong></h5><div class="action-wrap"><a class="btn btn-default btn-xs action-main" href="#">Get Embed Code</a> <a href="'+link+'" target="_blank" class="btn btn-link btn-xs">View Video</a></div></li>';
    };


    var Embedder = function(model) {
        this.model = model ? model : false;
    };

    Embedder.prototype.render = function() {
        if(!this.model) return false;
        return this.template;
    };

    Embedder.prototype.template = function() {
        return '<textarea>dsadsadsadsadas</textarea>';
    };


//////////////////
//  Methods
//////////////////

    // Fn: Fetching from the API
    var fetch = function(url, callback) {
        var fetchUrl = url ? url : apiUrl;
        $.ajax({
            type: "GET",
            url: fetchUrl,
            dataType: 'jsonp',
            success: function(data) {
                if(callback !== undefined && typeof callback === 'function') {
                    return callback(data);
                }
            }
        });
    };

    // Fn: Fetching from Magnify and adding entries
    var addEntries = function(url, callback) {
        fetch(url, function(data) {
            var entries = data.entry;
            var listViewTemplate = '';

            // Looping through the entries
            for(var i = 0, len = entries.length; i < len; i++) {

                // Creating the new entry model
                var entry = new Entry(entries[i]);

                // Rendering the model + adding it into the view template
                listViewTemplate += entry.render();

                // Adding the entry model to the collection
                entryCollection.push(entry);

            }

            if(callback !== undefined && typeof callback === 'function') {
                return callback(listViewTemplate);
            }

        });
    };

    // Fn: Generating and adding the embed code
    var addEmbed = function() {
    };


    // Fn: Init the App
    var init = function() {
        if(initStatus) return false;
        initStatus = true;
        addEntries(false, function(template) {
            listView.innerHTML = template;
        });
    };

    // Exproting the Api to the global window
    window.MagnifyApi = {
        api: apiUrl,
        init: init,
        collection: entryCollection
    };

})(jQuery);

window.MagnifyApi.init();