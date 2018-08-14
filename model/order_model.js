var db=require("../dbconnection");
var order={
    getPastOrderById:function(id,callback){
        return db.query("select * from bill_tbl where user_id=?",[id],callback);
    }
}
module.exports=order;