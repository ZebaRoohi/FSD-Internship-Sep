//Async fs
const fs=require('fs')

//write
fs.writeFile('asyncFileWrite.txt','This is writtend asynchronously',(err)=>{
    if(err) throw err;
    console.log('Async write completed')

//read
  fs.readFile('asyncFileWrite.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log('Async read:',data)

//append
    fs.appendFile('asyncFileWrite.txt','\n This line is appended asynchronously',(err)=>{
        if(err) throw err;
        console.log('Async appened completed')

//rename
        fs.rename('asyncFileWrite.txt','asyncRenemed.txt',(err)=>{
            if(err) throw err;
            console.log('Async rename completed')

//delete
        fs.unlink('asyncRenemed.txt',(err)=>{
            if(err) throw err;
            console.log('Async file deletion completed')
        })
        })
    })
  })
})