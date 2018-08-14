var db=require('../dbconnection');
var bdetail={
    
    addBdetail:function(item,callback){
        var value=[];
        console.log(item);
        for(i=0;i<item.length;i++){
            value[i]=[item[i].fk_dish_id,item[i].qty,item[i].price,item[i].remark,item[i].fk_bill_id];
            console.log(value);
             }
            return db.query("INSERT into bdetail_tbl (fk_dish_id,qty,price,remark,fk_bill_id) VALUES ?",[value],callback);
        }

};
module.exports=bdetail;