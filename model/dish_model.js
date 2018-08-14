var db=require('../dbconnection');
var dish={

    getAllDish:function(callback){
        return db.query("select * from dish_tbl",callback);
    },
    getDishByJoin:function(name,callback){
        return db.query("select c.*,d.* from dish_tbl d,cusines_tbl c where d.fk_cusines_id=c.cusines_id and cusines_name=?",[name],callback);
    },
    deleteAllDish:function(item,callback){
 
        var delarr=[];
        for(i=0;i<item.length;i++){
         
        delarr[i]=item[i].dish_id;
        }
        return db.query("delete from dish_tbl where dish_id in (?)",[delarr],callback);
        },

    addDish:function(item,filename,callback){
        console.log(item);
        return db.query("insert into dish_tbl (dish_name,dish_price,dish_img,fk_cusines_id) values (?,?,?,?)",[item.dish_name,item.dish_price,filename,item.fk_cusines_id],callback);
    },
    updateDish:function(id,item,callback){
        return db.query("update dish_tbl set dish_name=?,dish_price=?,dish_img=?,fk_cusines_id=? where dish_id=?",[item.dish_name,item.dish_price,item.dish_img,item.fk_cusines_id,id],callback);
    },
    getDishById:function(id,callback){
        return db.query("select * from dish_tbl where dish_id=?",[id],callback);
    }
};
module.exports=dish;