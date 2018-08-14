var dish=require("../model/dish_model");
var express = require("express");
var router = express.Router();
router.get("/:name?", function(req, res, next) {
    if(req.params.name){
        dish.getDishByJoin(req.params.name,function(err,rows){
            if (err) {
                res.json(err);
              } else {
                res.json(rows);
              }
        });
    }

   else{

    dish.getAllDish(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
    }
  });
  router.post("/",function(req,res,next){
    dish.deleteAllDish(req.body,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  });
  
  module.exports=router;