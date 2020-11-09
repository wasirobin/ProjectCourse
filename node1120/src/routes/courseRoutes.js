const express = require("express")

const router = express.Router()

router.get("/:p1?/:p2?", (req, res) => {
  res.json({
    params:req.params,
    url:req.url,
    baseurl:req.baseurl
  })
})

module.exports = router
