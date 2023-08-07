import React from "react";

function TaskList(props) {
  return (
    <div
      onClick={() => {
        props.onTaskClick(props.task);
      }}
    >
      <p>{props.task.title}</p>
      <p>{props.task.body}</p>
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
