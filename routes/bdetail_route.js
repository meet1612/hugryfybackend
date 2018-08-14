var bdetail=require("../model/bdetail_model");
var express = require("express");
var router = express.Router();
router.get("/", function(req, res, next) {
    bdetail.getBdetailAuto(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  router.post("/", function(req, res, next) {
    bdetail.addBdetail(req.body,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  
  module.exports=router;