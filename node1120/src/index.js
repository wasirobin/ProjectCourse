require("dotenv").config()

const express = require("express")

const cors = require("cors")
const db = require(__dirname + "/db_connect2")

const bodyParser = require("body-parser")
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// get方法
app.get("/get-db", (req, res) => {
  db.query("SELECT * FROM course_list ").then(([results]) => {
    res.json(results)
  })
})

const courseRoutes=require('./routes/courseRoutes')
app.use('/course',courseRoutes)

app.use(express.static(__dirname + "/../public"))

app.use((req, res) => {
  res.type("text/plain").status(404).send("找不到網頁")
})

app.listen(3000, () => {
  console.log("伺服器已啟動...")
})
