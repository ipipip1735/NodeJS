const {Writable} = require('stream');

// let options = {
//     write: (chunks, callback) => {
//         console.log("-----write-----");
//         console.log(chunks);
//         // callback();
//     },
//     final: (callback) => {
//         console.log("-----final-----");
//         setTimeout(() => callback(), 1000);
//     }
// }



class MWS extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, callback) {
        console.log("-----write-----");
        console.log(chunk.toString());
        setTimeout(() => callback(), 2000);
    }

    _final(callback) {
        console.log("-----final-----");
        callback();
    }
}


let options = {
    highWaterMark: 3,
    decodeStrings: true
};
let mws = new MWS(options);

// mws.write(Buffer.from('abcdefg'), (arg1) => {
//     console.log('arg1 is ' + arg1);
//     // console.log(arg2);
// });


// mws.write(
//     Buffer.from('abcdefg'),
//     (e) => console.log('this chunk has been written'),
// );


// mws.write(Buffer.from('a'), () => console.log());
// mws.end(Buffer.from('e'), () => console.log());


// mws.on('drain', () => {
//     console.log('==== drain ====');
//     console.log(mws.writableLength);
//
//     mws.write(Buffer.from('f'),() => console.log());
//     mws.write(Buffer.from('g'),() => console.log());
// });


mws.on('finish', () => {
    console.log('==== finish ====');

});


// console.log(mws);
// console.log(mws);
// console.log(mws._writableState.getBuffer());
// mws.write('a');
// console.log(mws);
// console.log(mws._writableState.getBuffer());
// mws.write('b');
// console.log(mws);
// console.log(mws._writableState.getBuffer());
