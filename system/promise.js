
//方式一：手动创建实例
let promise = new Promise(((resolve, reject) => {
    resolve();
}));
promise.then(() => console.log("then1"))
    .then(() => {
        console.log("then2");
        return Promise.reject("xxx");
    })
    .then(() => {
        console.log("then3");
    })
    .catch(reason => console.log("error|" + reason));


//方式二：使用静态方式创建状态为fulfilled实例
// Promise.resolve(1)
//     .then(b => console.log(b));


//方式三：使用静态方式创建状态为rejected实例
// Promise.reject("xxx")
//     .then(() => console.log("then"))
//     .catch(reason => console.log(reason));
