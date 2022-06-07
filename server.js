const express = require("express")
const app = express()

cors = require("cors")
app.use(cors())

app.locals.cityData = require("./city_data.js")

const PORT = process.env.PORT || 3001;
app.locals.title = "Kand Weather"

app.get("/", (request, response) => {
    const data = app.locals.cityData
    
    response.json({ data })
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});