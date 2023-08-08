//Импорт библиотек 
import React from "react";

function SelectedTask(props) {
  /*
    Дочерний функциональный компонент, который отвечает за отображение и возможность редактировать: заголовка, текста, статуса задачи
  */

  // Копия объекта task, которые передается с props
  const { task, onUpdateTask } = props;

  //  Если задача не выбрана, ничего не отображаем
  if (!task) {
    return <p>Заметка не выбрана</p>;
  }

  //  Обработчик событий, передает изменения в полях в родительский компонент
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

//Экспорт компонента для его импорта в других компонентах
export default SelectedTask;
