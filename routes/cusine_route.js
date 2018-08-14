var cusin=require("../model/cusine_model");
var express = require("express");
var router = express.Router();
router.get("/:id?", function(req, res, next) {
  if(req.params.id){
    cusin.getCusineById(req.params.id,function(err,rows){
      if(err){
          res.json(err);
      }
      else{
          res.json(rows);
      }
  });
  }
  else
  {
    cusin.getAllCusine(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
  });
  router.post("/", function(req, res, next) {
    cusin.addCusine(req.body,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports=router;