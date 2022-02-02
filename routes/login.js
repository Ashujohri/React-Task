var express = require("express");
var router = express.Router();
var pool = require("./apiconfig/pool");

router.post("/addLogin", function (req, res, next) {
  console.log("Req body of login", req.body);
  var qry = `insert into login set Email='${item.Email}', Password='${item.Password}';`;
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

router.post("/loginDisplay", function (req, res, next) {
  console.log("Req body of login", req.body);
  var qry = `select * from login where Email='${item.Email}' and Password='${item.Password}';`;
  pool.query(qry, function (err, result) {
    if (err) {
      return res
        .status(400)
        .json({ status: false, message: "Server Error", err });
    } else {
      if (result.length == 1) {
        return res
          .status(200)
          .json({ status: true, message: "Record Found", result });
      } else {
        return res
          .status(200)
          .json({ status: true, message: "Record not found" });
      }
    }
  });
});

module.exports = router;
