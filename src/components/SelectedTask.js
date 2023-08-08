import React from "react";

function SelectedTask(props) {
  const { task, onUpdateTask } = props;

  if (!task) {
    return <p>Заметка не выбрана</p>;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onUpdateTask({ ...task, [name]: value });
  };

  return (
    <div>
      <input
        className="title"
        type="text"
        name="title"
        value={task.title}
        onChange={handleInputChange}
      />
      <select
        className="status"
        name="status"
        value={task.status}
        onChange={handleInputChange}
      >
        <option value="Ожидает">Ожидает</option>
        <option value="В процессе">В процессе</option>
        <option value="Выполнена">Выполнена</option>
      </select>

      <textarea
        name="body"
        value={task.body}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SelectedTask;
