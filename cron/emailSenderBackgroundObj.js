const cron = require('node-cron')
const ticketNotifaction= require("../model/ticketNotifaction.model")
const EmailTransporter= require("../notifier/emailServise")

cron.schedule("*/30 * * * * *",async()=>{
    console.log("I am background job")

const notification =  await ticketNotifaction.find({
    status:"NOT_SENT"
})
if(notification && notification.length>0){
    notification.forEach(notification=>{
        const mailData= {
            from:"crmapp03@gmail.com",
            to:notification.recepientEmails,
            subject:notification.subject,
            text:notification.content
        }

        EmailTransporter.sendMail(mailData,async function(err,info){
            if(err){
                console.log(err.message)
            }else{
                console.log(info)
               
                notification.status="SENT"
               await notification.save()

            }

        })
    })
}

   

})