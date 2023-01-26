
// Global variables - No browser window modeules

// 1. __dirname --> Current directory Path
// 2. __finame --> filename
// 3. require --> function to use module
// 4. module --> info about current module
// 5. process --> info about env where program is being excuted

console.log(__dirname)
console.log(__filename)

setInterval(
    ()=>{
        console.log("Hello world")
    }, 1000)