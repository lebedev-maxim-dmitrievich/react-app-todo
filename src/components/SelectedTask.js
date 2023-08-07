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
        type="text"
        name="title"
        value={task.title}
        onChange={handleInputChange}
      />
      <textarea name="body" value={task.body} onChange={handleInputChange} />
      <select name="status" value={task.status} onChange={handleInputChange}>
        <option value="Ожидает">Ожидает</option>
        <option value="В процессе">В процессе</option>
        <option value="Выполнена">Выполнена</option>
      </select>
    </div>
  );
}

export default SelectedTask;
