// SimTime (Simulation Time) module
// Decouples simulation time from real (wall clock) time.
// Only partial implementation so far.
// Later separate class for interfacing with real-time loops (x:y rates).
//
// Requires BinaryHeap module to be loaded.
;
var SimTime = (function() {
    var simNow = 0;
    var simEpoch = 0;  // later MS of "start of time"
    var simEvents = [];

    function logNow() {
        console.log("SimTime: now = " + simNow);
    }

    function simEventScore(eventA) {    // for binary (priority) heap
        return eventA[0];
    }

    function initTime() {
        simNow = 0;
        simEvents = new BinaryHeap(simEventScore);
    }

    function advanceTime(fwdMS) {
        // Later do any events between current Now and new Now inclusive
        simNow += fwdMS;
        logNow();  // debug
    }

    // for now, no optimization
    function addEvent(atTime, data) {
        // very early debug: just add time to priority queue
        simEvents.push([atTime, data]);
        console.log("SimTime events: ", simEvents);
    }
    
    return {
        initTime: initTime,
        advanceTime: advanceTime,
        addEvent: addEvent
    };
})();

