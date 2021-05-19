import Papa from 'papaparse';

function transform() {
    var parsed = Papa.parse(document.getElementById('input').value).data.map(record =>
     ['59092000', '8030300018', '', '', '', new Date(record[0]).toLocaleDateString(), record[2], record[5], '',
        '', record[4], record[6], '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
    document.getElementById('output').value = Papa.unparse(parsed, {quotes: true, delimiter: ';'});
}

document.getElementById('button').addEventListener('click', transform, false);