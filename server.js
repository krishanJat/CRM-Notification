 const mongoose =require("mongoose")
 const dbConfig=require("./config/db.config")
 const ServerConfig=require("./config/server.cofig")
 const express=require("express")
 const app=express()
 const bodyParser = require("body-parser")
const serverCofig = require("./config/server.cofig")
app.use(bodyParser.json())
require("./cron/emailSenderBackgroundObj")


mongoose.connect(dbConfig.DB_URL)
const db= mongoose.connection
db.on("error",()=>{
    console.log("Error while connection to db")
})
db.once("open",()=>{
    console.log("Connected to mongo DB")
})

require("./routes/ticketNotifaction.route")(app)

app.listen(serverCofig.PORT,()=>{
    console.log("Application listening to request on Port number " + serverCofig.PORT)
})