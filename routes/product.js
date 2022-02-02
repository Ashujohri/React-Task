var express = require("express");
var router = express.Router();
var pool = require("./apiconfig/pool");
var multer = require("./apiconfig/multer");

router.post("/addProduct", multer.any(), function (req, res, next) {
  console.log("Body", req.body);
  console.log("file", req.files);
  var qry = `insert into product set AddProduct='${req.body.AddProduct}', ProductName='${req.body.ProductName}', ProductImage='${req.files[0].originalname}', ProductDescription='${req.body.ProductDescription}';`;
  pool.query(qry, function (err, result) {
    if (err) {
      return res
        .status(400)
        .json({ status: false, message: "Server Error", err });
    } else {
      console.log("Result of Product", result);
      return res
        .status(200)
        .json({ status: true, message: "Record Save", result });
    }
  });
});

router.get("/DisplayById", function (req, res, next) {
  console.log("Body", req.body);
  // console.log("file",req.files);
  var qry = `select * from product`;
  pool.query(qry, function (err, result) {
    if (err) {
      return res
        .status(400)
        .json({ status: false, message: "Server Error", err });
    } else {
      console.log("Result of Product", result);
      return res
        .status(200)
        .json({ status: true, message: "Record Found", result });
    }
  });
});

router.post("/AllDeleteProduct", function (req, res, next) {
  var qry = `delete * from product;`;
  pool.query(qry, function (err, result) {
    if (err) {
      return res
        .status(400)
        .json({ status: false, message: "Server Error", err });
    } else {
      return res
        .status(200)
        .json({ status: true, message: "All Record Deleted", result });
    }
  });
});

module.exports = router;
