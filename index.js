require('dotenv').config()
const axios = require('axios')
const app = require('express')()

app.get('/random.gif', (req, res, next) => {
  axios.get(`http://api.giphy.com/v1/gifs/random?`, {
    params: {
      api_key: process.env.API_KEY,
      tag: process.env.KEYWORD,
    }
  })
  .then(({ data }) => {
    res.redirect(data.data.image_original_url)
    next()
  })
  .catch((err) => {
    res.redirect(process.env.DEFAULT)
    next()
  })
})

app.listen(process.env.PORT || 3000)
