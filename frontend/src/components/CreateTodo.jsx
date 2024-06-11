import { useState } from "react"

export function CreateToDo(){
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    return <div>
        <input onChange={function(e){
            const value = e.target.value
            setTitle(e.target.value)
        }}style={{padding:10,
        margin:10
        }}type="text" placeholder="title"></input>
        <input  onChange={function(e){
            const value = e.target.value
            setDescription(e.target.value)
        }} style={{padding:10,
        margin:10
        }} type="text" placeholder="description"></input>
        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title : title,
                    description : description
                }),
                headers: {
                    "Content-Type":"application/json"
                }
            }).then(async function(res){
                const json = await res.json()
                
            })
        }}>Add a To Do</button>
    </div>
}