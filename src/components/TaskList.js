import React from "react";

function TaskList(props) {
  return (
    <div className="task"
      onClick={() => {
        props.onTaskClick(props.task);
      }}
    >
      <h3>{props.task.title}</h3>
      <p>{props.task.status}</p>

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
