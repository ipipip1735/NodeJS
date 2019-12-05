const {Readable} = require('stream');


let options = {highWaterMark: 2, encoding: 'utf8'};

class MRS extends Readable {


    constructor(options) {
        super(options);
    }

    _read(size) {
        console.log("--B---read-----");

        console.log(this.push(Buffer.from('ABCDEFG')));
        // this.push(null);
        console.log(this.readableLength);
        console.log(this.readableHighWaterMark);

        console.log("--E---read-----");
        // console.log(this.push(Buffer.from('a')));
        // console.log(this.push(Buffer.from('b')));
        // console.log(this.push(Buffer.from('c')));

        // console.log(this.readableLength);
        // console.log(this.push(Buffer.from('b','ascii')));
        // console.log(this._readableState.needReadable);

        // console.log(mrs.readableLength);
        // console.log(this.push(Buffer.from('c','ascii')));
        // this.push(null);
        // console.log();
        // console.log(mrs.push(null));
    }

}


let mrs = new MRS(options);
console.log('readableLength is ' + mrs.readableLength);
// mrs.read(1);
// mrs.push(Buffer.from('abcd'));


// console.log('typeof is ' + typeof mrs.read());

mrs.on('readable', () => {
    console.log('*** readable ***');
    mrs.resume();
    console.log('+++++');
    console.log('readableLength is ' + mrs.readableLength);
    console.log('readableHighWaterMark is ' + mrs.readableHighWaterMark);
    console.log(mrs.read(3));
    console.log(mrs.read(3));
    console.log(mrs.read(3));
    console.log('+++++');
    mrs.pause();

});


// setInterval(() => {
//     mrs.pause();
// }, 2000);

// mrs.on('data', () => {
//     console.log('*** data ***');
//
//     console.log('+++++');
//     console.log('readableLength is ' + mrs.readableLength);
//     console.log('readableHighWaterMark is ' + mrs.readableHighWaterMark);
//     console.log(mrs.read(10));
//     console.log('+++++');
//
//
// });


// mrs.on('data', (chunk) => {
//     console.log('*** data ***');
//     console.log(mrs._readableState.needReadable);
//     console.log('readableLength is ' + mrs.readableLength);
//     console.log('length is ' + mrs._readableState.length);
//     mrs.pause();
//     console.log(chunk.toString());
//     // console.log(chunk.toString());
//     // console.log(mrs.isPaused());
//     // setTimeout(()=>{
//         mrs.resume();
//     //     console.log(mrs.isPaused());
//     // }, 1000);
// });

mrs.on('error', () => {
    console.log('*** error ***');
});

mrs.on('end', (error) => {
    console.log('*** end ***');
});


