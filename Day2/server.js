//Synchronous file handling
const fs=require('fs')

//write
fs.writeFileSync('syncWrite.txt','This is written synchronosly')
console.log('Synchronous completed')

//read
const data=fs.readFileSync('syncWrite.txt','utf-8')
console.log('Synchronos read:',data)

//append
fs.appendFileSync('syncWrite.txt','\nThis line is appended synchronously')
console.log('synchronous append.')

//rename
fs.renameSync('syncWrite.txt','syncRenamed.txt')
console.log('Synchronous rename')

//Delete
fs.unlinkSync('syncRenamed.txt')
console.log('Synchronous file deleted')