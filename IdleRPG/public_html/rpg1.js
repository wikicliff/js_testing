// Not sure what module structure will be used later
// so just pick something for the moment.
;var IRPG = (function() {
    var turnNum = 0;

    function nextTurn() {
        turnNum += 1;
        // display turn here or in main display?
        // show processing is happening (busy...button text?)
        console.log("Turn is now: " + turnNum);
    }
    function initGame() {
        turnNum = 1;
        $("#turnbutton").click(function(event) {
            nextTurn();
        });
    }
    
    return {
        initGame: initGame
    };
})();
