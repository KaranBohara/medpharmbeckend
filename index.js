const express=require("express");
const app=express();
const importData=require("./medicines.json")
let port=process.env.PORT || 3000;
app.get("/",(req,res)=>
{
    res.send("Hello World!");
});
app.get("/medicines",(req,res)=>
{
    res.send(importData);
})
app.listen(port,()=>
{
    console.log(`Port is listening at port http://localhost:${port}`);
});