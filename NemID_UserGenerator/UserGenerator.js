const express = require('express')
const app = express()

const port = 8088


app.use(express.json())

app.post('/generate-nemID', (req, res) => {
  try{
      const lastFour = req.body.cpr.slice(0, 6)
      const random = 10000 + Math.floor(Math.random() * 90000)
      res.send({
          'nemId': random + lastFour,
      })
  }catch(e) {
    res.status(400).send(e);
  }
})

app.listen(port, () => {
  console.log(`UserGenerator is running on http://localhost:${port}`)
})