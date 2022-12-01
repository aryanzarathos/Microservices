import userController from "../controller/userController";

const express = require("express");
const router = express.Router();

router.post("/Signup", (req: any, res: any) => {
    const data: any = req.data
    const controller = new userController()
    const result = controller.signup(data)
    res.send(result)
});
router.post("/Login", (req: any, res: any) => {
    const data: any = req.data
    const controller = new userController()
    const result = controller.login(data)
    res.send(result)
});


export default router;