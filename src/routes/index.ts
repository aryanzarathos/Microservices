import userController from "../controller/userController";

const express = require("express");
const router = express.Router();

router.post("/Signup",  async(req: any, res: any) => {
    const data: any = req.body
    const controller = new userController()
    const result = await controller.signup(data)
    return res.send(result)
});
router.post("/Login", async(req: any, res: any) => {
    const data: any = req.body
    const controller = new userController()
    const result = await controller.login(data)
    return res.send(result)
});


export default router;