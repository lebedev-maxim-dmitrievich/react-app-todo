import React from "react";

const TaskList = (props) => {
    return (
        <div onClick = {()=>{
            console.log(props.task)
        }}>
            <p>{props.task.id}. {props.task.title}</p>
            <p>{props.task.body}</p>
            <p>{props.task.status}</p>
        </div>
    )
}

export default TaskList;