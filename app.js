"use strict";
require("dotenv").config();
const UserModel = require("./Models/UserModel");
const express = require("express");
const { json } = require("express/lib/response");
const app = express();
app.use(express.json());

app.post("/api/registerHost",(req,res) => {
    const {user} = req.body;
    if(!user){
        res.sendStatus(400);
    }else{
        UserModel.addUser(user);
        res.sendStatus(201);
    }
});

app.post("/api/register/organizationUser",(req,res) => {
    const {users} = req.body;
    if(!users){
        res.sendStatus(400);
    }else{
        UserModel.addUsers(users);
        res.sendStatus(201);
    }
});