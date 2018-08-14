var db=require('../dbconnection');
var bill={
    addBill:function(item,callback){
        date=new Date(); 
        return db.query("insert into bill_tbl (bill_amt,bill_date,user_id) values (?,?,?)",[item.bill_amt,date,item.user_id],callback);
    }
};
module.exports=bill;