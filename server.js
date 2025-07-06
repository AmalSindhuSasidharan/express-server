const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());

let userList = [
    {
        userName : 'Ram',
        email: 'ram@testmail.com'
    }
]

app.get('/',(req,res)=>{
    res.send('Hello World')
});

app.get('/about',(req,res)=>{
    res.send('About url hit');
});

app.get('/userList',(req,res)=>{
    res.status(200).json(userList);
});

app.post('/addNewUser',(req,res)=>{
    const {userName, email} = req.body;
    if(!userName || !email ) {
        res.status(400).json({
            message: 'both username and email are required'
        })
    }
    const isExistingUser = userList.find((user)=> user.userName.toLowerCase() === userName.toLowerCase()|| user.email === email );
    if(isExistingUser) {
        res.status(409).json({
            message: 'user value already exist'
        });
    } else {
        userList.push(req.body);
        res.status(200).json({
            message: 'New user details added successfully'
        });
    }
    
});

app.listen(port,()=>{
    console.log(`Express app server is listening on port - ${port}`);
})