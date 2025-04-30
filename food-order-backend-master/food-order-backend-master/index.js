const express = require("express");
const mongoose = require('mongoose');
const { apiRouter } = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = 3000;

//middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())



app.get('/', (req, res) => {
    res.send('Hello World!')
  })
 
app.use("/api", apiRouter)  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

main().then(() => console.log("Server Connected")).catch(err => console.log(err));
  
async function main() {
  
  await mongoose.connect('mongodb+srv://yadhukrishna017:goXJdTUuefg5gbvH@cluster0.icpym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster');
}