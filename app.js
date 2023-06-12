const fs = require('fs');


try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('File content:', data);
} catch (error) {
  console.error('Error reading file:', error);
}

try {
  fs.writeFileSync('newfile.txt', 'Hello, World!', 'utf8');
  console.log('File written successfully');
} catch (error) {
  console.error('Error writing file:', error);
}


try {
  fs.appendFileSync('newfile.txt', '\nAppended content', 'utf8');
  console.log('Content appended successfully');
} catch (error) {
  console.error('Error appending to file:', error);
}

try {
  fs.renameSync('newfile.txt', 'renamedfile.txt');
  console.log('File renamed successfully');
} catch (error) {
  console.error('Error renaming file:', error);
}

try {
  fs.unlinkSync('renamedfile.txt');
  console.log('File deleted successfully');
} catch (error) {
  console.error('Error deleting file:', error);
}


const fileExists = fs.existsSync('file.txt');
console.log('File exists:', fileExists);


try {
  const fileStats = fs.statSync('file.txt');
  console.log('File size:', fileStats.size, 'bytes');
  console.log('File last modified:', fileStats.mtime);
} catch (error) {
  console.error('Error getting file information:', error);
}