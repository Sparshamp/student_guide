/*var fs=require('fs');
var data="You're learining buffer and streams";
var ws = fs.createWriteStream("sample.txt");
ws.write(data,'UTF-8');
ws.end();
ws.on('finish', function(){
    console.log('Write Completed');
})
ws.on('error',function(err){
    console.log(error,stack);
})
console.log('program ended');*/

var fs = require('fs');
var zlib = require('zlib');
const {Transform } = require('stream');

//compress the file data.txt to gz format
/*fs.createReadStream('sample.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('sample1.txt.gz'));

//Decompress the file for reading
fs.createReadStream('sample1.txt.gz')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('sample2.txt'));
console.log('File Decompresed');*/


const appendTextStream = new Transform({
    transform(chunk, encoding, callback) {
        //convert the chunk to a string and append your extra text
        const data = chunk.tostring() + '\nExtra text added\n';
        this.push(data); /// Push the modified chunk to the next stream 
        callback();
    }
});

fs.createReadStream('sample1txt.gz')//Create a readable stream for the 
.pipe(zlib.createGzip()) // pipes the read stream into gzip decompressed 
.pipe(appendTextStream) //decompressed data is piped into your custom 
.pipe(fs.createWriteStream('sample3.txt'));// the modified data is piped
console.log('File Decompressed');