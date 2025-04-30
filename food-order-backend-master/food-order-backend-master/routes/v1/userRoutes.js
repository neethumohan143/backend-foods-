const express = require("express");
const { userSignup, userLogin, userLogout, userProfile, checkUser } = require("../../controllers/userControllers");
const { userAuth } = require("../../middlewares/userAuth");
const router = express.Router();


// 1.Get
router.get('/userlist');

router.get('/profile/:id', userAuth, userProfile);
//user authentication
router.get('/check-user', userAuth, checkUser);


// 2.Post
router.post('/signup', userSignup);

router.post('/login', userLogin);

router.post('/logout', userLogout);


// 3. Patch or Put
router.patch('/update', userAuth);


// 4. Delete
router.delete('/delete'); 


module.exports = { userRouter: router };  
