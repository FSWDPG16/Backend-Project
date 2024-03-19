const express = require("express")

const app = express()

const connectDatabase = require("./common/Connection");

const router=require("./routes/user.router")

connectDatabase()

app.use(router)

require("dotenv").config()

app.use(express.json());

const port = process.env.Port

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
