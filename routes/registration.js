var express = require("express");
var router = express.Router();
var pool = require("./apiconfig/pool");

router.post("/addRegistration", function (req, res, next) {
  var qry = `insert into registration set Name='${item.Name}', Email='${item.Email}', Phone='${item.Phone}', Password='${item.Password}';`;
  pool.query(qry, function (err, result) {
    if (err) {
      return res
        .status(400)
        .json({ status: false, message: "Server Error", err });
    } else {
      return res
        .status(200)
        .json({ status: true, message: "Record Save", result });
    }
  });
});

router.get("/regDisplay", function (req, res, next) {
  var qry = `select * from registration where Phone='${item.Phone}';`;
  pool.query(qry, function (err, result) {
    if (err) {
      return res
        .status(400)
        .json({ status: false, message: "Server Error", err });
    } else {
      return res
        .status(200)
        .json({ status: true, message: "Record Found", result });
    }
  });
});

router.post("/regDeleteById", function (req, res, next) {
  var qry = `delete * from registration where Phone='${item.Phone}';`;
  pool.query(qry, function (err, result) {
    if (err) {
      return res
        .status(400)
        .json({ status: false, message: "Server Error", err });
    } else {
      return res
        .status(200)
        .json({ status: true, message: "Record Deleted", result });
    }
  });
});

router.post("/regAllDelete", function (req, res, next) {
  var qry = `delete * from registration;`;
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
