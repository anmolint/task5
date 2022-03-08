const router = require("express").Router();
const scapper = require("../controller/scrapperControl")
router.post("/fetch/flipkart/mobile",scapper.scrapmobile)
router.post("/fetch/snapdeal/t-shirt",scapper.scraptshirt)
module.exports = router;