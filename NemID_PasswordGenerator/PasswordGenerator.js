const express = require('express')
const app = express()
const port = 8089

app.use(express.json())

app.post('/generate-password-nemID', (req, res) => {
  try{
      const client = req.body;
      const nemIdPassword = client.nemId.substring(0, 2) + client.cpr.slice(-2)
      res.send({
        nemIdPassword
      })
  }catch(e) {
    console.log(e)
    res.status(400).send({Error: e});
  }
})

app.listen(port, () => {
  console.log(`PasswordGenerator is running on http://localhost:${port}`)
})