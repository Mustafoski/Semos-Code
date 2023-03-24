const fs = require('fs');
const path = require('path');
// we use __dirname to get the path of the current file

// WRITE FILE
// fs.writeFile(path.join(__dirname, 'test2.txt'), 'Hello Semus', (err, data) => {
//   if (err) throw err;
//   console.log('Done writing test2.txt');
// });

// READ FILE
// fs.readFile(path.join(__dirname, 'test2.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Overwrite file
// fs.writeFileSync(path.join(__dirname, 'test2.txt'), 'Goodbye', (err, data) => {
//   if (err) throw err;
//   console.log('Done writing test2.txt');
// });

//APPEND FILE
// fs.appendFileSync(
//   path.join(__dirname, 'test2.txt'),
//   '\nHello Semus',
//   (err, data) => {
//     if (err) throw err;
//     console.log('Done writing test2.txt');
//   }
// );

// Append File
// fs.appendFileSync(path.join(__dirname, 'test2.txt'), '\nGoodbye', 'utf8');

// Append JSON
// fs.appendFileSync(
//   path.join(__dirname, 'test2.txt'),
//   JSON.stringify({ message: 'Hello' }),
//   'utf8'
// );

// Delete file
// fs.unlink(
//   path.join(__dirname, 'test2.txt'), err => {
//     if (err) throw err;
//     console.log('File deleted');
//   });

// Make Directory
// fs.mkdirSync(path.join(__dirname, 'my-directory'));

// Delete Directory
// fs.rmdirSync(path.join(__dirname, 'my-directory'));

// Write File,  Read File then Delete File
// fs.writeFile(path.join(__dirname, 'example.txt'), 'Hello Semus', err => {
//   fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);

//     fs.unlink(path.join(__dirname, 'example.txt'), err => {
//       if (err) {
//         console.log('File deleted');
//       } else {
//         console.log('File deleted successfully');
//       }
//     });
//   });
// });
