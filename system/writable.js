const {Writable} = require('stream');

let options = {
    highWaterMark: 3,
    decodeStrings: true,
    write: (chunk, encoding, callback) => {
        console.log("-----write-----");

        console.log(chunk.toString());
        console.log(encoding);
        setTimeout(() => callback(), 200);
    },
    // writev: (chunks, callback) => {
    //     console.log("-----writev-----");
    //     console.log(chunks);
    //     // callback();
    // },
    destroy: (err, callback) => {
        console.log("-----destroy-----");
        console.log(err);
        callback();

    },
    final: (callback) => {
        console.log("-----final-----");
        setTimeout(() => callback(), 1000);
    }
};

class MWS extends Writable {


    constructor(options) {
        super(options);
        // const k = this._writableState;
        // console.log(k);
        // console.log(this);
        // this.state = this._writableState.getBuffer();
        // this._decoder = new StringDecoder(state.defaultEncoding);
        // this.data = '';
    }


}


let mws = new MWS(options);
// console.log(mws.write(Buffer.from('abcdefg'), 'ascii'));
console.log(mws.write('abcdefg', 'ascii'));

mws.on('drain', () => {
    console.log('www drain www');
    mws.write(Buffer.from('t'));
    mws.write(Buffer.from('t'));
    // let i = 0;
    // while (true) {
    //     mws.write(Buffer.from('a'))
    // }
})

// console.log(mws);
// console.log(mws);
// console.log(mws._writableState.getBuffer());
// mws.write('a');
// console.log(mws);
// console.log(mws._writableState.getBuffer());
// mws.write('b');
// console.log(mws);
// console.log(mws._writableState.getBuffer());
