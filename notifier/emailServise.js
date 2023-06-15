const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
        user:'crmapp03@gmail.com',
        pass:'xgfqotznxcylxrbf'
    },
    secure:true,
}) 