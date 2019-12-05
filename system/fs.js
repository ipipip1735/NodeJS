const fs = require('fs');

// let file = 'E:\\Program\\WEBStrom\\NodeJS\\index.html';
let file = '../index.html';

fs.access(
    file,
    fs.constants.R_OK | fs.constants.W_OK,
    (err) => {
        console.log(err ? 'no access!' : 'can read/write');
    }
);

// fs.appendFile(file , 'data to append', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
// });



// console.log();

// let file = fs.createReadStream('index.html');
// file.on('readable', ()=>{
//     let k = file.read();
//     console.log(k.toString());
// })
