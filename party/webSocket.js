/**
 * WebSocket服务端
 */
// const WebSocket = require('ws');
// const wss = new WebSocket.Server({port: 8111});
// wss.on('connection', function connection(ws) {
//
//     console.log('connection is ready!');
//
//
//     ws.on('message', function incoming(message) {
//         console.log('received: %s', message);
//     });
//
//     ws.send('something');
//     console.log('message has been sent!');
// });


/**
 * WebSocket客户端
 */
const WebSocket = require('ws');
// const webSocket = new WebSocket('ws://192.168.0.126:8080/wss');


//方式一：使用监听器
webSocket.addEventListener("open", function (event) {
    console.log("~~open~~");
    // console.log(event);

    console.log("binaryType is " + webSocket.binaryType);
    console.log("bufferedAmount is " + webSocket.bufferedAmount);
    console.log("extensions is " + webSocket.extensions);
    console.log("protocol is " + webSocket.protocol);
    console.log("readyState is " + webSocket.readyState);
    console.log("url is " + webSocket.url);

});
webSocket.addEventListener("message", function (messageEvent) {
    console.log("~~message~~");
    // console.log(messageEvent);

    console.log("data is " + messageEvent.data);
    console.log("origin is " + messageEvent.origin);
    console.log("lastEventId is " + messageEvent.lastEventId);
    console.log("source is " + messageEvent.source);
    console.log("ports is " + messageEvent.ports);
});
webSocket.addEventListener("close", function (closeEvent) {
    console.log("~~close~~");
    // console.log(closeEvent);

    console.log("code is " + closeEvent.code);
    console.log("reason is " + closeEvent.reason);
    console.log("wasClean is " + closeEvent.wasClean);
});
webSocket.addEventListener("error", function (event) {
    console.log("~~error~~");
    console.log(event);
});



// setTimeout(() => {
//     if (webSocket.readyState = WebSocket.OPEN)
//         webSocket.send("dd");
// }, 2000);

// setInterval(() => {
// if (webSocket.readyState = WebSocket.OPEN)
//     webSocket.send("dd");
// }, 1000);

//方式二：使用周期函数
// webSocket.onopen = function (event) {
//     console.log("~~onopen~~");
//     console.log(event);
//
//     console.log("binaryType is " + webSocket.binaryType);
//     console.log("bufferedAmount is " + webSocket.bufferedAmount);
//     console.log("extensions is " + webSocket.extensions);
//     console.log("protocol is " + webSocket.protocol);
//     console.log("readyState is " + webSocket.readyState);
//     console.log("url is " + webSocket.url);
//
// };
//
// webSocket.onclose = function (closeEvent) {
//     console.log("~~onclose~~");
//     console.log(closeEvent);
//
//     console.log("code is " + closeEvent.code);
//     console.log("reason is " + closeEvent.reason);
//     console.log("wasClean is " + closeEvent.wasClean);
// };
//
// webSocket.onerror = function (event) {
//     console.log("~~onerror~~");
//     console.log(event);
//
// };
//
//
// webSocket.onmessage = function (messageEvent) {
//     console.log("~~onmessage~~");
//     console.log(messageEvent);
//
//     console.log("data is " + messageEvent.data);
//     console.log("origin is " + messageEvent.origin);
//     console.log("lastEventId is " + messageEvent.lastEventId);
//     console.log("source is " + messageEvent.source);
//     console.log("ports is " + messageEvent.ports);
// };

