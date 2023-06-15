const EmailTransporter= require("./emailServise")

const emailObj={
    from:"crmapp03@gmail.com",
    to:['krishanjaat8432@gmail.com','rachanachoudhry129@gmail.com'],
    subject:"Test email from CRM",
    text:"HEllo! welcom to CRM"
}

EmailTransporter.sendEmail(emailObj,async function(err,info){
    if(err){
        console.log(err.message) 
    }else{
        console.log(info)

    }
});