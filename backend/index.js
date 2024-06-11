const express = require('express')
const cors = require('cors')
const { createToDo, updateToDo } = require('./types')
const { todo } = require('./db')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/todo',async(req,res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createToDo.safeParse(createPayLoad)
    if(!parsedPayLoad.success){
        res.status(404).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayLoad.title,
        description :createPayLoad.description,
        completed: false
    })
    res.status(200).json({
        msg:"ToDo created! "
    })
})

app.get('/todos',async(req,res)=>{
    const newtodo = await todo.find({})
    res.json({todos : newtodo})
})

app.get('/todos/:id',async(req,res)=>{
    const id = req.params.id
    const findOne = await todo.findOne({
        _id :id
    })
    res.json({
        findOne
    })
})

app.put('/completed',async(req,res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = updateToDo.safeParse(createPayLoad)
    if(!parsedPayLoad.success){
        res.status(404).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"To do completed "
    })
})

app.listen(3000,()=>{
    console.log('Server is listening to port 3000')
})