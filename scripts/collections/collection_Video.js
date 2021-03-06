define([
    'backbone',
    'utils/fetch',
    'models/model_Video',
    'views/view_Video'
    ], function(Backbone, fetch, Model, View) {

    'use strict';

    var collection = Backbone.Collection.extend({

        $el: $('#video-list'),

        $embedModal: $('#embed-modal'),

        model: Model,

        initialize: function() {
            this.init();
        },

        init: function() {
            var self = this;

            fetch(function(data) {

                // Defining the entries
                var entries = data.entry;

                // Looping through the entries
                for(var i = 0, len = entries.length; i < len; i++) {

                    var entry = entries[i];

                    // Creating the new entry Video model

                    // Defining the thumbnails
                    var thumbnail = entry['media:thumbnail'].url;
                    var thumbnailLarge = thumbnail.slice(0, -4) + '-l.jpg';

                    var model = new Model({
                        collection: self,
                        data: {
                            link: entry.link[1].href,
                            thumbnail: {
                                large: thumbnailLarge,
                                url: thumbnail
                            },
                            title: entry.title.content,
                            query: entry
                        }
                    });

                    var entryView = new View({
                        collection: self,
                        model: model
                    });

                    // Adding the entry model to the collection
                    self.add(entry);

                }

            });
        }

    });

    return collection;

});