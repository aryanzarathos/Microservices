import user from "../models/crudUser"

export default class userController{
 public async CrudUserGet (){

    const loginData=await user.findOne({isDeleted:false}).lean()
    return loginData
}
 public async CrudUserPost (data:any){
    const loginData=await user.create(data)
        return loginData
}
 public async CrudUserDelete (id:any){
    const loginData=await user.findByIdAndUpdate({_id:id,isDeleted:false},{isDeleted:true})
    if(loginData){
        return loginData
    }else{
        return loginData
    }
}
 public async CrudUserEdit (data:any,id:any){
    const loginData=await user.findByIdAndUpdate({_id:id,isDeleted:false},{data},{new:true})
    if(loginData){
        return loginData
    }else{
        return loginData
    }
}
}