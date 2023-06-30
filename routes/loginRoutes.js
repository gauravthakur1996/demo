const express = require('express');
const router = express.Router();

//paths
const loginPath = '/login';
const signupPath = '/signup'

const loginMiddleware = (req,res,next)=>{
    console.log('loginMiddleware : ')
    next()
}

router.get(loginPath, loginMiddleware, (req,res, next)=>{
    res.send("Login Works")
})

router.post(signupPath, (req,res, next)=>{
    res.send("Create User Works!!!")
});

module.exports = router
