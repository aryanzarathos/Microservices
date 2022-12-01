const express = require("express");
const router = express.Router();

router.get("/",(req:any,res:any)=>{
res.send("hello world")
});

export default router;