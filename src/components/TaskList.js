import React from "react";

function TaskList(props) {
    return (
        <div onClick={()=>{
            props.onTaskClick(props.task)
        }}>
            <p>{props.task.id}. {props.task.title}</p>
            <p>{props.task.body}</p>
            <p>{props.task.status}</p>
        </div>
    );
}

export default TaskList;
