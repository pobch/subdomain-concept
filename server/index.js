import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

const app = express()

app.use(bodyParser.json())
app.use(
  cookieSession({
    secret: 'secret-key',
    sameSite: 'lax',
  })
)

app.get('/', (req, res) => {
  console.log(req.session.pob)
  res.json({ message: 'Howdy, Pob' })
})

app.post('/postmsg', (req, res) => {
  console.log(req.session.pob)
  req.session.pob = Date.now()
  res.json({ success: true })
})

app.listen(4000, () => {
  console.log('Server started on PORT 4000')
})
