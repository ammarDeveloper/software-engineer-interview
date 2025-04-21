const fs = require('fs');
const path = require('path');

// copy the file without streams (loads the whole file into memory)
function copyFileWithoutStreams(source, destination) {
    const content = fs.readFileSync(path.join(__dirname, source), 'utf-8');
    fs.writeFileSync(path.join(__dirname, destination), content);
    console.log(`File copied successfully`);
}

// copy the file with streams 
function copyFileWithSreams(source, destination) {
    const readStream = fs.createReadStream(path.join(__dirname, source));
    const writeStream = fs.createWriteStream(path.join((__dirname, destination)));

    readStream.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File copied');
    })
}

// create a medium file
function createMediumFile(filename) {
    const writeStream = fs.createWriteStream(path.join(__dirname, filename));
    const eachline = 'a'.repeat(30);

    let i = 0;
    const dataSize = 10;
    function write() {
        let ok = true;
    
        while (i < dataSize && ok) {
            ok = writeStream.write(`${eachline}\n`);
            i++;
        }
        if (i < dataSize) {
            writeStream.once('drain', write);
        } else {
            writeStream.end();
        }
    }
    writeStream.on('finish', () => {
        console.log('Finish writing');
    })

    write();
}

// Read the medium file using steams chunk by chunk
function readMeduimFile(filename) {
    const readStream = fs.createReadStream(path.join(__dirname, filename), {
        encoding: 'utf-8'
    });

    readStream.on('data', (chunk) => {
        console.log(chunk);
    })

    readStream.on('end', () => {
        console.log('End of the file');
    })

    readStream.on('error', (err) => {
        console.error('Stream error: '+err.message);
    });

}

// Create 100mb file
function createLargeFile(filename, sizeInMB) {
    const writeStream = fs.createWriteStream(path.join(__dirname, filename));
    const oneMB = 'a'.repeat(1024 * 1024); // 1MB of 'a'

    for (let i = 0; i < sizeInMB; i++) {
        writeStream.write(oneMB+'\n');
    }

    writeStream.end();

    writeStream.on('finish', () => {
        console.log(`${filename} (${sizeInMB}MB) created.`);
    });
}

// createLargeFile('file-stream.txt', 500)
// copyFileWithoutStreams('file-stream.txt', 'file-stream-copy.txt');
// copyFileWithSreams('file-stream.txt', 'file-stream-copy.txt');
// createMediumFile('file-stream.txt');
readMeduimFile('file-stream.txt');

