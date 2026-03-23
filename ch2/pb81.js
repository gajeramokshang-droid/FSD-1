// Create an event emitter instance and register a couple of callbacks.

const eventhandler=require("events")
const ee=new eventhandler()

ee.on("jesus",()=>{
    console.log("Christ is my saviour")
});

ee.on("jesus",(name)=>{
    console.log(name)
})
ee.emit("jesus",'Mokshang')