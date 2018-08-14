var db=require("../dbconnection");
var orderdetail={
    getPastOrderdetailById:function(id,callback){
        return db.query("select bd.*,d.* from bdetail_tbl bd,dish_tbl d where fk_dish_id=dish_id and fk_bill_id=?",[id],callback);
    }
}
module.exports=orderdetail;