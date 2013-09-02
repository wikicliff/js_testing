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

// later maybe have count of events, no need to check size (expensive?)
    function advanceTime(fwdMS) {
        var event;
        var eventTime;
        var eventCb;
        var eventData;

        if (simEvents.size() > 0) {
            event = simEvents.peek();
            eventTime = event[0];
//            console.log("SimTime: advance peek1 = " + eventTime);
            while ((eventTime <= (simNow + fwdMS)) && (simEvents.size() > 0)) {
                // later maybe update simNow and fwdMS at each step?
                // pop the data
                event = simEvents.pop();
                eventCb = event[1];
                eventData = event[2];
                eventCb(eventData);
                // peek at the next time (if exists)
                if (simEvents.size() > 0) {
                    event = simEvents.peek();
                    eventTime = event[0];
//                    console.log("SimTime: advance peek2 = " + eventTime);
                }
            }
            simNow += fwdMS;
            logNow();  // debug
        }
    }

    // for now, no optimization
    function addEvent(atTime, cb, data) {
        simEvents.push([atTime, cb, data]);
        console.log("SimTime events: ", simEvents);
    }

    return {
        initTime: initTime,
        advanceTime: advanceTime,
        addEvent: addEvent
    };
})();

