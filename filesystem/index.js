const fs = require('fs');
const path = require('path');

const dir =path.resolve(__dirname, 'notes.txt');

const fileReadCallback = (error, data) => {
    if(error){
        console.log(error);
        console.log('Gagal membaca berkas');
        return;
    }

    console.log(data);
}

fs.readFile(dir, 'UTF-8', fileReadCallback);