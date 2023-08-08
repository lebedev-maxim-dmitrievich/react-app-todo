import React from "react";

function TaskList(props) {
  let taskColor = 'gray'
  if (props.task.status === 'В процессе')
    taskColor = 'blue'
  else if (props.task.status === 'Выполнена')
    taskColor = 'green'

  return (
    <div className="task"
      onClick={() => {
        props.onTaskClick(props.task);
      }}
    >
      <h3>{props.task.title}</h3>
      <p style={{color: taskColor}}>{props.task.status}</p>

      <button
        onClick={(event) => {
          event.stopPropagation();
          props.onDelete(props.task.id);
        }}
      >
        Удалить заметку
      </button>
    </div>
  );
}

export default TaskList;


        
          
