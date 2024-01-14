const db = require('../database/model');
const shortid = require('shortid');
const baseUrl = 'http://localhost:5000'


const urlShort = async (req, res) => {
    console.log(req.body)
    const {longUrl} = req.body
    try{
        const long_url = longUrl.trim()
        if(!(long_url.includes('//'))){
       return res.status(400).send({status : false , message : "Invalid longUrl"})
    }

    const urlParts = long_url.split('//')
    const scheme = urlParts[0]
    const uri = urlParts[1]

    if(!(uri.includes('.'))) {
      return res.status(400).send({status : false , message : "Invalid LongUrl"})
    }
    const uriParts = uri.split('.')

    if(!(((scheme == "http:") || (scheme == "https:"))&& (uriParts[0].trim().length) &&(uriParts[1].trim().length) ))
    return res.status(400).send({status : false , message : 'Invalid longUrl'})

    const urlData = await db.findOne({
        where : {longUrl},
        raw : true
    })
    if(urlData){
      return res.status(200).send({status : true, data : urlData})
    }else {
        const urlCode = shortid.generate().toLowerCase()                                                   // generate(longUrl).toLowerCase
        const shortUrl = baseUrl+ '/' + urlCode
        req.body.shortUrl = shortUrl;
        req.body.urlCode = urlCode;
        let generateUrl = await db.create(req.body)
        res.status(201).send({status : true, data : generateUrl})
    }

    }catch(error){
        console.log(error)
        throw new Error(error.message)
    }
}

const redirectToUrl = async (req, res) => {
    
        const { urlcode } = req.params;
      
        try {
          const urlData = await db.findOne({
            where: { urlCode : urlcode },
            raw: true,
          });
      
          console.log("Url Data -=-=>", urlData)
          if (urlData) {
            res.redirect(urlData.longUrl);
          } else {
            // Handle case where urlCode is not found
            res.status(404).send('Not Found');
          }
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
}

module.exports = {urlShort, redirectToUrl}