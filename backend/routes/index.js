var express = require('express');
var router = express.Router();
var request = require('request')
/* GET home page. */
router.get('/', async function(req, res, next) {
  // let url = req.query[0]
  url = 'https://oss.leadleo.com/leadleo_www/2020/01/15/42580ef0-3775-11ea-af9f-2183765f2062.jpg?x-oss-process=image/resize,w_440'
  let base = await getBase(url)
  res.send(base)
});

function getBase (url) {
  return new Promise((resolve,reject) => {
    request.get({
      url:url,
      encoding: null
    },(err,res,body) => {
      if(err){
        reject(err)
      }else {
        console.log(body)
        var base = body.toString('base64')
        resolve(base)
      }
    })
  })
}
module.exports = router;
