export function ShowToDo({todos}){
    return <>
        {todos.map(function(todos){
            return <div>
            <h1>{todos.title}</h1>
            <h2>{todos.description}</h2>
            <button>{todos.completed == true ? "Completed" : "Mark As Complete"}</button>
            </div>
        })}
        </>
        
   
}