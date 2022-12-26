import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
const app = express()
const port = process.env.PORT 
app.set('view engine', 'ejs')


app.get('/raza', (req, res) => {
    res.render('index'  )

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})