
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()

export class Server {
  constructor(config) {
    this.config = config
    this.app = express()
    this.app.use(bodyParser.json())
  }

  addRouter(path, router) {
    this.app.use(path, router.build())
    return this
  }

  start() {
    this.app.listen(this.config.getPort(), () => console.log(`Listening on port ${this.config.getPort()}`))
  }

}

const customers = []
const counters = {
  customer_id: 0
}
app.use(bodyParser.json({ limit: '10mb' }))
app.post('/api/customer', (req, res) => {
  customers.push({
    id: ++counters.customer_id,
    ...req.body.customer
  })
  res.send({ customer: req.body.customer })
})
app.get('/api/customers', (req, res) => {
  res.send({ customers: customers })
})

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
