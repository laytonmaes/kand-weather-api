const express = require("express")
const app = express()

cors = require("cors")
app.use(cors())

app.locals.cityData = require("./city_data.js")

app.set("port", process.env.Port || 3001)
app.locals.title = "Kand Weather"

app.get("/api/v1/city-data", (request, response) => {
    const data = app.locals.cityData
    
    response.json({ data })
})

app.listen(app.get("port"), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}/api/v1/city-data.`);
})