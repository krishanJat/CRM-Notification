const ticketNotifactionModel = require("../model/ticketNotifaction.model")


exports.acceptNotifactionRequest=async(req,res)=>{


  const notifactionObject={
    ticketId:req.body.ticketId,
    subject:req.body.subject,
    content:req.body.content,
    recepientEmails:req.body.recepientEmails,
    requester:req.body.requester
 }
 try{
    const notification=await ticketNotifactionModel.create(notifactionObject)
  if(notification){
    return res.status(201).send({
        requestId:notification._id,
        message:"Request has benn accepted.check status later by using provided requestId"
    })

  }

 }catch(err){
    return res.status(501).send({
        message:"Some internal error occured "
    })

 }

}


exports.getNotifaction =async (req,res)=>{
  try{
    let ticket= await ticketNotifactionModel.findById(req.params.id);
  
  if(ticket){
  return res.status(200).send(ticket);
  }
  else{
    return res.status(500).send({message:"Enter valid id"})
  }


}catch(err){
    return res.status(500).send("Interal error")

}
}