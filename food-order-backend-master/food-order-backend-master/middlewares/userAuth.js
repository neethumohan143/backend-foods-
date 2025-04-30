const jwt = require("jsonwebtoken");

const userAuth = (req, res, next) => {
    try{
        console.log("cookies=====", req.cookies);
        const {token} = req.cookies;
        if(!token){
            return res.status(401).json({ success: false, message: "user not authorized" });
        }
        const tokenVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!tokenVerified){
            return res.status(401).json({ success: false, message: "user not authorized" });
        }
        req.user = tokenVerified;
        next();
    }catch (error){
        console.log(error);
        res.status(error.statuscode || 500).json({ message: error.message || "internal ser4ver error"});
    }
};

module.exports = { userAuth }