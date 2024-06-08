const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, 'input.txt');
const writableStream = fs.createWriteStream('output.txt');

const readableStream = fs.createReadStream(dir, {
    highWaterMark: 15
});

readableStream.on('readable',() => {
    try{
        writableStream.write(`${readableStream.read()}\n`);
    }catch(e){
        console.log("Gagal membaca file");
    }

});

readableStream.on('end', () => {
    console.log('Done');
});