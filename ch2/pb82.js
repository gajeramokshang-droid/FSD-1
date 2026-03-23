// Explain node js events with appropriate example with all event methods

const eventhandler=require("events")
const ee=new eventhandler()

function listner1(){
    console.log("Jesus Christ is The King og King and Lord our Saviour")
}

function listner2(){
    console.log("Christ")
}

ee.on("Joseph",listner1)
ee.on("Mary",listner2)

console.log("Count",ee.listenerCount("Joseph"))

ee.removeListener("Joseph",listner1)

console.log("Count",ee.listenerCount("Joseph"))


ee.removeListener("Mary",listner2)

console.log("Count",ee.listenerCount("Mary"))