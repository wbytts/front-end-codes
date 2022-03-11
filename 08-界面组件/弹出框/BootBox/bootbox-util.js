(function(window, jQuery, bootbox) {

    if(!('bootbox' in window)) {
        console.error('还没有加载Bootbox');
    }

    BBOX = {};

    BBOX.commonMsg = function(msg) {
        bootbox.dialog({
            title: "提示",
            message: msg
        });
    };

    window.BBOX = BBOX;
})(window, jQuery, bootbox);


