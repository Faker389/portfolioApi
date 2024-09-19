const express = require("express")
const cors = require("cors")
const mysql2 = require("mysql2")
const app = express()
app.use(cors())
app.use(express.json())
app.listen(8000)
const outputArray = []
app.post("/add-command",(req,res)=>{
    const {command,output} = req.body
    if (command === "clear") {
        res.json([]).end()
        return 0;
      }
      let result;
      switch (command.trim()) {
        case '-help':
          result = 'Available commands: -expirience, -command-info, --setings, -about-me, clear, -ls';
          break;
        case '-expirience':
          result = 'Jestem programistą coś tam robie i git wsm';
          break;
        case '-command-info':
          result = 'tu masz info o komendach';
          break;
        case '-ls':
          result = 'Tu masz liste projektów.';
          break;
        case '-about-me':
          result = 'Tu coś o mnie';
          break;
        case '--setings':
          close(true);
          break;
        case "":
          result = undefined;
          break;
        default:
          result = `command not found: ${command}`;
      }
      outputArray.push([...output,{command,result}])
      res.json(outputArray).end()
})