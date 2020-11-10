//引入express套件
const express = require("express")
//引入連接database的檔案
const db = require(__dirname + "/course_db_connect")
//導入開放網域模組
const cors = require("cors")
//建立web server物件
const app = express()
const bodyParser = require("body-parser")

app.use(cors())
//會解析req過來的JSON字串
app.use(express.json())
//urlencoded是exoress的body-parser功能
app.use(express.urlencoded({ extended: false }))


const courseRoutes = require("./routers/courseRoutes")
app.use("/course", courseRoutes)


// 連線資料庫get資料方法
// app.get("/get-db", (req, res) => {
//   db.query("SELECT * FROM `course_list` ").then(([results]) => {
//     res.json(results)
//   })
// })


//讓public暴露
app.use(express.static(__dirname + "/../public"))

app.listen(3000, () => {
  console.log("伺服器已啟動...")
})
