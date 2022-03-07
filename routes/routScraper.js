const router = require("express").Router();
const scapper = require("../controller/scrapperControl")
router.post("/fetch/flipkart/mobile",scapper.scrapmobile)
module.exports = router;