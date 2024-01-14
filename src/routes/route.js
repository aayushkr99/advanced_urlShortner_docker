const router = require('express').Router();
const {urlShort, redirectToUrl} = require("../controller/urlController")

router.post('/shorten/url', urlShort)
router.get('/:urlcode', redirectToUrl)

module.exports = router