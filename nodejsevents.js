const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn of the motor');
  setTimeout(()=>{
    console.log("Please turn of the motor . It's a gentle reminder");
  },3000)
});
myEmitter.emit('WaterFull');
console.log("The event is running");
