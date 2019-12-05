const {Readable} = require('stream');
const {Writable} = require('stream');


class MRS extends Readable {
    constructor() {
        super();

    }

    _read(size) {
        console.log("-----read-----");
        console.log(this.push(Buffer.from('abcdefghijglmn')));
        console.log(this.push(null));
        // console.log(this.readableLength);
    }
}


class MWS extends Writable {
    constructor() {
        super({highWaterMark: 2});
    }

    _write(chunk, encoding, callback) {
        console.log("-----write-----");
        console.log(chunk.toString());
        console.log("writableLength is " + this.writableLength);
        setTimeout(() => callback(), 1000);
    }

}


let mws = new MWS();
let mrs = new MRS();


mws.on('pipe', () => {
    console.log('www pipe www');
});
mws.on('drain', () => {
    console.log('www drain www');
});

mrs.on('readable', () => {
    console.log('rrr readable rrr');


    if (true) {
        let b = mrs.read(mrs.readableLength);
        console.log(b);
        mws.write(b, () => {
            console.log('---- chunk has been written ---')
        });
    } else {

    }


});
mrs.on('error', (error) => {
    console.log('rrr error rrr');
});

mrs.on('end', () => {
    console.log('rrr end rrr');
});


// mrs.pipe(mrs);



