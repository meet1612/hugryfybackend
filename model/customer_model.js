var db=require('../dbconnection');
var customer={
    getAllCustomer:function(callback){
        return db.query('select * from customer_tbl',callback);
    },
    getCustomerById:function(id,callback){
        return db.query("select * from customer_tbl where Email_Id=?",[id],callback);
    },
    CustomerLogin:function(item,callback){
        return db.query('select * from customer_tbl where Email_Id=? And Password=?',[item.Email_Id,item.Password],callback);
    },
    CustomerSignup:function(item,callback){
        return db.query("insert into customer_tbl values (?,?,?,?,?,?,?,?,?)",[item.Email_Id,item.Password,item.Username,item.Gender,item.Age,item.Mobile,item.Address,item.City,item.Pincode],callback);
    }
};
module.exports=customer;