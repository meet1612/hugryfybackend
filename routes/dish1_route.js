var dish1 = require("../model/dish_model");
var express = require("express");
var router = express.Router();
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/product_img");
  },
  filename: (req, file, cb) => {
    x = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});
var upload = multer({ storage: storage });

router.post("/",upload.single('dish_img'),function(req, res, next) {
  dish1.addDish(req.body,req.file.filename,function(err, rows) {
    console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get("/:id", function(req, res, next) {
  dish1.getDishById(req.params.id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.put("/:id",function(req,res,next){
    dish1.updateDish(req.params.id,req.body,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  });
module.exports = router;
