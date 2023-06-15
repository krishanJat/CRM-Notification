const notifactionController=require("../controller/ticketnotifaction.controller")


module.exports = function(app){
app.post("/notifactionServise/api/v1/notifaction/",notifactionController.acceptNotifactionRequest)
app.get("/notifactionServise/api/v1/notifaction/:id",notifactionController.getNotifaction)
}