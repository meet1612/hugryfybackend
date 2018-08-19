var cusin1=require("../model/cusine_model");
var express = require("express");
var router = express.Router();
router.post("/",function(req,res,next){
    cusin1.deleteAllCusine(req.body,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  });
  router.put("/:id",function(req,res,next){
    cusin1.updateCusine(req.params.id,req.body,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  });
  module.exports=router;