var db=require('../dbconnection');
var cusin={
    getAllCusine:function(callback){
        return db.query("select * from cusines_tbl",callback);
    },
    addCusine:function(item,callback){
        return db.query("insert into cusines_tbl (cusines_name) values (?)",[item.cusines_name],callback);
    },
    deleteAllCusine:function(item,callback){
 
        var delarr=[];
        for(i=0;i<item.length;i++){
         
        delarr[i]=item[i].cusines_id;
        }
        return db.query("delete from cusines_tbl where cusines_id in (?)",[delarr],callback);
        },
    updateCusine:function(id,item,callback){
        return db.query("update cusines_tbl set cusines_name=? where cusines_id=?",[item.cusines_name,id],callback);
    },
    getCusineById:function(id,callback){
        return db.query("select * from cusines_tbl where cusines_id=?",[id],callback);
    }
    
}
module.exports=cusin;