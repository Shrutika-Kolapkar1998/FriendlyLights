const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", (req,res) => {
    const {name , email, message} = req.body;
    console.log("Contact form submitted" , req.body);
    res.json({success:true , message:"Contact success" , data:{name, email, message}});

});

app.listen(PORT , () => {
    console.log("Server running");
})