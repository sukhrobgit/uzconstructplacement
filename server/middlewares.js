import jwt from 'jsonwebtoken';




export const generateToken = (user)=>{
    return jwt.sign(
        {
            _id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            isAdmin:user.isAdmin,
        },
        process.env.JWT_SECRET || "pass",
        {
            expiresIn:'30d',
        }
    )
};


export const isAuth = (req, res, next) =>{
    const authorization = req.headers.authorization;
    if(authorization){
        const token = authorization.slice(7, authorization.length);
        jwt.verify(
            token,
            process.env.JWT_SECRET || "pass",
            (err,decode)=>{
                if(err){
                    res.status(401).send({message:'Invalid TOken'})
                } else{
                    req.user = decode
                    next()
                }
            }
        )
    } else{
        res.status(401).send({message:'Token is missing'})
    }
}


export const isAdmin = (req, res, next)=>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401).send({message:"Invalid admin token"})
    }
}
