const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  console.log("/");
});

module.exports = router;
