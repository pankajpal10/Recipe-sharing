const cookieToken =(user, res)=>{
    
    const token =user.getJWTToken();

    const options={
        expires: new Date(Date.now()+ process.env.JWT_COOKIE_EXPIRE *24*60*60*1000),
        httpOnly:true, //cookie cannot be accessed or modified by client-side JavaScript
    };

user.password = undefined;

    res.status(200).cookie("token", token ,options).json({
        success:true,
        token,
        user,
    });

}

module.exports=cookieToken;
