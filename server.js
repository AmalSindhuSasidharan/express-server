const express = require('express');
const port = 3000;
const app = express();


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

app.listen(port,()=>{
    console.log(`Express app server is listening on port - ${port}`);
})