import jwt from 'jsonwebtoken'
// user authentication middleware
const authUser = async(req,res,next)=>{
    try{
        const {token}=req.headers || req.headers.authorization?.split(" ")[1]
        //const token = req.headers.authorization?.split(" ")[1]
        console.log("🔥 TOKEN RECEIVED IN BACKEND:", token);
        if(!token){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        
        req.userId=token_decode.id

        next()

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }

}
export default authUser
