import user from "../models/user"

export default class userController{
 public async login (data:any){
    console.log(data)
    const loginData=await user.findOne({email:data.email,isDeleted:false,password:data.password}).lean()
    console.log(loginData,"line 6")
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
 public async UserGet (){
    const loginData=await user.find({isDeleted:false})
    if(loginData){
        return loginData
    }else{
        return loginData
    }
}
}