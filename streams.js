const fs = require('fs');
const { read } = require('fs/promises');

const readstream = fs.createReadStream('./docs/blog3.txt');

const writeStream = fs.createWriteStream('./docs/blog4.txt');

readstream.on('data', chunk =>{
    console.log('---- NEW CHUNK ----');
    console.log(chunk.toString());
    writeStream.write('\nNEW CHUNK:\n');
    writeStream.write(chunk);
})


//piping
readstream.pipe(writeStream);