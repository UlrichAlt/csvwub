import fs from 'fs';
import parse from 'csv-parse';
import stringify from 'csv-stringify';
import transform from 'stream-transform';

const args = process.argv.slice(2)
const readStream = fs.createReadStream(args[0]);
const writeStream = fs.createWriteStream(args[1]);
const parser = parse({ delimiter: ',' });
const stringifier = stringify({ delimiter: ';', quoted: true });

const transformer = transform((record, callback) => {
    if (record[1] != 'Zinsdatum')
        callback(null, ['59092000', '8030300018', '', '', '', record[0], record[2], record[5], '',
            '', record[4], record[6],
            '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
});

readStream.pipe(parser).pipe(transformer).pipe(stringifier).pipe(writeStream);
