var bill=require("../model/bill_model");
var express = require("express");
var router = express.Router();

  router.post("/", function(req, res, next) {
    
    bill.addBill(req.body,function(err, rows) {
      if (err) {
        res.json(err);
      } 
      else {
        console.log(rows.insertId);
        res.json(rows);
      }
    });
  });
  
  module.exports=router;