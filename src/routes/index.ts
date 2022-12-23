import userController from "../controller/userController";
import crudController from "../controller/crudController";

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
router.get("/UserGet", async(req: any, res: any) => {
    const controller = new userController()
    const result = await controller.UserGet()
    return res.send(result)
});
router.get("/CrudUserGet", async(req: any, res: any) => {
    const controller = new crudController()
    const result = await controller.CrudUserGet()
    return res.send(result)
});
router.get("/CrudSingleUserGet", async(req: any, res: any) => {
    const id=req.query.id
    const controller = new crudController()
    const result = await controller.CrudSingleUserGet(id)
    return res.send(result)
});
router.post("/CrudUserPost", async(req: any, res: any) => {
    const data=req.body;
    const controller = new crudController()
    const result = await controller.CrudUserPost(data)
    return res.send(result)
});
router.delete("/CrudUserDelete", async(req: any, res: any) => {
    const id=req.query.id
    const controller = new crudController()
    const result = await controller.CrudUserDelete(id)
    return res.send(result)
});
router.patch("/CrudUserEdit", async(req: any, res: any) => {
    const data=req.body;
    const id=req.query.id
    const controller = new crudController()
    const result = await controller.CrudUserEdit(data,id)
    return res.send(result)
});


export default router;