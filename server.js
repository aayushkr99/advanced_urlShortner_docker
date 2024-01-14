const express = require("express");
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./src/routes/route")
app.use(cors());
app.use(express.json());


app.use("/", router)
app.use("/test" , (req, res) => {
  res.send("Hi there!, test API, Please Ignore")
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});