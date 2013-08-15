// quickLog.js
// Simple logging to a list
// Copied from earlier jsfiddle code.

// TODO cleanup...lots of cleanup.
;
var QuickLog = (function() {

    var items = undefined;
    var itemlist = undefined;

    function initQLog() {
        items = $('.items');  // FIXME new classes
        itemlist = $('.itemlist');

        itemlist.css('overflow', 'auto');
        itemlist.css('height', '480');
        itemlist.css('border', '3px solid green');
    }

    function qLog(logText) {
        items.append('<li>' + logText + '</li>');
        var lheight = items.height();
        itemlist.scrollTop(lheight - 50);
    }
    return {
        initQLog: initQLog,
        qLog: qLog
    };
})();
// helper func for easy debug.
function qLog(logText) {
    QuickLog.qLog(logText);
}
