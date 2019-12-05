// // const buf4 = Buffer.from([1, 2, 3]);
//
// // const buf = Buffer.from('tést', 'utf8');
// // console.log(buf.toString());
//
//
// // const buf = Buffer.alloc(1, 255);
// // console.log(buf);
//
//
// // const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
// // console.log(buf);
//
//
// // const str = 'a';
// // console.log(str.charCodeAt(0));
//
// // const bufS = Buffer.allocUnsafe(3);
// // bufS[0] = 9;
// // bufS[1] = 10;
// // bufS[2] = 15;
// // console.log(bufS);
// //
// //
// // const bufT = Buffer.allocUnsafe(2);
// // bufS.copy(bufT, 1, 1, 2);
// // console.log(bufT);
//
//
//
// // const buf = Buffer.from('this is a buffer');
// //
// // console.log(buf.indexOf('h'));
//
// // // 输出: 0
// // console.log(buf.indexOf('this'));
// //
// // // 输出: 2
// // console.log(buf.indexOf('is'));
//
//
// // var myIterable = {};
// // myIterable[Symbol.iterator] = function* () {
// //     yield 1;
// //     yield 2;
// //     yield 3;
// // };
// //
// // for (let value of myIterable) {
// //     console.log(value);
// // }
// // // 1
// // // 2
// // // 3
//
// // var n = [7,0];
// // n[Symbol.iterator] = function* () {
// //     yield 1;
// //     yield 2;
// //     yield 3;
// // };
// //
// // let x = [9, ...n];
// // console.log(x);
//
// // function *gen(){
// //     yield 10;
// //     yield 20;
// // }
// //
// // var gen_obj=gen();
// // console.log(gen_obj.next());
// // console.log(gen_obj.next());
// // console.log(gen_obj.next());
// // console.log(gen_obj.next());
//
//
//
// function *createIterator() {
//     console.log("----------");
//     let y = yield 1;
//
//     console.log("--- yield2 ---");
//     console.log(y);
//     yield 2;
//
//     console.log("--- yield3 ---");
//     yield 5;
//     console.log("----------");
// }
//
// let iterator = createIterator();
//
// console.log(iterator.next());
// console.log(iterator.next(9));
// console.log(iterator.next());
// console.log(iterator.next());
//