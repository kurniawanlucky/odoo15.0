odoo.define("tree_image.tree_image", function(require) {
    "use strict";

    var ListRenderer = require("web.ListRenderer");
    ListRenderer.include({
        events: _.extend({}, ListRenderer.prototype.events, {
            "mouseover tbody tr td .o_field_image": "_onHoverRecord_img",
        }),
        _onHoverRecord_img: function(event) {
            var img_src = $(event.currentTarget)
                .children(".img-fluid")
                .attr("src");
            $(event.currentTarget)
                .tooltip({
                    title: "<img src=" + img_src + " class='tooltip_image' />",
                    delay: 0,
                })
                .tooltip("show");
        },
    });
});
