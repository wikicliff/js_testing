// Not sure what module structure will be used later
// so just pick something for the moment.
;
var IRPG = (function() {
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

    function simpleTimeTest() {
        SimTime.initTime();
        SimTime.addEvent(14, "event at 14");
        SimTime.addEvent(25, "event at 25");
        SimTime.addEvent(3, "event at 3");
        SimTime.addEvent(17, "event at 17");
        SimTime.addEvent(17, "Second event at 17");
        SimTime.advanceTime(15); // 15 ms forward
        SimTime.advanceTime(23); // another 23 ms forward
    }
    
    return {
        initGame: initGame,
        testOne: simpleTimeTest
    };
})();
