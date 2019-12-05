const {Readable} = require('system/stream');

class MRW extends Readable {

    constructor(options) {
        super(options);

        // this.file = Buffer.alloc(3 * 1024);
        // this.file.fill('a', 0, 1024);
        // this.file.fill('b', 1024, 1024 * 2);
        // this.file.fill('c', 1024 * 2, 1024 * 3);
        // console.log(this.file.toString());

        // this.times = 0;
        this.total = 5;


    }

    // init() {
    //
    // }

    // getFile(offset, times){
    //     return .from(array)
    //     console.log(this.file.toString('utf8', offset*times++, offset*times));
    // }

    _read(size) {
        this.push(Buffer.from('ab'));
        this.push(null);
    }

}

let mrw = new MRW({highWaterMark: 3});

// mrw.on('data', (chunk) => {
//     mrw.pause();
//     chunk.toString();
//     chunk.toString();
//     chunk.toString();
//     chunk.toString();
//     mrw.resume();
//
// });

mrw.on('readable', () => {
    console.log(mrw.read(1));
});


mrw.on('end', () => {
    console.log('~~~~~ end ~~~~~');
    console.log("readableLength is " + mrw.readableLength);
});
