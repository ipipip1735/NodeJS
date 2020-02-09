/**
 * Web STOMP
 * STOMP提供STOMP协议的实现
 * NodeJS核心模块不包含WebSocket协议，更别所STOMP协议的实现
 */
// const Stomp = require('stompjs');
// let client = Stomp.overWS(' ws://192.168.0.126:8080/ep');
// var subscription;
// client.connect({}, (frame) => {
//     console.log("~~connect~~");
//     console.log(frame);
//
//     subscription = client.subscribe("/topic/something", (frame, f, g) => {
//         console.log("~~subscribe~~");
//         console.log(frame);
//     });
// });
// var number = setInterval(() => {
//         client.send("/topic/something", headers = {}, body = 'ccccc');
// }, 3000);
// setTimeout(() => {
//     clearInterval(number);
//     subscription.unsubscribe();
//     client.disconnect(() => {
//         console.log("the client has closed!");
//     }, {});
//
// }, 7000);


/**
 * 使用STOMP协议访问RabbitMQ
 */
const Stomp = require('stompjs');//导出stompjs模块
let client = Stomp.overTCP('localhost', 61613);//创建客户端
client.heartbeat.outgoing = 0;//设置心跳
client.heartbeat.incoming = 0;

let subscription;
host = "/";//设置虚拟主机
login = "guest";//设置用户名密码
passcode = "guest";
errorCallback = function (frame) {
    console.log("~~error~~");
    console.log(frame);
};
let connectCallback = function (frame) {
    console.log("~~connect~~");
    console.log(frame);

    //使用/exchange前缀
    // subscription = client.subscribe("/exchange/eone/rone", (frame) => {
    //     console.log("~~subscribe~~");
    //     console.log(frame);
    // });
    // var number = setInterval(() => {
    //     var quote = {symbol: 'APPL', value: 195.46};
    //     client.send("/exchange/eone/rone", {}, JSON.stringify(quote));
    // }, 1000);
    // setTimeout(() => {
    //     clearInterval(number);
    //     subscription.unsubscribe();
    //     client.disconnect(() => {
    //         console.log("the client has closed!");
    //     }, {});
    // }, 2500);

    //使用/queue前缀
    // subscription = client.subscribe("/queue/qone", (frame) => {
    //     console.log("~~subscribe~~");
    //     console.log(frame);
    // });
    // var number = setInterval(() => {
    //     var quote = {symbol: 'APPL', value: 195.46};
    //     client.send("/queue/qone", {}, JSON.stringify(quote));
    // }, 1000);
    // setTimeout(() => {
    //     clearInterval(number);
    //     subscription.unsubscribe();
    //     client.disconnect(() => {
    //         console.log("the client has closed!");
    //     }, {});
    // }, 2500);

    //使用/amq/queue前缀
    // subscription = client.subscribe("/amq/queue/qtwo", (frame) => {
    //     console.log("~~subscribe~~");
    //     console.log(frame);
    //     frame.ack();
    //     // frame.nack();
    // // });
    // }, {"ack": 'client-individual', "prefetch-count": 1});
    // var number = setInterval(() => {
    //     var quote = {symbol: 'APPL', value: 195.46};
    //     client.send("/amq/queue/qtwo", {}, JSON.stringify(quote));
    // }, 1000);



    //使用/topic前缀
    // subscription = client.subscribe("/topic/aa.*", (frame) => {
    //     console.log("~~subscribe~~");
    //     console.log(frame);
    // });
    // var number = setInterval(() => {
    //     var quote = {symbol: 'APPL', value: 195.46};
    //     client.send("/topic/aa.bb", {}, JSON.stringify(quote));
    // }, 1000);
    // setTimeout(() => {
    //     clearInterval(number);
    //     subscription.unsubscribe();
    //     client.disconnect(() => {
    //         console.log("the client has closed!");
    //     }, {});
    // }, 2500);


    //使用/topic前缀(隐式创建持久队列)
    // subscription = client.subscribe("/topic/aa.*", (frame) => {
    //     console.log("~~subscribe~~");
    //     console.log(frame);
    // }, {"durable": true, "auto-delete": false, "id": 8888});
    // var number = setInterval(() => {
    //     var quote = {symbol: 'APPL', value: 195.46};
    //     client.send("/topic/aa.bb", {}, JSON.stringify(quote));
    // }, 1000);
    // setTimeout(() => {
    //     clearInterval(number);
    //     subscription.unsubscribe({"durable": true, "auto-delete": false, "id": 8888});
    //     client.disconnect(() => {
    //         console.log("the client has closed!");
    //     }, {});
    // }, 2500);


    //使用/temp-queue前缀
    subscription = client.subscribe("/queue/qone", (frame) => {
        console.log("~~subscribe~~");
        console.log(frame);

        var number = setInterval(() => {
            var quote = {rrr: "ok"};
            client.send(frame.headers["reply-to"], {}, JSON.stringify(quote));//每秒回复一个信息
        }, 1000);

    });
    var quote = {symbol: 'APPL', value: 195.46};
    client.send("/queue/qone", {"reply-to": "/temp-queue/foo"}, JSON.stringify(quote));
};

client.debug = function (info) {
    console.log(info);
};


//方式一：使用JSON对象设置参数
let headers = {
    "host": host,
    "login": login,
    "passcode": passcode
};
client.connect(headers, connectCallback, errorCallback);

//方式二：直接传递参数
// client.connect(login, passcode, connectCallback, errorCallback, host);


