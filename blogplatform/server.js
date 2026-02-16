require("dotenv").config()
const app = require("./src/app")
const {sequelize} = require("./src/models")

const PORT = process.env.PORT || 5000

sequelize.sync().then(() => {
    console.log("Database connected")
    app.listen(PORT, () => {
        console.log(`Server is running on the ${PORT}`)
    })
})