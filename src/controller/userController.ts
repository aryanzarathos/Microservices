import user from "../models/user"

export default class userController{
 public async login (data:any){
    const loginData=await user.find({email:data.email,isDeleted:false,password:data.password}).lean()
    if(loginData){
        return true
    }else{
        return false
    }
}
 public async signup (data:any){
    const loginData=await user.create(data)
    if(loginData){
        return true
    }else{
        return false
    }
}
}