/**
 * Web STOMP
 * STOMP提供STOMP协议的实现
 * NodeJS核心模块不包含WebSocket协议，更别所STOMP协议的实现
 */

const Stomp = require('stompjs');

let client = Stomp.overWS(' ws://192.168.0.126:8080/ep');

var subscription;
client.connect({}, (frame) => {
    console.log("~~connect~~");
    console.log(frame);

    subscription = client.subscribe("/topic/something", (frame, f, g) => {
        console.log("~~subscribe~~");
        console.log(frame);
    });
});


var number = setInterval(() => {
        client.send("/topic/something", headers = {}, body = 'ccccc');
}, 3000);


setTimeout(() => {
    clearInterval(number);
    subscription.unsubscribe();
    client.disconnect(() => {
        console.log("the client has closed!");
    }, {});

}, 7000);


