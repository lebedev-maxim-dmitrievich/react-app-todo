import React from "react";

function SelectedTask(props) {
  return (
    <div>
      {props.task ? (
        <div>
          <p>{props.task.id}. {props.task.title}</p>
          <p>{props.task.body}</p>
          <p>{props.task.status}</p>
        </div>
      ) : (
        <p>Заметка не выбрана</p>
      )}
    </div>
  );
}

export default SelectedTask;
