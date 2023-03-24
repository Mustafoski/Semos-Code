const fs = require('fs');
const path = require('path');
// we use __dirname to get the path of the current file

// READ FILE
// const data = fs.readFileSync(path.join(__dirname, 'test.txt'), 'utf8');
// console.log(data);

// WRITE FILE
// fs.writeFileSync(path.join(__dirname, 'test2.txt'), 'Hello Semus', 'utf8');
// Overwrite file
//  fs.writeFileSync(path.join(__dirname, 'test2.txt'), 'Goodbye', 'utf8');

// APPEND FILE
// fs.appendFileSync(path.join(__dirname, 'test2.txt'), '\nHello Semus', 'utf8');
// fs.appendFileSync(path.join(__dirname, 'test2.txt'), '\nGoodbye', 'utf8');

// Append JSON
// fs.appendFileSync(
//   path.join(__dirname, 'test2.txt'),
//   JSON.stringify({ message: 'Hello' }),
//   'utf8'
// );

// Delete file
// fs.unlinkSync(path.join(__dirname, 'test2.txt'));

// Make Directory
// fs.mkdirSync(path.join(__dirname, 'my-directory'));

// Delete Directory
// fs.rmdirSync(path.join(__dirname, 'my-directory'));
