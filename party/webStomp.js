/**
 * Created by Administrator on 2019/12/7.
 * WebSTOMP提供STOMP协议的实现
 * NodeJS核心模块不包含WebSocket协议，更别所STOMP协议的实现
 */
const WebSocket = require('ws');
const webSocket = new WebSocket('ws://192.168.0.126:8080/ep');
webSocket.onopen = function (event) {
    console.log("~~onopen~~");
    console.log(event);

    console.log("binaryType is " + webSocket.binaryType);
    console.log("bufferedAmount is " + webSocket.bufferedAmount);
    console.log("extensions is " + webSocket.extensions);
    console.log("protocol is " + webSocket.protocol);
    console.log("readyState is " + webSocket.readyState);
    console.log("url is " + webSocket.url);

};
webSocket.onclose = function (closeEvent) {
    console.log("~~onclose~~");
    console.log(closeEvent);

    console.log("code is " + closeEvent.code);
    console.log("reason is " + closeEvent.reason);
    console.log("wasClean is " + closeEvent.wasClean);
};
webSocket.onerror = function (event) {
    console.log("~~onerror~~");
    console.log(event);

};
webSocket.onmessage = function (messageEvent) {
    console.log("~~onmessage~~");
    console.log(messageEvent);

    console.log("data is " + messageEvent.data);
    console.log("origin is " + messageEvent.origin);
    console.log("lastEventId is " + messageEvent.lastEventId);
    console.log("source is " + messageEvent.source);
    console.log("ports is " + messageEvent.ports);
};


var Webstomp = require('webstomp-client');
let client = Webstomp.over(webSocket);
var subscription;
client.connect({}, function (frame) {
    console.log("~~connect~~");
    // console.log(frame);
    subscription = client.subscribe("/topic/something", (message) => {
        console.log("~~subscribe~~");
        console.log(message);
    }, {});
});


client.onreceive = function (frame) {
    console.log("~~onreceive~~");
    console.log(frame);
};


var number = setInterval(() => {
    console.log("subscription is " + subscription.id);

    client.send("/app/appSendOne", body = 'ccc', {});
    // client.send("/app/something", body = 'cccccccc', headers = {});
    // client.send("/app/something", body = 'cccccccc', headers = {});


}, 3000);


setTimeout(() => {
    clearInterval(number);

    subscription.unsubscribe();
    client.disconnect(() => {
        console.log("the client has closed!");
    }, {})

}, 8000);