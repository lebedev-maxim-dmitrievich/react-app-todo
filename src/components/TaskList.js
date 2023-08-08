import React from "react";

function TaskList(props) {
  let taskColor = 'gray';

  if (props.task.status === 'В процессе') {
    taskColor = 'blue';
  } else if (props.task.status === 'Выполнена') {
    taskColor = 'green';
  }

  const handleTaskClick = () => {
    props.onTaskClick(props.task);
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    props.onDelete(props.task.id);
  };

  return (
    <div className="task" onClick={handleTaskClick}>
      <h3>{props.task.title}</h3>
      <p style={{ color: taskColor }}>{props.task.status}</p>

      <button onClick={handleDeleteClick}>Удалить заметку</button>
    </div>
  );
}

export default TaskList;
