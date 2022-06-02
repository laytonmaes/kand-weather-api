const express = require("express")
const app = express()

const cityData = require("./city_data.js")

app.locals.cityData = cityData

app.set("port", process.env.Port || 3001)
app.locals.title = "Kand Weather"

app.get("/api/v1/cityData", (request, response) => {
    const data = app.locals.cityData
    
    response.json({ data })
})

app.listen(app.get("port"), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}.`);
})