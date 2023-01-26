const {readFile, writeFile, read} = require('fs')

console.log("starting...")

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/file-async.txt',
        `Here is the result: ${first}, ${second}`,
        {flag: 'a'}, 
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('Task completed')
        }
        )
    })
})

console.log('Starting next task')